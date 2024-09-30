import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Modal from "./Modal";
import About from "./About";
import Signup from "./Signup";
import Menu from "./Menu";
import Info from "./Info";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Home />
      <Modal/>
      <About/>
      {/* <Signup/> */}
      <Menu/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
