import { clinicInfo } from "../../data/clinicInfo";

export default function FooterSection() {
  const phonePrimaryHref = `tel:${clinicInfo.phonePrimary.replace(/\s+/g, "")}`;
  const phoneSecondaryHref = `tel:${clinicInfo.phoneSecondary.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${clinicInfo.email}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.address)}`;
  const companyName = "LifeMate Healthcare Pvt Ltd";
  const companyTagline =
    "Trusted healthcare network focused on patient-first care, hospital excellence, and future-ready health innovation.";

  const footerLinks = [
    {
      title: "Support",
      items: [
        { label: "Appointment Booking", href: "#appointment" },
        { label: "Clinic Timings", href: "#contact" },
        { label: "Help Desk", href: "#contact" },
        { label: "Reports & Follow-up", href: "#services" },
        { label: "Contact Clinic", href: "#contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Cardiology Consultation", href: "#services" },
        { label: "Preventive Check-ups", href: "#services" },
        { label: "Hypertension Care", href: "#services" },
        { label: "ECG & Rhythm Guidance", href: "#services" },
        { label: "Cholesterol Management", href: "#services" },
      ],
    },
    {
      title: "Information",
      items: [
        { label: "About Clinic", href: "#about" },
        { label: "Doctor Profile", href: "#doctors" },
        { label: "Location & Directions", href: mapHref },
      ],
    },
  ];

  const quickActions = [
    { label: "Call", href: phonePrimaryHref },
    { label: "Email", href: emailHref },
    { label: "Directions", href: mapHref },
    { label: "Book", href: "#appointment" },
  ];

  return (
    <footer className="border-t border-[#dbe7ef] bg-[#deeff8] pb-12 pt-16">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="LifeMate Healthcare" className="h-16 w-16 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="text-[24px] font-bold leading-[1] tracking-[0.1px] text-[#0E5A8A]">
                  LifeMate Clinic
                  <sup className="ml-1 align-super text-[11px] font-bold text-[#0E5A8A]/70">TM</sup>
                </span>
                {/* <span className="mt-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#0E5A8A]">
                  Pvt Ltd
                </span> */}
              </span>
            </div>
            <p className="mt-6 max-w-[420px] text-[16px] leading-8 text-[#5d5d5d]">{companyTagline}</p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[17px] font-semibold text-[#0084d4]">{group.title}</h4>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item.label} className="text-[16px] text-[#5d5d5d]">
                    <a href={item.href} className="hover:text-[#0084d4]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[17px] font-semibold text-[#0084d4]">Contact</h4>
            <div className="mt-5 grid gap-2 text-[15px] text-[#5d5d5d]">
              <a href={mapHref} target="_blank" rel="noreferrer" className="hover:text-[#0084d4]">
                Flat No.104, Samadhan Apartments, Good Luck Square, beside The Oakwood Hotel, Deccan Gymkhana, Bhandarkar Rd, Pune, Maharashtra 411004
              </a>
              <div className="flex flex-wrap items-center gap-2">
                <a href={phonePrimaryHref} className="hover:text-[#0084d4]">{clinicInfo.phonePrimary}</a>
                <span className="text-[#9bb2c1]">|</span>
                <a href={phoneSecondaryHref} className="hover:text-[#0084d4]">{clinicInfo.phoneSecondary}</a>
              </div>
              <a href={emailHref} className="hover:text-[#0084d4]">{clinicInfo.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-[#9ed9fa] pt-6 text-[16px] text-[#888888]">
          <div className="flex flex-wrap justify-center gap-3 text-[13px] font-semibold text-[#00a4f4]">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="rounded-full border border-[#9ed9fa] bg-white px-4 py-1.5 hover:text-[#0084d4]"
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="text-center">
            <p>@{new Date().getFullYear()} {companyName}. All rights reserved.</p>
            <p>
              Developed and maintained by{" "}
              <a
                href="https://20sdevelopers.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0084d4] hover:text-[#0069ab]"
              >
                20's Developers
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
