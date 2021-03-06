import React, {useState} from 'react'
import '../styles/body.css'
import { Carousel } from "react-bootstrap";

import { Link } from "gatsby"
import Button from './button';
import CustomizedDialogs from './modal';

import AdSense from 'react-adsense';


function Body() {
    return (
        <div className="wrapper">
            <div className="box box1"><Box1></Box1></div>
            <div className="box box2"><ControlledCarousel/></div>
            <div className="box box3"><Box3></Box3></div>
            <div className="box box4">
                <a href="https://www.youtube.com/" className="box4a"></a>
                <a href="https://www.youtube.com" className="box4b"></a>
            </div>
            <div className="box box5">
              ADDS GO HERE
              <AdSense.Google
                client='ca-pub-7887041725011896'
                slot='7806394673'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
              />
            </div>
            <div className="box box6">
              ADDS GO HERE
              <AdSense.Google
                  client='ca-pub-7887041725011896'
                  slot='7806394673'
                  style={{ display: 'block' }}
                  format='auto'
                  responsive='true'
                  layoutKey='-gw-1+2a-9x+5c'
                />
            </div>
            <div className="box box7">Box7</div>
            <div className="box box8">Box8</div>
            <div className="box box9">Box9</div>
            <div className="box box9">Box10</div>
        </div>
    )
}


const Box1 = () => {
    return(
        <div>
            <h1 className="header">Signup for Weekly News Letters!</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input type="email" className="form-control newsletter-signup-email" placeholder="email address" required=""></input>
                <button className="button-plus">
                    +
                </button>
            </div>
        </div>
    )
}


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="whats-new">NEW BLOGS</div>
          <img
            className="carousel-image"
            src="https://i.stack.imgur.com/iJt2P.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to="/blog">
                <button className="button"> Cheeckout</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="whats-new">NEW BLOGS</div>
          <img
            className="carousel-image"
            src="https://cdnb.artstation.com/p/assets/images/images/023/323/497/large/michael-moes-bar-final-3.jpg?1578849365"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog">
            <button className="button"> Cheeckout</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="whats-new">NEW BLOGS</div>
          <img
            className="carousel-image"
            src="https://m0vie.files.wordpress.com/2017/09/ds9-tackingintothewind34.jpg?w=584"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Link to="/blog">
            <button className="button"> Checkout</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


const Box3 = () => {
  return(
    <div>
      <h1 className="header2">Trending Topics <br></br>🔥🔥🔥</h1>
      <CustomizedDialogs />
    </div>
  )
}
export default Body
