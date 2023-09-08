import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I apply for a passport?",
      answer:
        "You can apply for a passport by visiting our nearest passport office or applying online through our website.",
    },
    {
      question: "What documents do I need to apply for a passport?",
      answer:
        "You will need proof of identity, proof of address, and other required documents. Check our website for a complete list.",
    },
    {
      question: "How long does it take to process a passport application?",
      answer:
        "Processing times vary. It usually takes between 4-6 weeks, but expedited services are available for an additional fee.",
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className=" flex items-center justify-center p-44">
      <div className="container mx-auto text-black">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 transform transition duration-300 ease-in-out ${
                activeIndex === index
                  ? "shadow-lg"
                  : "hover:shadow-md hover:scale-105"
              }`}
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold">{item.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      activeIndex === index ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                    }
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="text-lg mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
FAQ