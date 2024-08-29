import React from 'react'
import "./configComp.css"
export default function SofaConfComp({selectedFabric}) {

  const fabricColor = selectedFabric === 'F1' ? 'red' :
                      selectedFabric === 'F2' ? 'green' :
                      selectedFabric === 'F3' ? 'blue' : 'grey';
  
  return (
    <>
        <div className="conf_wrapper">
            <div className="sofa_model" style={{ backgroundColor: fabricColor }}>
            </div>
        </div>
    </>
  )
}
