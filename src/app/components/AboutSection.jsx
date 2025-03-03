"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "ความสามารถ",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>เป็นมือกีต้าร์ เบส ร้านอาหารทั่วไป</li>
        <li>Fusion360</li>
        <li>JavaScrip</li>
        <li>Python</li>
        <li>Bot RPA</li>
      </ul>
    ),
  },
  {
    title: "ด้านการศึกษา",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>มัธยมศีกษาตอนปลาย / การศึกษานอกโรงเรียนอุบลราชธนี</li>
        <li>ประกาศนียบัตร วิชาชีพชั้นสูง / เทคนิคยานยนต์</li>
      </ul>
    ),
  },
  {
    title: "ประสบการณ์",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>พนักงานฝ่ายผลิต ฟูรูกาว่าไฟเทล / 2552-2562</li>
        <li>ช่างเทคนิค บริษัท เพ็นทินัม ดี จำกัด / 2562-ปัจจุบัน</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            เกี่ยวกับ ตัวฉัน
          </h2>
          <p className="text-base lg:text-lg">
            ผมคือช่าง เทคนิค บริษัท เพ็นทินัม มีความสามารถในการ ซ่อมคอมพิวเตอร์
            และเครื่องปริ๊นเตอร์ แก้ไขปัญหาให้มีการใช้งานได้ปกติ
            มีประสพการด้านการทำงานในสาขานี้ 5 ปี ประสพการทำงานโรงงาน กว่า 10ปี
            นอกจากนี้ ยังมีความสามารถด้านดนตรี เขียนโปรแกรม IOT และซอฟแวร์ ต่างๆ
            เขียนงานด้าน 3มิติ โปรแกรมที่ ถนัด มี Fusion360
            ภาษาที่ใช้เขียนและถนัด Python,JavaScrip เป็นคนที่ชอบหาความรู้ใหม่ๆ
            และจริงจังในสิ่งที่ทำ
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
