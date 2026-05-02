import { clinicInfo } from "../../data/clinicInfo";

export default function StorySection() {
  return (
    <section id="about" className="bg-[#edf3f7] py-10">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <div className="rounded-[30px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.05)] md:p-8 lg:p-10">
          <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]">
            <span className="text-[#0084d4]">{clinicInfo.name}'s</span> <span className="text-[#2cbeff]">Story:</span> Get to know us
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <img src="/images/story-team.png" alt="Medical team" className="h-[280px] w-full rounded-[22px] border-2 border-[#9ed9fa] object-cover md:h-[360px] lg:h-[430px]" />
            <div className="pt-2">
              <p className="text-[16px] leading-8 text-[#5d5d5d]">
                {clinicInfo.name} was built with one clear mission: make quality healthcare personal, accessible, and dependable for every family we serve. Under the leadership of {clinicInfo.doctorName}, our team combines specialist clinical insight with compassionate day-to-day care, so every patient receives attention that is both medically sound and deeply human.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#5d5d5d]">
                From the first consultation to long-term follow-up, we focus on timely diagnosis, transparent communication, and practical treatment planning. Whether care is preventive or condition-focused, our commitment stays the same: deliver trusted guidance, measurable outcomes, and a confident care experience at every step.
              </p>
              <a href="#contact" className="mt-9 inline-flex rounded-[14px] bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] px-8 py-4 text-[17px] font-semibold leading-none text-white md:px-10 md:py-5 md:text-[18px]">Contact the clinic</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
