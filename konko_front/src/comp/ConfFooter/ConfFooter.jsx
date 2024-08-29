import React from 'react'
import "./confFooter.css"
import { useNavigate } from 'react-router-dom'

export default function ConfFooter() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };
  return (
    <>
        <footer className='conf_footer'>
            <button onClick={navigateTo} className='btn'>Start New Configuration</button>
            <button className='btn'>Tutorial</button>
            <section className='footer_text_sec'>
                <h1 className='sofa_title'>STANDART</h1>
                <p className='sofa_brand'>BY FRANCESCO BINFARE</p>
            </section>
            <button className='btn'>Export</button>
            <button className='btn'>Share</button>
            <button className='btn'>Save</button>
        </footer>
    </>
  )
}
