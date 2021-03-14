import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Articulos from './components/Articulos';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section id="content">

          <Articulos />

        </section>
        <Sidebar />
        <div className="clearfix">
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
