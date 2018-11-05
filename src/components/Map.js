import React from 'react';


const Map = (props) => (
    <div>
        <iframe 
            width="1200"
            height="800"
            frameBorder="0" style={{border:0}}
            src={`https://www.google.com/maps/embed/v1/place?key=${props.API_KEY}
            &q=Times+Square,New_York+NY`} allowFullScreen>
        </iframe>
    </div>
);

export default Map;