import React from "react";
import { Menubar } from 'primereact/menubar';
import { useState, useEffect } from "react";
import "../../styles/global.css";

const logoComponent = (
//   <span className="flex items-center justify-center bg-black">
    <a href="/anasayfa" className="flex items-center justify-center bg-black">
    <img  
      alt="logo"
      src={`${process.env.PUBLIC_URL}/donasel_logo.png`}
      className="w-40 h-auto pr-2"
      style={{ margin: '3 auto', width:220, height:75 }}
      onClick={() => { window.location = '/anasayfa'; }}
    />
    </a>
//   </span>
);

const menuItemsPhone = [
  {
    label: 'ANASAYFA',
    icon: 'pi pi-home',
    command: () => { window.location = '/anasayfa'; }
  },
  {
    label: 'KURUMSAL',
    icon: 'pi pi-th-large',
    command: () => { window.location = '/kurumsal'; }
  },
  {
    label: 'KOLEKSİYONLAR',
    icon: 'pi pi-briefcase',
    items: [
      {
        label: 'YATAK ODASI',
        command: () => { window.location = '/urun-kategori/yatak-odasi'; }
      },
      {
        label: 'YEMEK ODASI',
        command: () => { window.location = '/urun-kategori/yemek-odasi'; }
      },
      {
        label: 'KOLTUK TAKIMI',
        command: () => { window.location = '/urun-kategori/koltuk-takimi'; }
      }
    ]
  },
  {
    label: 'İLETİŞİM',
    icon: 'pi pi-fw pi-envelope',
    command: () => { window.location = '/iletisim'; }
  }
];

const menuItems = [
  {
    label: 'ANASAYFA',
    icon: 'pi pi-home',
    command: () => { window.location = '/anasayfa'; }
  },
  {
    label: 'KURUMSAL',
    icon: 'pi pi-th-large',
    command: () => { window.location = '/kurumsal'; }
  },
  {
    template: logoComponent,
  },
  {
    label: 'KOLEKSİYONLAR',
    icon: 'pi pi-briefcase',
    items: [
      {
        label: 'YATAK ODASI',
        command: () => { window.location = '/urun-kategori/yatak-odasi'; }
      },
      {
        label: 'YEMEK ODASI',
        command: () => { window.location = '/urun-kategori/yemek-odasi'; }
      },
      {
        label: 'KOLTUK TAKIMI',
        command: () => { window.location = '/urun-kategori/koltuk-takimi'; }
      }
    ]
  },
  {
    label: 'İLETİŞİM',
    icon: 'pi pi-fw pi-envelope',
    command: () => { window.location = '/iletisim'; }
  }
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const MenuComponent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex justify-center mb-5 bg-black">
      {isMobile ? (
        <Menubar
          start={logoComponent}
          model={menuItemsPhone}
          className="py-4 text-white bg-black"
        />
      ) : (
        <Menubar
          model={menuItems}
          className="py-4 text-lg font-semibold text-white bg-black"
          breakpoint="768px"
        />
      )}
    </div>
  );
};

export default MenuComponent;
