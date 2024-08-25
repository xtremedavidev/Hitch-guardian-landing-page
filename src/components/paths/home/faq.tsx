import { FAQItem } from "@/components/ui";

export const FAQ = () => {
  return (
    <div className="mt-[100px] px-[5%]">
      <h1 className="section-header">Frequently Asked Questions</h1>
      <div className="mt-[60px] space-y-[35px]">
        {FAQArr.map((faq, index) => (
          <FAQItem
            key={faq.title}
            title={faq.title}
            desc={faq.desc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const FAQArr = [
  {
    title: "How does Hitch Guardian integrate with our current systems?",
    desc: "Our platform is designed to easily integrate with your existing tools and software, ensuring a seamless transition.",
  },
  {
    title: "Is my data secure?",
    desc: "We use industry-leading security protocols to protect your data and ensure compliance with all relevant regulations.",
  },
  {
    title: "What support options are available?",
    desc: "We offer 24/7 customer support and a dedicated account manager for Enterprise plans.",
  },
  {
    title: "How long does it take to get started?",
    desc: "Most businesses are up and running within a week, thanks to our intuitive setup process and comprehensive onboarding support.",
  },
];
