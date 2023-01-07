import React from 'react'

export default function Navebar(props) {
  return (
        <>
        <div className='container'>
           <h2>This our NaveBar {props.title}</h2> 
           <h3> {props.discription}</h3>
        </div>
        </>
    
    );
}
