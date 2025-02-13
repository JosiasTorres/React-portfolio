import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
