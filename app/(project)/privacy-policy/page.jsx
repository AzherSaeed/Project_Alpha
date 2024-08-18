import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Privacy = () => {
  return (
    <>
      <div className="overflow-hidden bg-slate-50 h-[400px] mb-[61px]">
      <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[21px] privay_container max-w-[1001px] mt-[100px] justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`font-bold text-[28px] sm:text-[32px] leading-[38px] sm:leading-[42px] text-center text-blue-950 font-Stoshi`}
          >
            Privacy Policy
          </div>
          <div
            className={`font-normal text-base sm:text-lg leading-7 sm:leading-8 text-center text-slate-500 capitalize font-Stoshi`}
          >
            Discover Your Potentials and grow with us
          </div>
        </div>
      </div>

      <div className="flex flex-col privay_container justify-start max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-[22px] max-w-[1052px] mb-[61px]">
          <div
            className={`font-bold text-base sm:text-lg leading-6 sm:leading-[22px] text-gray-600 font-Stoshi`}
          >
            Effective date: April 24, 2024
          </div>
          <div
            className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 capitalize font-Stoshi`}
          >
            This Privacy Policy describes how Vanta Inc. (“Vanta”) collects,
            uses and discloses information, and what choices you have with
            respect to the information.
          </div>
        </div>

        <div
          className={`font-semibold text-base sm:text-lg leading-6 sm:leading-[22px] text-zinc-700 ml-1 sm:ml-3 mb-[20px] font-Stoshi`}
        >
          1:{" "}
          <span className="font-bold capitalize">
            Scope of this Privacy Policy
          </span>
        </div>
        <div
          className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 capitalize font-Stoshi`}
        >
          This Privacy Policy applies to Vanta’s products and services,
          including applicable mobile and desktop applications (collectively,
          the “Services”), Vanta.com and other Vanta websites (collectively, the
          “Websites”) and other interactions (e.g., customer service inquiries,
          user conferences, etc.) you may have with Vanta. If you do not agree
          with the terms, do not access or use the Services, Websites, or any
          other aspect of Vanta’s business.
        </div>

        <div
          className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 mb-[68px] capitalize font-Stoshi`}
        >
          This Privacy Policy does not apply to any third-party applications or
          software that integrate with the Services through the Vanta platform
          (“Third-Party Services”), or any other third-party products, services,
          or businesses. In addition, a separate agreement governs delivery,
          access, and use of the Services (the “MSA”), including the processing
          of any data submitted through the Services (“Service Data”). The
          organization (e.g., your employer or another entity or person) that
          agreed to the MSA (“Customer”) controls its instance of the Services
          and any associated Service Data (the “Customer Instance”).
        </div>

        <div
          className={`font-semibold text-base sm:text-lg leading-6 sm:leading-[22px] text-zinc-700 ml-1 sm:ml-3 mb-[20px] font-Stoshi`}
        >
          2:{" "}
          <span className="font-bold capitalize">
            Information Vanta Collects and Receives
          </span>
        </div>
        <div
          className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 capitalize mb-[20px] font-Stoshi`}
        >
          This Privacy Policy applies to Vanta’s products and services,
          including applicable mobile and desktop applications (collectively,
          the “Services”), Vanta.com and other Vanta websites (collectively, the
          “Websites”) and other interactions (e.g., customer service inquiries,
          user conferences, etc.) you may have with Vanta. If you do not agree
          with the terms, do not access or use the Services, Websites, or any
          other aspect of Vanta’s business.
        </div>

        <div
          className={`font-semibold text-base sm:text-lg leading-6 sm:leading-[22px] text-zinc-700 capitalize font-Stoshi`}
        >
          Usage information.
        </div>
        <div
          className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 capitalize mb-[20px] font-Stoshi`}
        >
          <p>
            Services metadata. When an Authorized User interacts with the
            Services, metadata is generated that provides additional context
            about the way Authorized Users interact with the Services. For
            example, Vanta logs what Third Party Services are connected with the
            Services (if any).
          </p>
          <ul className="pl-5 ml-2 list-disc">
            <li>
              <span className={`font-bold capitalize font-Stoshi`}>
                Log data.
              </span>{" "}
              As with most technology services delivered over the Internet, our
              servers automatically collect information when you access or use
              our Websites or Services and record it in log files. This log data
              may include the Internet Protocol (IP) address, the address of the
              web page visited before using the Website or Services, browser
              type and settings, the date and time the Services were used,
              information about browser configuration and plugins, language
              preferences, and cookie data.
            </li>
            <li>
              <span className={`font-bold capitalize font-Stoshi`}>
                Device information.
              </span>{" "}
              Vanta collects information about devices accessing the Services,
              including type of device, what operating system is used, device
              settings, application IDs, unique device identifiers, and crash
              data. Whether Vanta collects some or all of this information often
              depends on the type of device used and its settings.
            </li>
            <li>
              <span className={`font-bold capitalize font-Stoshi`}>
                Location information.
              </span>{" "}
              Vanta receives information from you, your Customer, and other
              third parties that may help Vanta approximate your location. Vanta
              may, for example, use a business address submitted by your
              employer or an IP address received from your browser or device to
              determine approximate location. Vanta may also collect location
              information from devices in accordance with the consent process
              provided by your device.
            </li>
          </ul>
        </div>

        <div
          className={`font-medium text-base sm:text-lg leading-6 sm:leading-[22px] text-zinc-700 ml-1 sm:ml-3 mb-[31px] font-Stoshi`}
        >
          3:{" "}
          <span className="font-bold capitalize">
            Scope of this Privacy Policy
          </span>
        </div>
        <div
          className={`font-normal text-base sm:text-lg leading-7 sm:leading-[34px] text-slate-500 capitalize mb-[68px] font-Stoshi`}
        >
          This Privacy Policy applies to Vanta’s products and services,
          including applicable mobile and desktop applications (collectively,
          the “Services”), Vanta.com and other Vanta websites (collectively, the
          “Websites”) and other interactions (e.g., customer service inquiries,
          user conferences, etc.) you may have with Vanta. If you do not agree
          with the terms, do not access or use the Services, Websites, or any
          other aspect of Vanta’s business.
          <br />‍<br />
          This Privacy Policy does not apply to any third-party applications or
          software that integrate with the Services through the Vanta platform
          (“Third-Party Services”), or any other third-party products, services,
          or businesses. In addition, a separate agreement governs delivery,
          access, and use of the Services (the “MSA”), including the processing
          of any data submitted through the Services (“Service Data”). The
          organization (e.g., your employer or another entity or person) that
          agreed to the MSA (“Customer”) controls its instance of the Services
          and any associated Service Data (the “Customer Instance”).
        </div>
      </div>
    </>
  );
};

export default Privacy;
