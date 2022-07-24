import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const slideImage = [
    'https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1649683/pexels-photo-1649683.jpeg?auto=compress&cs=tinysrgb&w=600'
];

export default class SlickSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        }
    }

    setImageIndex(next) {
        this.setState({
            imageIndex: next
        })
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            beforeChange: (current, next) => this.setImageIndex(next)
        };


        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {
                        slideImage.map(
                            (img, idx) => (
                                <div key={idx}>
                                    <img
                                        src={img}
                                        className="carous-img rounded" alt={img} />
                                </div>
                            )
                        )
                    }
                </Slider>
            </div>
        );
    }
}