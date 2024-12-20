import { useParams } from "react-router-dom";

const exhibits = [
  {
    title: "PM Abiy Ahmed inaugurates Science Museum in Addis Ababa",
    image:
      "https://www.ethiopiansciencemuseum.et/_nuxt/inauguration.e66955ed.jpg",
    category: "Permanent Exhibition",
    description:
      "Prime Minster Abiy Ahmed along with high level government officials has inaugurated the dome shaped state of the art Science Museum in Addis Ababa.",
    fullDescription:
      "Prime Minster Abiy Ahmed along with high level government officials has inaugurated the dome shaped state of the art Science Museum in Addis Ababa. The museum which is perched on seven hectares of land consists of two buildings with multiple purposes. Building of the museum has its own halls dedicated to permanent and fleeting science and art exhibitions. The museum is also equipped with a solar system that will generate electricity required to the building. According to the Office of the Prime Minister, circular shape of the museum symbolizes perpetual development, human wisdom and is a testament to Ethiopia’s dedication to the future of technology.",
  },
];

const NewsDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title || "");
  const exhibit = exhibits.find((exhibit) => exhibit.title === decodedTitle);

  if (!exhibit) {
    return <div>News not found</div>;
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mb-4">{exhibit.title}</h2>
          <img
            src={exhibit.image}
            alt={exhibit.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-300 dark:text-gray-400">
            {exhibit.fullDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
