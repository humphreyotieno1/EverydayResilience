export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "general",
    title: "General Counselling",
    summary:
      "Personalised, trauma-informed sessions for adults, teens, and children, designed to help you process anxiety, grief, trauma, and major life transitions. We create a safe, supportive space to explore your story, build resilience, and develop practical coping strategies for everyday challenges.",
    features: [
      "Trauma-informed therapy",
      "Grief and loss processing",
      "Anxiety and stress management",
      "Spiritual integration and grounding practices",
    ],
    image: "/services/general.jpg",
  },
  {
    slug: "family",
    title: "Family & Parenting Support",
    summary:
      "Comprehensive coaching and therapy for caregivers, parents, and families navigating attachment needs, blended family dynamics, and behavioural or emotional challenges. We partner with you to strengthen relationships, foster secure bonds, and create nurturing home environments for children and teens.",
    features: [
      "Parent-child relationship strengthening",
      "Attachment and bonding support",
      "Behavioural and emotional regulation strategies",
      "Caregiver debriefs and wellbeing plans",
    ],
    image: "/services/family.jpg",
  },
  {
    slug: "anxiety",
    title: "Anxiety Treatment",
    summary:
      "Gentle, evidence-based interventions for teens and adults experiencing anxiety, panic, or chronic worry. Our approach combines somatic techniques, cognitive reframing, and mindfulness to help you understand anxiety triggers, regain a sense of calm, and build confidence in daily life.",
    features: [
      "Somatic and breath regulation",
      "Cognitive reframing techniques",
      "Grounding and mindfulness practices",
      "Short-term crisis support",
    ],
    image: "/services/anxiety.jpg",
  },
  {
    slug: "depression",
    title: "Depression Therapy",
    summary:
      "A compassionate, non-judgmental space to be seen, heard, and supported as you navigate depression or seasons of emotional heaviness. We use integrative therapies to help you rediscover hope, reconnect with meaning, and develop tools for sustainable wellbeing, with referrals for psychiatric care as needed.",
    features: [
      "Narrative and expressive therapy",
      "Behavioural activation coaching",
      "Integrative faith-sensitive support",
      "Referrals for psychiatric consultation",
    ],
    image: "/services/depression.jpg",
  },
];
