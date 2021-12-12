import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { Link } from 'react-router-dom';
import '../../src/button.css';

const Slider = () => {
    const data = [
        {
          image: "https://cdn.discordapp.com/attachments/730458730331897949/898205375214526504/Untitledcover1.jpg",
          caption: `<button class="button1">
                    <a href="/menu">SHOP</a></button>`
        },
        {
          image: "https://cdn.discordapp.com/attachments/730458730331897949/896023544679522304/Desktop_-_2.jpg",
          caption: " " 
        },
        {
          image: "https://cdn.discordapp.com/attachments/730458730331897949/898205386237149264/Untitledcover3.jpg",
          caption: `<button class="button1">
                          <a href="/menu">SHOP</a></button>`
        }
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        
      }
      
    return (
        <div className="Slider">
        <div style={{ textAlign: "center" }}>          
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              style={{
                textAlign: "center",
                maxWidth: "90%",
                maxHeight: "500px",
                margin: "70px auto",
                
              }}
            />
          </div>
        </div>
      </div>
    )
}

export default Slider
