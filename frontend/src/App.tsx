import Lenis from "lenis"
import { Appbar } from "./components/Appbar"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Project } from "./pages/Project"
import { Tech } from "./pages/Tech"


function App() {
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  return <div className="overflow-hidden">
    <Appbar/>
    <Home/>
    <About/>
    <Tech/>
    <Project/>
    <Contact/>
  </div>
}

export default App
