import React from "react";
import { Menubar } from 'primereact/menubar';
import "../../styles/global.css";

const logoComponent = (
  <span className="flex items-center justify-center">
    <img  
      alt="logo"
      src={`${process.env.PUBLIC_URL}/donasel_logo.png`}
      className="w-40 h-auto m-2"
      style={{ margin: '0 auto' }}
    />
  </span>
);

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

const MenuComponent = () => {
  return (
    <div className="flex justify-center mb-5 bg-black">
      <Menubar 
        model={menuItems}
        className="py-4 text-lg font-semibold text-white bg-black"
      />
    </div>
  );
};

export default MenuComponent;
