import React from "react";
import Logo from "../assets/Logo.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {

    const phoneNumber = "6282298854788";
    const phoneNumber2 = "6285719074851";
    const message = "Halo Teh, Aku dari kelas {kelas} mau order martabak pedas nya dong";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const whatsappURL2 = `https://wa.me/${phoneNumber2}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-neutral-900 text-white py-16">
      <div className="grid md:grid-cols-3 mx-auto px-6 gap-4">
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="max-w-[80px] max-h-[80px]" />
            <h1 className="font-bold text-2xl md:text-3xl">MT Polongo Dia</h1>
          </div>
          <p className="mt-4 text-neutral-400 text-md">
            Sekali Coba, Langsung Ketagihan Bukan sekadar martabak biasa — ini camilan pedas yang punya karakter rasa kuat dan sensasi tekstur yang beda dari yang lain.
          </p>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl">Navigasi</h1>
            <ul className="text-neutral-400 mt-4">
                <li className="py-1"><a href="#features">Kelebihan</a></li>
                <li className="py-1"><a href="#gallery">Gallery</a></li>
                <li className="py-1"><a href="#order">Order</a></li>
            </ul>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-white text-xl">Kontak Kami</h1>
            <ul className="text-neutral-400 mt-4 flex flex-col">
                <li className="py-1">
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center"><FaWhatsapp className="mx-2"/> Whatsapp (Iqrima)</a></li>
                <li className="py-1">
                    <a href={whatsappURL2} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center" ><FaWhatsapp className="mx-2"/>Whatsapp (Herliana)</a></li>
                <li className="py-1">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center" ><FaInstagram className="mx-2"/>Instagram</a></li>
            </ul>
        </div>

      </div>
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">
  © 2026 MT Polongo Dia. All rights reserved.
</div>

    </div>
  );
};

export default Footer;