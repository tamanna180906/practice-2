import React from 'react'
import Slider from 'react-slick';
import ban from "../assets/ban.png";

function Banner() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: 'transparent',
                    borderRight: "2px white solid",
                    padding: "10px 0"
                }}
            >
                0{i + 1}
            </div>
        )
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={ban}></img>
                </div>
                <div>
                    <img src={ban}></img>
                </div>
                <div>
                    <img src={ban}></img>
                </div>
                <div>
                    <img src={ban}></img>
                </div>
            </Slider>
        </div>
    );
}

export default Banner