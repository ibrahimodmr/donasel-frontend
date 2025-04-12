import '../src/styles/App.css';
import FooterComponent from './components/user/FooterComponent';
import MenuComponent from './components/user/MenuComponent';
import Contact from './views/user/Contact';
import MainPage from './views/user/MainPage';
import Institution from './views/user/Institution';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bedroom from './views/user/Bedroom';
import ImageGalleryComponent from './components/user/ImageGalleryComponent';
import Diningroom from './views/user/Diningroom';
import Sofa from './views/user/Sofa';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen App">
        <MenuComponent />
        <div className="flex-grow">
          <Routes>
            <Route path='/iletisim' Component={Contact}/>
            <Route path='/kurumsal' Component={Institution} />
            <Route path='/anasayfa' Component={MainPage} />
            <Route path='/urun-kategori/yatak-odasi' Component={Bedroom} />  
            <Route path='/urun-kategori/yemek-odasi' Component={Diningroom} />
            <Route path='/urun-kategori/koltuk-takimi' Component={Sofa} />
            <Route path='/urun/:encodedImage' Component={ImageGalleryComponent} />      
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
