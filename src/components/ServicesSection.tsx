"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductButton from "./ProductButton/ProductButton";
import { FaArrowCircleDown } from "react-icons/fa";
import { RiUserStarLine ,RiContractFill} from "react-icons/ri";
import { FaUserShield, FaUserNurse, FaUserDoctor } from "react-icons/fa6";
import { BsBuildingCheck } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { TbHomeShield } from "react-icons/tb";
import { MdHealthAndSafety, MdComputer } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
import { LuStamp } from "react-icons/lu";

import ItemCard from "./ItemCard/ItemCard";

const modesData = [
  {
    id: 1,
    Title: "Most popular",
    Subtitle: "Products",
    icon: <FaArrowCircleDown />,
    color: "#218bc4",
    mainIcon: <RiUserStarLine />,
    child: [
      {
        id: 1,
        title: "Motor Insurance",
        icon: <FaCar />,
        color: "#00aeaa",
      },
      {
        id: 2,
        title: "Motor Insurance",
        icon: <FaCar />,
        color: "#10326F",
      },
      {
        id: 3,
        title: "Health Insurance",
        icon: <MdHealthAndSafety />,
        color: "#10326F",
      },
      {
        id: 4,
        title: "Domestic Helper Health Insurance",
        icon: <FaUserNurse />,
        color: "#00aeaa",
      },
    ],
  },
  {
    id: 2,
    Title: "Individual",
    Subtitle: "Products",
    icon: <FaArrowCircleDown />,
    color: "#00aeaa",
    mainIcon: <FaUserShield />,
    child: [
      {
        id: 1,
        title: "Motor Insurance",
        icon: <FaCar />,
        color: "#00aeaa",
      },
      {
        id: 2,
        title: "Travel Insurance",
        icon: <IoAirplaneOutline />,
        color: "#00aeaa",
      },
      {
        id: 3,
        title: "Visa Extension Insurance",
        icon: <LuStamp />,
        color: "#00aeaa",
      },
      {
        id: 4,
        title: "Medical Malpractice Insurance",
        icon: <FaUserDoctor />,
        color: "#00aeaa",
      },
      {
        id: 5,
        title: "Domestic Helper Health Insurance",
        icon: <FaUserNurse />,
        color: "#00aeaa",
      },
      {
        id: 6,
        title: "Home Insurance",
        icon: <TbHomeShield />,
        color: "#00aeaa",
      },
      {
        id: 7,
        title: "Cyber Insurance",
        icon: <MdComputer />,
        color: "#00aeaa",
      },
    ],
  },
  {
    id: 3,
    Title: "Business",
    Subtitle: "Products",
    icon: <FaArrowCircleDown />,
    color: "#10326F",
    mainIcon: <BsBuildingCheck />,
    child: [
      {
        id: 1,
        title: "Motor Insurance",
        icon: <FaCar />,
        color: "#10326F",
      },
      {
        id: 2,
        title: "Property All Insurance",
        icon: <BsBuildingCheck />,
        color: "#10326F",
      },
      {
        id: 3,
        title: "Health Insurance",
        icon: <MdHealthAndSafety />,
        color: "#10326F",
      },
      {
        id: 4,
        title: "Contractors all risk Insurance",
        icon: <RiContractFill />,
        color: "#10326F",
      },
      {
        id: 5,
        title: "Fidelity Guarantee Insurance",
        icon: <FaUserNurse />,
        color: "#10326F",
      },
      {
        id: 6,
        title: "Marine Insurance",
        icon: <FaUserNurse />,
        color: "#10326F",
      },
      {
        id: 7,
        title: "Public Liability Insurance",
        icon: <FaUserNurse />,
        color: "#10326F",
      },
      {
        id: 8,
        title: "Group Life Insurance",
        icon: <FaUserNurse />,
        color: "#10326F",
      },
      {
        id: 9,
        title: "Trade Credit Insurance",
        icon: <FaUserNurse />,
        color: "#10326F",
      },

    ],
  },
];
const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const [selectedMode, setSelectedMode] = useState(1);
  return (
    <>
      <div className="bg-white relative z-10">
        <ProductButton
          modesData={modesData}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </div>
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-3xl md:text-4xl font-bold mb-4`}
              style={{ color: modesData[selectedMode - 1].color }}
            >
              Discover our extensive range of insurance products.
            </motion.h2>
          </div>

          <motion.div
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-0"
          >
            {modesData[selectedMode - 1]?.child?.map((service) => (
              <motion.div
                key={service.id}
                // variants={itemVariants}
              >
                <ItemCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
