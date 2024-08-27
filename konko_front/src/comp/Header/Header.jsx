import React from 'react';
import "./header.css"
import logo from "../../img/logo.png"
import avatar from "../../img/avatar.png"

export default function Header(){
  return (
    <>
      <header className='header'>
        <img
         className='logo' 
         src={logo} alt="edra" 
        />
        <img
         className='avatar' 
         src={avatar} 
         alt="avatar" 
        />
      </header>
    </>
  );
};
