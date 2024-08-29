import React, {useState} from 'react';
import image1 from "../../img/sofa examples/image 1.png"
import image2 from "../../img/sofa examples/image 2.png"
import image3 from "../../img/sofa examples/image 3.png"
import SofaComp from '../../comp/SofaComp/SofaComp';
import { useNavigate } from 'react-router-dom';
import "./main.css"

export default function Main(){
   const [selectedSofa, setSelectedSofa] = useState(null);

   const navigate = useNavigate();

   const sofaData = [
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image2, name: 'Standway', desc: 'Francesco Binfaré' },
      { img: image3, name: 'Standalto', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
      { img: image1, name: 'Standart', desc: 'Francesco Binfaré' },
    ];

    const navigateTo = () => {
      navigate('/configurator');
    };
  return (
    <>
      <main className='main'>
      <section className='sofa_section'>
          {sofaData.map((char, index) => (
            <SofaComp
              key={index}
              char={char}
              isSelected={selectedSofa === index}
              onSelect={() => setSelectedSofa(index)}
            />
          ))}
        </section>
        <button
        onClick={selectedSofa ? navigateTo : undefined}
         className={`sofa_start_btn ${selectedSofa !== null ? 'active' : ''}`}>
          Start
        </button>
      </main>
    </>
  );
};
