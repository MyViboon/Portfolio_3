"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "อบรมด้าน Network",
    description: "โครงการ CCNA ขั้นพื้นฐาน",
    image: "/images/cert/cisco.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "สอบการขับรถโฟล์คลิฟ",
    description: "สอบเพื่อนำใบประกาศส่งให้บริษัทอนุญาติขับขี่",
    image: "/images/cert/folklift.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ประกวดการแข่งขันดนตรี",
    description: "งานประกวดวงดนตรีที่ยิ่งใหญ่สุดในอยุธยา",
    image: "/images/cert/music.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "อบรมการออกแบบฐานข้อมูล",
    description: "การออกแบบฐานข้อมูลด้วย MySQL",
    image: "/images/cert/mysql.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "สอบการเขียนโปรแกรม",
    description: "ทำแบบทดสอบที่ทาง ผู้จัดกำหนดไว้",
    image: "/images/cert/python.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "อบรมการเขียนโปรแกรมอัตโนมัติ",
    description: "เขียนด้วย Python RPA",
    image: "/images/cert/rpa.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const CertSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="cert">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-1 md:mb-12">
        ใบประกาศที่รับรอง
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CertSection;
