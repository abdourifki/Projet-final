import Hero from '../components/Hero/Hero';
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';
import Footer from '../components/Footer/Footer';
import Program from '../Pages/Program';
import '../Pages/Home.css'
const Home = () => {
    return ( 
        <div className="App">
          <Hero />
          <Program/>
          <Testimonials/>
          <Join/>
          <Footer/>
        </div>
     );
}
 
export default Home;