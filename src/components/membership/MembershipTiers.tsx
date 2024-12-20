import React from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Individual",
    price: "$75",
    period: "/year",
    benefits: [
      "Unlimited free admission",
      "Member-only exhibition previews",
      "Quarterly newsletter subscription",
      "10% discount at museum shop",
    ],
  },
  {
    name: "Family",
    price: "$120",
    period: "/year",
    featured: true,
    benefits: [
      "All Individual benefits",
      "Free admission for 2 adults and children",
      "Free tickets to family events",
      "15% discount at museum shop",
      "Priority booking for workshops",
    ],
  },
  {
    name: "Patron",
    price: "$250",
    period: "/year",
    benefits: [
      "All Family benefits",
      "VIP exhibition access",
      "Exclusive curator tours",
      "20% discount at museum shop",
      "Recognition on donor wall",
      "Private event invitations",
    ],
  },
];

export default function MembershipTiers() {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 ${
              tier.featured
                ? "bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-white ring-4 ring-offset-2"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-4 ${
                tier.featured ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              {tier.name}
            </h3>
            <div className="flex items-baseline mb-6 dark:text-gray-300">
              <span className="text-4xl font-bold ">{tier.price}</span>
              <span
                className={`ml-2 ${
                  tier.featured ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {tier.period}
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Check
                    className={`w-5 h-5 mr-3 flex-shrink-0 ${
                      tier.featured ? "text-blue-200" : "text-blue-600"
                    }`}
                  />
                  <span
                    className={
                      tier.featured
                        ? "text-blue-100"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                tier.featured
                  ? "bg-white text-blue-600 hover:bg-blue-50"
                  : "bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-white hover:opacity-90"
              }`}
            >
              Become a {tier.name} Member
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
