import { clinicInfo } from "../../data/clinicInfo";
import DotCluster from "../shared/DotCluster";

const doctors = [
  {
    name: "Dr. Ajay D. Mate",
    role: "General Physician & Diabetologist",
    desc: "With over 22 years of clinical experience, Dr. Ajay D. Mate specializes in general medicine, diabetes management, and preventive healthcare. He is known for his patient-first approach and meticulous diagnostic skills.",
    experience: "22+ years in general medicine",
    image: "/images/specialist-male.png",
  },
  {
    name: "Dr. Swapnil D. Mate",
    role: "Interventional Cardiologist",
    desc: "An expert in interventional and preventive cardiology, Dr. Swapnil D. Mate focuses on early cardiac diagnosis, risk reduction, and long-term cardiovascular outcomes with advanced treatment protocols.",
    experience: "10+ years in interventional cardiology",
    image: "/images/specialist-male.png",
  },
  {
    name: "Dr. Rucha A. Mate",
    role: "Obstetrician & Gynecologist",
    desc: "Dr. Rucha A. Mate brings compassionate care to women's health, specializing in obstetrics, gynecology, and prenatal wellness. She is dedicated to providing personalized treatment for every stage of a woman's life.",
    experience: "Specialist in women's health",
    image: "/images/specialist-female.png",
  },
  {
    name: "Dr. Kshama S. Mate",
    role: "Dental Surgeon",
    desc: "Dr. Kshama S. Mate is a skilled dental surgeon offering comprehensive oral healthcare including cosmetic dentistry, restorative procedures, and preventive dental care with a gentle, patient-friendly approach.",
    experience: "Expert in dental & oral care",
    image: "/images/specialist-female.png",
  },
];

export default function SpecialistsSection() {
  const appointmentHref = clinicInfo.appointmentUrl || "#appointment";
  return (
    <section id="doctors" className="relative bg-[#edf3f7] py-20">
      <DotCluster className="absolute left-[270px] top-[330px]" />
      <DotCluster className="absolute right-[260px] bottom-[100px]" />

      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]"><span className="text-[#2cbeff]">Clinical Specialists:</span><br />Meet our core care team</h3>
        <p className="mx-auto mt-6 max-w-[980px] text-center text-[16px] leading-8 text-[#888888]">Lifemate Clinic combines specialist consultation with a dedicated support team for complete cardiac, vascular, diabetic, and general care in Pune.</p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,132,212,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,132,212,0.18)]"
            >
              {/* Image area */}
              <div className="relative flex h-[240px] items-end justify-center overflow-hidden bg-gradient-to-br from-[#2cbeff] to-[#0084d4] px-4 pt-4 sm:h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0069ab]/30 to-transparent" />
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="relative z-10 h-full w-auto max-w-[220px] object-contain object-bottom drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* Content area */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h4 className="text-[22px] font-bold leading-tight text-[#3d3d3d] sm:text-[24px]">
                  {doctor.name}
                </h4>
                <p className="mt-1 text-[15px] font-semibold text-[#0084d4]">
                  {doctor.role}
                </p>
                <span className="mt-3 inline-flex w-fit rounded-full bg-[#eff9ff] px-4 py-1.5 text-[13px] font-semibold text-[#0084d4]">
                  {doctor.experience}
                </span>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-[#6d6d6d]">
                  {doctor.desc}
                </p>
                <a
                  href={appointmentHref}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#2cbeff] to-[#0084d4] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,132,212,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,132,212,0.35)] hover:brightness-110"
                  aria-label={`Book appointment with ${doctor.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
