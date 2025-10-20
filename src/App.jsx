import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Message from './sections/Message';
import Flavor from './sections/Flavor';
import { useGSAP } from '@gsap/react';
import Nutrition from './sections/Nutrition';
import Benefit from './sections/Benefit';
import Testimonial from './sections/Testimonial';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
    })
  })

  return (
    <main>
      {/* Sections */}
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />

          <div>
            <Benefit />
            <Testimonial />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  )
}

export default App