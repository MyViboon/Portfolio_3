import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          จะติดต่อฉันได้อย่างไร
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          ฉันกำลังมองหาโอกาสใหม่ๆ อยู่ในขณะนี้ กล่องจดหมายของฉันเปิดอยู่เสมอ
          ไม่ว่าคุณจะมีคำถามหรือแค่ต้องการทักทาย
          ฉันจะพยายามตอบกลับคุณให้ดีที่สุด!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"github.com"}>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={"linkedin-.com"}>
            <Image src={LinkedinIcon} alt="linkedin- Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={""}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              ใส่ Email ของคุณ
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              หัวข้อเรื่อง
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="สวัสดี ใส่หัวข้อ"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              ข้อความ
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="มีเรื่องเกี่ยวกับ..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            ส่งข่้อความ
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
