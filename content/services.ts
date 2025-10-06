export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "individual",
    title: "Individual Counselling",
    summary:
      "One-on-one sessions for adults, teens, and children navigating anxiety, grief, trauma, and life transitions.",
    features: [
      "Trauma-informed psychotherapy",
      "Grief and loss processing",
      "Anxiety and stress management",
      "Spiritual integration and grounding practices",
    ],
  },
  {
    slug: "family",
    title: "Family & Parenting Support",
    summary:
      "Coaching and therapy for caregivers addressing attachment needs, blending families, and behavioural challenges.",
    features: [
      "Parent-child relationship strengthening",
      "Attachment and bonding support",
      "Behavioural and emotional regulation strategies",
      "Caregiver debriefs and wellbeing plans",
    ],
  },
  {
    slug: "group",
    title: "Group Therapy & Workshops",
    summary:
      "Purposeful spaces for shared healing, psychoeducation, and skills building in schools, churches, and workplaces.",
    features: [
      "School-based resilience groups",
      "Faith community support circles",
      "Leadership and caregiver retreats",
      "Custom psychoeducation workshops",
    ],
  },
  {
    slug: "organisations",
    title: "Organisational Support",
    summary:
      "Trauma-informed care consulting, policy development, and ongoing staff wellness programmes for NGOs and institutions.",
    features: [
      "Trauma-informed care frameworks",
      "Safeguarding and response protocols",
      "Employee assistance programmes",
      "Critical incident debriefing",
    ],
  },
];
