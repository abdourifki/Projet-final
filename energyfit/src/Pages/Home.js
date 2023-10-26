import Hero from '../components/Hero/Hero';
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';
import Footer from '../components/Footer/Footer';
import '../Pages/Home.css';
const Home = () => {
    return ( 
        <div className="App">
          <Hero />
          <Testimonials/>
          <Join/>
          <Footer/>
        </div>
     );
}
 
export default Home;