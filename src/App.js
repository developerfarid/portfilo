import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/Home/HomePage";
import Portfilo from "./Pages/Portfilo/Portfilo";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route  element={<Home />}>
            <Route index  element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/works" element={<Portfilo />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </ContextProvider>


  );
}

export default App;
