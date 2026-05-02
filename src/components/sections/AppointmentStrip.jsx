import { clinicInfo } from "../../data/clinicInfo";

export default function AppointmentStrip() {
  const callbackHref = `tel:${clinicInfo.phonePrimary.replace(/\s+/g, "")}`;
  return (
    <div id="appointment" className="relative z-10 mx-auto mt-12 w-full max-w-[1320px] px-5 pb-8 lg:px-6">
      <div className="rounded-[24px] border-2 border-[#9ed9fa] bg-[#f3f8fc] px-5 pb-6 pt-6 shadow-[0_24px_40px_rgba(0,0,0,0.05)] md:px-8 md:pb-8 md:pt-8 lg:rounded-[30px] lg:px-10 lg:pb-10 lg:pt-9">
        <h2 className="text-[34px] font-bold leading-tight text-[#0069ab] md:text-[42px] lg:text-[52px]">
          Book your consultation in 3 simple steps.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 xl:grid-cols-[1fr_1fr_1fr_220px] xl:items-end xl:gap-5">
          <label className="grid gap-3">
            <span className="inline-flex items-center gap-2 text-[17px] font-medium text-[#888888]">
              <svg className="h-[18px] w-[18px] text-[#7f7f7f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Address
            </span>
            <input type="email" placeholder="Enter your email address" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f] placeholder:text-[#d1d1d1]" />
          </label>
          <label className="grid gap-3">
            <span className="inline-flex items-center gap-2 text-[17px] font-medium text-[#888888]">
              <svg className="h-[18px] w-[18px] text-[#7f7f7f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5.5 4.5H8.8L10.2 8.2L8.5 10.3C9.5 12.3 11 13.8 13 14.8L15.1 13.1L18.8 14.5V17.8C18.8 18.7 18.1 19.5 17.2 19.5C10.6 19.1 5 13.5 4.5 6.8C4.5 5.9 5.2 5.2 6.1 5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Contact Number
            </span>
            <input type="tel" placeholder="Enter your contact number" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f] placeholder:text-[#d1d1d1]" />
          </label>
          <label className="grid gap-3">
            <span className="inline-flex items-center gap-2 text-[17px] font-medium text-[#888888]">
              <svg className="h-[18px] w-[18px] text-[#7f7f7f]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 3.8V7.2M16 3.8V7.2M3.5 9.2H20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Date of Appointment
            </span>
            <input type="date" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f]" />
          </label>
          <a
            href={callbackHref}
            className="inline-flex h-[64px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] px-6 text-[18px] font-semibold text-white"
            aria-label={`Request a callback from ${clinicInfo.name}`}
          >
            Request Callback
          </a>
        </div>
      </div>
    </div>
  );
}
