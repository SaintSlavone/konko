import React from 'react'
import "./controlPanel.css"
import CustomSelect from './CustomSelect/CustomSelect'

export default function ControlPanel() {
    const components = [
        { id: 'STDA1', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' },
        { id: 'STDA2', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' },
        { id: 'STDEC', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' }
    ];
    const fabrics = [
        { id: 'F1', dimensions: 'Code_P_9 165-09' },
        { id: 'F2', dimensions: 'Code_P_9 165-09' },
        { id: 'F3', dimensions: 'Code_P_9 165-09' },
    ];
  return (
    <>
        <div className='control_panel'>
            <div className='sofa_option'>
                <h3 className='sofa_option_text'>Sofa Option</h3>
                <p className='sofa_option_text2'>Standart</p>
            </div>
            <CustomSelect components={components} title="Add Components"/>
            <CustomSelect components={fabrics} title="Choose Fabrics"/>
            <div className='sofa_fabrics'>
            </div>
        </div>
    </>
  )
}
