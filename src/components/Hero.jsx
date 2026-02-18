import React from "react";
import Gallery3 from "../assets/Gallery3Updated.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-blue-500 flex items-center text-amber-50" id="scrollKeAtas">
      <div className="mx-auto max-w-[1240px] w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left">
          <motion.div initial={{ opacity:0, y:-80 }} animate={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.2 }}>
            <h1 className="font-bold text-4xl lg:text-5xl">Martabak Pedas</h1>
            
          </motion.div>
          <motion.div initial={{ opacity:0, x:-80 }} animate={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.25 }}>
            <h2 className="font-semibold text-md md:text-lg lg:text-2xl my-4 overflow-x-hidden">
              Kenalin — Martabak Pedas Spesial Perpaduan kulit martabak renyah dengan isian tahu berbumbu rahasia, ditambah topping pilihan yang melimpah. Setiap potongannya punya kombinasi pedas, gurih, dan crispy yang bikin susah berhenti ngunyah.
            </h2>
          </motion.div>
          <div className="mt-8 md:w-fit">
          <motion.div initial={{ opacity:0, y:80 }} animate={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.3 }} whileHover={{ y:-4, transition:{ duration:0.1, delay:0 } }} className="md:w-fit">
            <a href="#order" className="bg-white rounded-full px-6 py-3 mt-4 font-semibold text-lg hover:-translate-y-1 transition text-blue-500 md:w-fit">
              Pesan Sekarang!
            </a>
          </motion.div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <motion.div initial={{ opacity:0, x:80 }} animate={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.6 }} className="overflow-x-hidden">
          <img
            src={Gallery3}
            alt="Martabak Pedas Preview"
            className="max-w-[300px] md:max-w-[450px] rounded-3xl"
          />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;