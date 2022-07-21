
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Discover from './Components/Discover/Discover';
import Testimonial from './Components/Testimonial/Testimonial';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CartDrawer from './Components/CartDrawer';
import 'react-modern-drawer/dist/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Banner />
        <Service />
        <About />
        <Shop />
        <Discover />
        <Testimonial />
        <Newsletter />
        <Footer />
        <CartDrawer />
      </div>
    </Provider>
  );
}

export default App;
