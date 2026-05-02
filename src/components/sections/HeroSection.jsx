import { clinicInfo } from "../../data/clinicInfo";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#edf3f7] pt-8 lg:pt-10">
      <svg
        className="pointer-events-none absolute inset-x-0 top-[330px] hidden h-[520px] w-full lg:block"
        viewBox="0 0 1536 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-40 480C120 300 280 300 470 345C640 385 790 355 940 235C1100 100 1265 130 1576 130"
          stroke="#75D4FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="13 13"
          opacity="0.75"
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] gap-8 px-5 lg:grid-cols-[1.03fr_0.97fr] lg:items-start lg:px-6">
        <div className="pt-6 lg:pt-16">
          <h1 className="max-w-[700px] text-[38px] font-bold leading-[1.06] tracking-[-0.02em] text-[#3d3d3d] md:text-[52px] lg:text-[64px]">
            <span className="md:whitespace-nowrap">Reliable Healthcare Services</span>
            <br />
            <span className="bg-gradient-to-r from-[#0084d4] to-[#75d4ff] bg-clip-text text-transparent">
              for You and Your Family
            </span>
            <br />
            in Pune
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            {["Heart Care", "Vein Care", "Diabetes Care", "Gastroenterology"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#bfe6fb] bg-white px-4 py-2 text-[13px] font-semibold text-[#0069ab] shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-7 max-w-[700px] text-[15px] leading-[1.55] text-[#4f4f4f]">
            <span className="font-semibold text-[#0084d4]">
              Providing accessible and affordable general healthcare services
            </span>{" "}
            with a focus on timely diagnosis, preventive care, and long-term wellness for individuals and families.
          </p>

          <a
            href="#appointment"
            className="mt-8 inline-flex items-center gap-3 rounded-[16px] bg-gradient-to-r from-[#7fd4ff] to-[#00a4f4] px-7 py-4 text-[16px] font-semibold leading-none text-white shadow-[0_18px_32px_rgba(0,164,244,0.22)] transition hover:brightness-95 md:px-10 md:py-5 md:text-[17px]"
          >
            Book an appointment
            <span aria-hidden="true" className="text-[30px] md:text-[34px]">›</span>
          </a>
          <p className="mt-5 text-[14px] font-medium text-[#5d5d5d]">
            {clinicInfo.phonePrimary} | {clinicInfo.phoneSecondary}
          </p>
        </div>

        <div className="relative mt-4 flex justify-center lg:mt-0 lg:justify-end">
          <div className="absolute right-[50%] top-[80px] h-[300px] w-[300px] translate-x-1/2 rounded-full bg-gradient-to-b from-[#2cbeff] to-[#75d4ff] md:h-[430px] md:w-[430px] lg:right-[56px] lg:top-[120px] lg:h-[560px] lg:w-[560px] lg:translate-x-0" />

          <img src="/images/doctor-hero.png" alt="Doctor" className="relative z-10 mt-[64px] h-[420px] w-auto object-contain md:h-[560px] lg:h-[660px]" />

          <div className="absolute left-1/2 top-[290px] z-20 flex w-[90%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#ececec] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] md:top-[390px] md:w-auto md:gap-4 md:px-7 md:py-4 lg:left-[40px] lg:top-[440px] lg:-translate-x-0">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#eff9ff] text-[#0084d4]">★</span>
            <span className="text-[16px] font-semibold text-[#0069ab]">Book Same-Day Visit</span>
          </div>

          <div className="absolute bottom-[20px] right-1/2 z-20 w-[90%] translate-x-1/2 rounded-2xl border border-[#9ed9fa] bg-[#def1ff] px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.06)] md:bottom-[30px] md:w-[380px] md:px-6 md:py-5 lg:bottom-[40px] lg:right-0 lg:translate-x-0">
            <span className="absolute left-4 top-[-24px] text-[74px] font-bold leading-none text-[#00a4f4]">“</span>
            <p className="text-[16px] leading-relaxed text-[#4f4f4f]">
              "The clear communication and thoughtful care made my treatment journey comfortable and reassuring."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
