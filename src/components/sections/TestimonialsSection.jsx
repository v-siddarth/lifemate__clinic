import DotCluster from "../shared/DotCluster";

const testimonials = [
  {
    name: "Patient Feedback",
    text: "Patients appreciate the doctor’s clear explanations and practical guidance for long-term heart health management.",
  },
  {
    name: "Patient Feedback",
    text: "Visitors frequently mention smooth appointment coordination and supportive follow-up communication.",
  },
  {
    name: "Patient Feedback",
    text: "Many families value the calm consultation experience and focused risk-based treatment planning.",
  },
  {
    name: "Patient Feedback",
    text: "Review highlights often include timely diagnosis support and confidence in preventive cardiology advice.",
  },
];

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#edf3f7] py-24">
      <DotCluster className="absolute left-24 top-44" />
      <DotCluster className="absolute right-24 bottom-40" />

      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]"><span className="text-[#0084d4]">Patient Feedback:</span><br />What visitors value at Lifemate Clinic</h3>
        <p className="mt-6 text-center text-[16px] text-[#888888]">Quality care is reflected in patient experience, consistency of follow-up, and trust in treatment planning.</p>

        {/* <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10"> */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {testimonials.map((t, i) => (
            <article key={i} className="flex items-center gap-5 rounded-[24px] border-2 border-[#75d4ff] bg-[#f3f8fc] px-7 py-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#deefff] text-[#0084d4] md:h-20 md:w-20">
                <UserIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 text-[16px] font-semibold text-[#f4b400]">
                  <div className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <span className="text-[14px] text-[#3d3d3d]">5/5</span>
                  <span className="sr-only">Rated 5 out of 5</span>
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#5d5d5d]">"{t.text}"<br /><span className="font-semibold text-[#3d3d3d]">- {t.name} {i + 1}</span></p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {[
            { title: "Mon-Sat", subtitle: "09:30 AM - 6:00 PM" },
            { title: "+91 84596 12363", subtitle: "Primary Contact" },
            { title: "Bhandarkar Road", subtitle: "Deccan Gymkhana, Pune" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#9ed9fa] bg-[#f3f8fc] px-4 py-6 text-center shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <p className="text-[22px] font-bold leading-tight text-[#0084d4] md:text-[28px]">{item.title}</p>
              <p className="mt-2 text-[14px] text-[#5d5d5d] md:text-[15px]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
