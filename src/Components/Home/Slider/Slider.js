import React from 'react';
import Sliderr from "react-slick";
import Img1 from '../../../Resorce/Products/Screenshot 2020-11-21 230740.png'
import SliderDetails from './SliderDetails';

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const fakeData = [
          {
              id:1,
              title:'Estuche para monedes',
              previous:10.00,
              presentPrice:20,
              img:Img1
          },
          {
            id:2,
            title:'Estuche para monedes',
            previous:10.00,
            presentPrice:20,
            img:Img1
        },
        {
            id:3,
            title:'Estuche para monedes',
            previous:10.00,
            presentPrice:20,
            img:Img1
        },
        {
            id:3,
            title:'Estuche para monedes',
            previous:10.00,
            presentPrice:20,
            img:Img1
        },
        {
            id:3,
            title:'Estuche para monedes',
            previous:10.00,
            presentPrice:20,
            img:Img1
        },
        {
            id:3,
            title:'Estuche para monedes',
            previous:10.00,
            presentPrice:20,
            img:Img1
        }
      ]
    return (
        <div>
        <Sliderr {...settings}>
        
        {
            fakeData.map(data => <SliderDetails data={data} />)
        }
        
      </Sliderr>
      
        </div>
    );
};

export default Slider;