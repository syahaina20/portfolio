import React from 'react';
import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        
        <div 
            className="d-inline-block g-card" 
            onClick={(e) => props.click(props.kad)}
        >
            <img 
                className="g-card-image" 
                src={props.kad.imgSrc} 
                alt={props.kad.imgSrc} 
            />
            { 
                props.kad.selected && 
                    <CardInfo 
                        title={props.kad.title} 
                        subTitle={props.kad.subTitle} 
                        link={props.kad.link} 
                    /> 
            }
        </div>
    );

}

export default Card;