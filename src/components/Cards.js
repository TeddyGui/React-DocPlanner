import React from 'react'
import ButtonCo from './ButtonCo'

const Cards = props => {
    return (
  
      <div className="Cards">
      
        {
          props.objet.map(el=>(
            <div className={el.sty}>
            <h5 > {el.title} </h5>
            <h1 className="paragh"> {el.subtitle} </h1>
            <div className="">
              {el.isshown? <ButtonCo />:null}
              <img className="pc" src={el.image} />
            </div>
            </div>
          ))
        }
      
      </div>
      
     
    );
  };
  export default Cards;
