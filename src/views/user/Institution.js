import React from "react";

const Institution = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 py-12 bg-gradient-to-b from-gray-250 to-gray-350">
      {/* Outer container with a subtle gradient background */}
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        
        {/* Heading */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-wide text-center text-gray-800">
          Firmamız Hakkında
        </h1>
        
        {/* Intro Paragraph */}
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Bursa İnegöl’de faaliyet göstermekte olan firmamız, alanında 35 yılı aşkın 
          tecrübesi ile yemek odası takımları, yatak odası takımları, duvar üniteleri 
          ve koltuk üretimi yapmaktadır. Ürünlerimizde yüksek kaliteli malzemeler 
          kullanılmaktadır. Müşteri memnuniyetini ilke edinen firmamız, müşterilerine 
          her zaman fonksiyonel, kullanışlı ve yüksek kaliteli ürünler sunmayı 
          amaçlamaktadır.
        </p>
        {/* Mission & Vision as a two-column layout on larger screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Mission */}
          <div className="p-6 transition-shadow duration-200 ease-in-out rounded-lg shadow-sm bg-gray-50 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">Misyonumuz</h2>
            <p className="leading-relaxed text-gray-700">
              Müşterilerimize modern, dayanıklı ve şık mobilyalar sunarak, ev ve 
              iş yerlerini daha konforlu ve estetik bir yaşam alanına dönüştürmek.
            </p>
          </div>
          
          {/* Vision */}
          <div className="p-6 transition-shadow duration-200 ease-in-out rounded-lg shadow-sm bg-gray-50 hover:shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">Vizyonumuz</h2>
            <p className="leading-relaxed text-gray-700">
              Sürekli gelişen ve yenilikleri takip eden kurumsal yapımızla 
              Türkiye’nin önde gelen mobilya üreticileri arasında yer almak; 
              kalite, tasarım ve müşteri memnuniyeti odaklı yaklaşımımızla 
              global pazarlarda da marka bilinirliğimizi artırmak.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Institution;
