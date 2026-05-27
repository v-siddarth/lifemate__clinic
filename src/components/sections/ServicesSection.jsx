import { useEffect, useState } from "react";
import DotCluster from "../shared/DotCluster";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20.5s-7.5-4.4-9.5-8.6C.8 8.3 2.3 5.4 5 4.6c2-.6 4.1.2 5.2 1.8C11.3 4.8 13.4 4 15.4 4.6c2.7.8 4.2 3.7 2.5 7.3-2 4.2-9.5 8.6-9.5 8.6z" />
  </svg>
);

const VascularIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 4c2 1.4 3.5 3.2 4 5.5.7 3.1-1.4 5.2-1.4 7.6 0 1.6 1 2.9 2.4 3.9" />
    <path d="M14 4c-2 1.4-3.5 3.2-4 5.5-.7 3.1 1.4 5.2 1.4 7.6 0 1.6-1 2.9-2.4 3.9" />
    <path d="M17.5 7.5c1.8 2.2 2.2 4.6 1.1 7.2-1.1 2.6-3.2 3.9-5.6 4.8" />
  </svg>
);

const DiabetesIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2c2.5 3 6 6.1 6 10a6 6 0 1 1-12 0c0-3.9 3.5-7 6-10z" />
    <path d="M9.5 13.2c.8 1.3 2.2 2.1 3.7 2.1" />
  </svg>
);

const GeneralIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h7" />
    <path d="M9 7v10" />
    <path d="M14.5 8.5a2.5 2.5 0 1 1 3 3l-2.5 2.5a2.5 2.5 0 1 1-3-3z" />
  </svg>
);

const categories = [
  {
    title: "Cardiac Care",
    icon: HeartIcon,
    services: [
      {
        title: "ECG (Electrocardiogram)",
        text: "Resting ECG for rhythm assessment, chest pain evaluation, and baseline cardiac screening.",
      },
      {
        title: "2D Echo",
        text: "Ultrasound-based assessment of heart structure, valve function, and pumping efficiency.",
      },
      {
        title: "Stress Test (TMT)",
        text: "Treadmill exercise testing to evaluate effort tolerance and ischemia-related symptoms.",
      },
      {
        title: "Hypertension Management",
        text: "Personalized blood pressure control plans with medication review and lifestyle guidance.",
      },
      {
        title: "Heart Failure Management",
        text: "Symptom monitoring, medication optimization, and follow-up care for chronic heart failure.",
      },
      {
        title: "Preventive Cardiology",
        text: "Risk assessment for cholesterol, diabetes, and family history with prevention strategies.",
      },
    ],
  },
  {
    title: "Vascular Care",
    icon: VascularIcon,
    services: [
      {
        title: "Varicose Vein Evaluation",
        text: "Clinical assessment for visible veins, heaviness, cramps, and skin changes.",
      },
      {
        title: "Endovenous Laser Therapy (EVLT)",
        text: "Minimally invasive laser treatment to close diseased veins and improve circulation.",
      },
      {
        title: "Sclerotherapy",
        text: "Injection treatment for small varicose and spider veins to reduce appearance and symptoms.",
      },
      {
        title: "Venous Doppler Ultrasound",
        text: "Imaging to map vein reflux and guide treatment planning for venous disease.",
      },
      {
        title: "Leg Swelling & Pain Management",
        text: "Evaluation for venous insufficiency with compression and symptom relief plans.",
      },
      {
        title: "Spider Vein Treatment",
        text: "Targeted care for superficial veins with cosmetic and comfort-focused outcomes.",
      },
    ],
  },
  {
    title: "Diabetic Care",
    icon: DiabetesIcon,
    services: [
      {
        title: "Diabetes Diagnosis & Monitoring",
        text: "Evaluation with HbA1c, fasting, and post-meal glucose to guide treatment.",
      },
      {
        title: "Blood Sugar Management",
        text: "Medication planning, glucose targets, and follow-up tracking for safe control.",
      },
      {
        title: "Diabetic Neuropathy Care",
        text: "Assessment of tingling, numbness, and pain with symptom-directed care.",
      },
      {
        title: "Diabetic Foot Care",
        text: "Foot screening, wound prevention, and referral support for ulcers when needed.",
      },
      {
        title: "Diet & Lifestyle Counseling",
        text: "Personalized nutrition, activity, and weight guidance to support glucose control.",
      },
    ],
  },
  {
    title: "Gastroenterology",
    icon: GeneralIcon,
    services: [
      {
        title: "Digestive System Consultation",
        text: "Comprehensive evaluation of digestive health including stomach, intestines, liver, and related conditions.",
      },
      {
        title: "Liver & Gallbladder Care",
        text: "Assessment and treatment for fatty liver, liver disorders, gallstones, and related digestive conditions.",
      },
      {
        title: "Acidity, Gas & IBS Management",
        text: "Diagnosis and personalized care for acid reflux, bloating, chronic constipation, irritable bowel syndrome (IBS), and common digestive disorders.",
      },
      {
        title: "Endoscopy (Laparoscopy/Colonoscopy)",
        text: "Advanced diagnostic and therapeutic endoscopic procedures for comprehensive evaluation and treatment of the gastrointestinal tract.",
      },
      {
        title: "Gastroscopy",
        text: "Visual examination of the upper digestive system to accurately diagnose and treat esophageal, stomach, and duodenal issues.",
      },
      {
        title: "GI Surgery",
        text: "Specialized surgical treatments for complex gastrointestinal disorders, ensuring safe interventions and optimal digestive health.",
      },
    ],
  },
];

function ServiceCard({ title, text, Icon }) {
  return (
    <article className="service-card group rounded-[20px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#deefff] text-[#0084d4] transition group-hover:scale-[1.03]">
        <Icon />
      </div>
      <h4 className="text-[20px] font-semibold leading-snug text-[#0069ab]">{title}</h4>
      <div className="mt-3 h-[2px] w-10 rounded-full bg-[#cfeafb]" />
      <p className="mt-3 text-[14px] leading-6 text-[#5d5d5d]">{text}</p>
    </article>
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="services" className="relative bg-[#edf3f7] py-16 md:py-18 lg:py-20">
      <DotCluster className="absolute left-20 top-20" />
      <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]">
          Multi-specialty <span className="text-[#2cbeff]">clinical services</span> we offer
        </h3>
        <p className="mx-auto mt-6 max-w-[960px] text-center text-[16px] leading-8 text-[#888888]">
          Lifemate Clinic provides coordinated cardiac, vascular, diabetic, and general medical services for patients in JM Road, Deccan Gymkhana, and nearby Pune areas.
        </p>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-5 py-2 text-[14px] font-semibold transition ${
                  activeIndex === index
                    ? "border-[#2cbeff] bg-[#deefff] text-[#0069ab] shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
                    : "border-[#d7ecfb] bg-white text-[#4f4f4f] hover:border-[#9ed9fa] hover:text-[#0069ab]"
                }`}
                aria-pressed={activeIndex === index}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div
            key={activeIndex}
            className="services-zoom mt-8 rounded-[24px] border-2 border-[#cfeafb] bg-white/60 p-6 shadow-[0_16px_28px_rgba(0,0,0,0.06)] md:p-8"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#deefff] text-[#0084d4]">
                <activeCategory.icon />
              </span>
              <h4 className="text-center text-[24px] font-semibold text-[#0069ab] md:text-[28px]">{activeCategory.title}</h4>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {activeCategory.services.map((service) => (
                <ServiceCard key={service.title} {...service} Icon={activeCategory.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
