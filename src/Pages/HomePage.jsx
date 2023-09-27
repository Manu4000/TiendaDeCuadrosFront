import Carousel from "react-bootstrap/Carousel";
import cuadro1 from "./img/cuadro1.jpg";
import cuadro3 from "./img/cuadro3.jpg";
import "./Css/carrusel.css"
function HomePage() {
  return (
    <Carousel className="carrusel  my-5">
      <Carousel.Item interval={1000} >
        <img src={cuadro1} />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
          <img src={cuadro3}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;
