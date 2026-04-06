"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Home,
  Building2,
  Landmark,
  Map,
  CheckCircle2,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Buy");

  const categories = [
    { name: "Houses", count: "12,400 Listings", icon: Home },
    { name: "Apartments", idx: 1, count: "18,600 Listings", icon: Building2 },
    { name: "Commercial", count: "6,200 Listings", icon: Landmark },
    { name: "Land", count: "8,500 Listings", icon: Map },
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Luxurious Villa in Defense",
      location: "Gulberg III, Lahore",
      price: "750,000",
      beds: 5,
      baths: 4,
      sqft: 4500,
      image: "/images/img1.webp",
      tag: "Featured",
    },
    {
      id: 2,
      title: "Modern Apartment Gulberg",
      location: "Gulberg III, Lahore",
      price: "125,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/images/img2.webp",
    },
    {
      id: 3,
      title: "Penthouse with City View",
      location: "Downton, Karachi",
      price: "350,000",
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: "/images/img3.webp",
      tag: "Featured",
    },
    {
      id: 4,
      title: "Cozy Family Home",
      location: "DHA Phase 6, Lahore",
      price: "95,000",
      beds: 3,
      baths: 2,
      sqft: 1600,
      image: "/images/img4.webp",
    },
  ];

  const filterData = {
    Buy: {
      types: ["All Types", "House", "Apartment", "Plot", "Commercial"],
      prices: [
        "Any Price",
        "Under 1 Crore",
        "1 - 5 Crore",
        "5 - 10 Crore",
        "10 Crore+",
      ],
      placeholder: "City or area to buy",
    },
    Rent: {
      types: ["All Types", "House", "Apartment", "Room", "Office"],
      prices: [
        "Any Price",
        "Under 50k",
        "50k - 1.5 Lakh",
        "1.5 Lakh - 5 Lakh",
        "5 Lakh+",
      ],
      placeholder: "City or area to rent",
    },
    Projects: {
      types: ["All Projects", "Residential", "Commercial", "Mixed Use"],
      prices: ["Any Price", "Under Construction", "Ready to Move", "Investment"],
      placeholder: "Search new projects",
    },
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <section className="relative bg-[#1B263B] py-16 md:py-24 px-4 md:px-6 text-center text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Discover premium properties, connect with verified agents, and invest
            in your future
          </p>

          <div className="bg-white p-2 rounded-xl shadow-2xl max-w-3xl mx-auto border border-gray-50">
            <div className="flex border-b border-gray-100">
              {Object.keys(filterData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-6 py-3 font-semibold text-sm md:text-base transition-all duration-200 ${
                    activeTab === tab
                      ? "text-[#1B263B] border-b-2 border-[#E0C18E]"
                      : "text-gray-500 hover:text-[#1B263B]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 items-end">
              <div className="text-left border-r border-gray-100 last:border-none pr-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-1 block">
                  Location
                </label>
                <input
                  type="text"
                  placeholder={filterData[activeTab].placeholder}
                  className="w-full text-gray-800 text-sm outline-none border-none p-1 placeholder:text-gray-300"
                />
              </div>

              <div className="text-left border-r border-gray-100 last:border-none pr-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-1 block">
                  {activeTab === "Projects" ? "Project Type" : "Property Type"}
                </label>
                <select className="w-full text-gray-800 text-sm outline-none border-none p-1 bg-transparent cursor-pointer">
                  {filterData[activeTab].types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-left border-r border-gray-100 last:border-none pr-2">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase mb-1 block">
                  {activeTab === "Projects" ? "Status" : "Price Range"}
                </label>
                <select className="w-full text-gray-800 text-sm outline-none border-none p-1 bg-transparent cursor-pointer">
                  {filterData[activeTab].prices.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>

              <button className="bg-[#1B263B] text-white flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-[#25334d] transition-all font-semibold shadow-md active:scale-95">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#f4f4f5] text-center">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="text-2xl md:text-3xl font-bold text-[#1B263B] mb-2"
          >
            Browse by Category
          </motion.h2>

          <p className="text-gray-500 mb-12 text-sm md:text-base">
            Explore properties across different categories
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 md:p-8 border border-gray-100 rounded-xl bg-white hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B263B] transition-colors">
                  <cat.icon
                    className="text-[#1B263B] group-hover:text-[#E0C18E]"
                    size={32}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1B263B]">
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">{cat.count}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B263B] mb-2">
                Featured Properties
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Handpicked properties curated for you
              </p>
            </div>

            <Link
              href="/public/search"
              className="text-[#E0C18E] font-semibold hover:underline flex items-center gap-1"
            >
              View All 
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                variants={scaleIn}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {prop.tag && (
                    <span className="absolute top-4 left-4 bg-[#E0C18E] text-[#1B263B] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {prop.tag}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#1B263B] mb-1">
                    {prop.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
                    <Map size={12} /> {prop.location}
                  </p>
                  <p className="text-[#1B263B] text-xl font-bold mb-4">
                    {prop.price}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4 text-gray-500 text-xs">
                    <span>{prop.beds} Beds</span>
                    <span>{prop.baths} Baths</span>
                    <span>{prop.sqft} sqft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#f4f4f5] text-center">
        <div className="container mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B263B] mb-2">
              Why Choose ZameenBUY?
            </h2>
            <p className="text-gray-500 mb-16 text-sm md:text-base">
              Industry-leading platform with proven results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            <motion.div variants={fadeUp} whileHover={{ y: -10 }}>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-[#E0C18E]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#1B263B]">
                45,000+
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                Properties Listed
              </p>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -10 }}>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#E0C18E]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#1B263B]">
                120,000+
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                Happy Clients
              </p>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -10 }}>
              <div className="w-12 h-12 bg-[#F8F9FA] rounded flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-[#E0C18E]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-[#1B263B]">
                2,500+
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                Expert Agents
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <motion.div
              variants={fadeUp}
              className="p-6 border border-gray-100 bg-white rounded-lg flex gap-4"
            >
              <CheckCircle2 className="text-[#E0C18E] shrink-0" />
              <div>
                <h5 className="font-bold text-[#1B263B] mb-2">
                  Verified Listings
                </h5>
                <p className="text-gray-500 text-sm">
                  Every property is thoroughly verified and comes with authentic
                  documentation.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-6 border border-gray-100 bg-white rounded-lg flex gap-4"
            >
              <CheckCircle2 className="text-[#E0C18E] shrink-0" />
              <div>
                <h5 className="font-bold text-[#1B263B] mb-2">Expert Support</h5>
                <p className="text-gray-500 text-sm">
                  24/7 dedicated support team ready to help you find your perfect
                  property.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-6 border border-gray-100 bg-white rounded-lg flex gap-4"
            >
              <CheckCircle2 className="text-[#E0C18E] shrink-0" />
              <div>
                <h5 className="font-bold text-[#1B263B] mb-2">
                  Secure Transactions
                </h5>
                <p className="text-gray-500 text-sm">
                  All transactions are secure with complete legal verification and
                  compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-6 border border-gray-100 bg-white rounded-lg flex gap-4"
            >
              <CheckCircle2 className="text-[#E0C18E] shrink-0" />
              <div>
                <h5 className="font-bold text-[#1B263B] mb-2">
                  Transparent Pricing
                </h5>
                <p className="text-gray-500 text-sm">
                  No hidden fees, clear and transparent pricing for all properties
                  and services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1B263B] text-center text-white relative overflow-hidden">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-10 text-sm md:text-base">
            Start your real estate journey with ZameenBUY today
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
  href="/public/search" 
  className="inline-block bg-[#E0C18E] text-[#1B263B] px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all shadow-lg text-center"
>
  Explore Properties
</Link>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1B263B] transition-all">
              Post Your Property
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}