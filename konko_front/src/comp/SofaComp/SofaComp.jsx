import React from 'react';
import "./sofaComp.css"

export default function SofaComp({char}){
  return (
    <>
      <div className="sofa_comp">
        <img src={char.img} alt="sofa" />
        <div className='sofa_text'>
            <h1 className='sofa_name'>{char.name}</h1>
            <p className='sofa_desc'>{char.desc}</p>
        </div>
      </div>
    </>
  );
};
