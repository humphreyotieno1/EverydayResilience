"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who do you serve?",
    answer:
      "We work with children, teens, and adults, as well as caregivers, educators, and organisations seeking trauma-informed support.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes. Sessions are available virtually across East Africa and internationally, with in-person options in Nairobi by appointment.",
  },
  {
    question: "How soon can I book a session?",
    answer:
      "After receiving your inquiry we respond within 24 hours to schedule an intake consultation and match you with a counsellor.",
  },
  {
    question: "Do you provide subsidised rates?",
    answer:
      "We partner with sponsors to offer subsidised pathways. During your intake we explore payment options that fit your context.",
  },
  {
    question: "Can organisations request customised programmes?",
    answer:
      "Absolutely. We co-design trainings, wellbeing initiatives, and resource toolkits tailored to your staff or community needs.",
  },
];

export function FAQSection() {
  return (
    <section className="container mx-auto space-y-10 px-4 pb-24">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">FAQs</p>
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Answers to common questions
        </h2>
        <p className="text-base text-muted-foreground">
          If you have a question that isn’t covered here, reach out and we’ll be happy to assist you.
        </p>
      </div>
      <Accordion type="single" collapsible className="divide-y divide-muted/30 rounded-3xl border border-muted/30 bg-background p-4 shadow-sm">
        {faqs.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index + 1}`} className="border-0">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}


