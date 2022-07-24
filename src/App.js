import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import SearchNav from './components/searchNav/SearchNav';
import CardSection from './components/cardSection/CardSection';
import BottomInfo from './components/bottomInfo/BottomInfo'

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <SearchNav />
      <CardSection />
      <BottomInfo />
    </>
  );
}

export default App;
