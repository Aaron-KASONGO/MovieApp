import React from 'react';
import SlickSlider from './SlickSlider';

class Slider extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid px-5">
                    <div className="my-5">
                        <h1 className="text-center">Your weekend buddy for this week</h1>
                    </div>
                    <SlickSlider />
                </div>
            </>
        );
    }
}
export default Slider;