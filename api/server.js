import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use CORS middleware before defining routes
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's origin
  })
);

// Parse JSON bodies
app.use(express.json());

// Handle preflight requests for all routes
app.options("*", cors());

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist")));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const context = `
Ethiopia Science Museum a national Science Museum located in the heart of Addis Ababa. This initiative is part of a series of efforts of providing the Ethiopian public as well as international visitors a view of history, culture heritage, natural heritage as well as showcasing science promoting a new era whereby people will experience and envision a hopeful future for all.

Science is the pursuit and application of knowledge and understanding of the natural and social world; It generates solutions for everyday life and helps us to answer the great mysteries of the universe.

The Science Museum will be a bridge between science, society, and technology.
The promotion of science and technology is an essential element of Ethiopia’s development agenda; it is a transversal element of sustainable development with the capacity of promoting youth participation in community development, offering them the means to participate in economic growth, and becoming key agents for technological innovation.

THE VISION
The Science Museum is the Vision of the Prime Minister whose leitmotiv is to bring together a world of science where we will be able to embrace technology, innovative practices, and methods, to advance understanding, improve lives, and shape the future while being respectful of our environment. 

It is also the Prime Minister’s objective to expose Ethiopia and more broadly Africa’s contribution to science as well as ensure we create an enabling environment to ensure the next big innovation breakthrough comes out of our region.

THE OBJECTIVES
The Ethiopia Science Museum will have exhibition spaces that will collect, restore, and preserve homegrown and more broadly African findings, as well as be a space for innovative and future ideas, services, and products; a space where visitors come to be awed by science and to learn and understand its impact in defining who we are and what we do.

It will primarily be a place of learning and inspiration, whereby people will gather to experience the challenges and opportunities shaping our times and find solutions for a better future. It will be a place of tolerance, inviting varied cultural and social outlooks giving Ethiopia the potential to promote its role for Africa and African scientific discoveries in line with the principles and vision of the African Union of having “Great Museums for Africa."
`;

const additionalContext = `
The Ethiopia Museum of Art and Science is a 15,000 m2 (160,000 sq ft) science museum in Addis Ababa, Ethiopia. It was inaugurated by Prime Minister Abiy Ahmed along with other high-ranking officials on 4 October 2022. Part of the Chinese-aided Addis Ababa Riverside Development Project Phase II, the museum contains an exhibition hall dedicated to scientific and developmental research. The museum lies on 6.78 hectares (16.8 acres) with a 9-metre (30 ft) circular shape dubbed "ring of wisdom" to denote "human ability and skillfulness to create objects". In addition, the second room is dedicated to a three-dimensional theatre movie called Dome Theatre. The museum also contains several building complexes and interactive display screens, cybersecurity, finance, geographical information system (GIS), service industries, data analysis, manufacturing, and robotics.

During the inauguration, Abiy Ahmed highlighted the importance of the science museum for state-sponsored digital transformation in the country and promised that it would give opportunities for young people workshops.

The science museum was inaugurated by Prime Minister Abiy Ahmed and other high-ranking government officials on 4 October 2022 in the hub of Addis Ababa. Part of the Chinese-aided Addis Ababa Riverside Green Development Project Phase II, the museum contains a science and technology exhibition hall dedicated to scientific and developmental research. Lying on 6.78 hectares (16.8 acres), the 15,000 m2 (160,000 sq ft) 9-metre (30 ft) high museum exhibition area is designed in a circular shape dubbed "ring of wisdom" denoting "humanity's endless ability and capacity to continuously create".

The second portion of the museum is the Dome Theatre, a 450 m2 (4,800 sq ft) three-dimensional cinema 24-metre (79 ft) high and able to accommodate up to 200 people at once. The inauguration coincided with the Pan-African Conference on Artificial Intelligence 2022, acclaimed as progress towards envisioning the future of technology in Africa's digital transformation.

In the museum, there are several building complexes and interactive display screens in local solutions in healthcare, finance, cybersecurity, geographic information system (GIS), service industries, data analysis, manufacturing, and robotics. Abiy Ahmed highlighted the importance of the advance of science and technology, citing Ethiopia's Digital Economy Strategy, which operated two years prior. Abiy emphasized the necessity of the Artificial Intelligence Institute as part of government institutions undertaking digital transformation in the country. Furthermore, Abiy promised that the museum would provide workshop opportunities for young people. The construction totally cost 1.1 billion birr.
`;

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // Filter user questions to ensure they are relevant to the museum
  const filteredMessage = `Please answer the following question only if it is related to the Ethiopia Science Museum: ${message}`;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `${context}\n\n${additionalContext}\n\nUser: ${filteredMessage}`,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log the response to understand its structure
    console.log("Gemini API response:", JSON.stringify(response.data, null, 2));

    // Adjust the code based on the actual response structure
    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates[0] &&
      response.data.candidates[0].content &&
      response.data.candidates[0].content.parts &&
      response.data.candidates[0].content.parts[0] &&
      response.data.candidates[0].content.parts[0].text
    ) {
      const reply = response.data.candidates[0].content.parts[0].text.trim();
      res.status(200).json({
        reply: `Hello! Here is the information you requested: ${reply}`,
      });
    } else {
      throw new Error("Unexpected response structure from Gemini API");
    }
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    if (error.response && error.response.status === 429) {
      res.status(429).json({
        error:
          "You have exceeded your quota. Please check your Gemini plan and billing details.",
      });
    } else {
      res.status(500).json({ error: "Error communicating with Gemini" });
    }
  }
});

// Serve the React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});
const PORT = process.env.PORT || 5002; // Change 5001 to 5002 or any available port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
