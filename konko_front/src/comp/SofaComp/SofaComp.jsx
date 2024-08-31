import React from 'react';
import "./sofaComp.css"

export default function SofaComp({char, isSelected, onSelect}){
  return (
    <>
      <div className={`sofa_comp ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
        <img className='sofa_image' src={char.img} alt="sofa" />
        <div className='sofa_text'>
            <h1 className='sofa_name'>{char.name}</h1>
            <p className='sofa_desc'>{char.desc}</p>
        </div>
      </div>
    </>
  );
};
