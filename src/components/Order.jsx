import React from "react";
import dummyImg from "../assets/dummyImg.png";

const Order = () => {

    const phoneNumber = "6282298854788";
    const message = "Halo Teh, Aku dari kelas {kelas} mau order martabak pedas nya dong";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="order" className="bg-blue-50 min-h-screen flex items-center justify-center px-6 py-16">
      
      {/* Card Container */}
      <div className="max-w-6xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE (Image) */}
          <div className="flex justify-center">
            <img
              src={dummyImg}
              alt="Product"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT SIDE (Content Area) */}
          <div className="space-y-6">
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-tight">
              Martabak Telur Premium
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              Kulit renyah, isian melimpah, dan selalu dibuat fresh setiap pesanan.
            </p>

            {/* Price */}
            <div className="text-4xl font-bold text-blue-600">
              Rp5.000
            </div>

            {/* Button */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg">
                Pesan Sekarang
                </button>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Order;
