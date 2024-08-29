import React from 'react';
import "./mainPage.css"
import Header from '../../comp/Header/Header';
import Main from '../../comp/Main/Main';

export default function MainPage(){
  return (
    <>
      <div className="container">
         <Header/>
         <Main/>
      </div>
    </>
  );
};
