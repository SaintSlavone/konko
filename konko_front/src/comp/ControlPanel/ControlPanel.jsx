import React, {useState} from 'react'
import "./controlPanel.css"
import CustomSelect from './CustomSelect/CustomSelect'

export default function ControlPanel({setSelectedFabric}) {

    const [openDropdown, setOpenDropdown] = useState(null);

    const components = [
        { id: 'STDA1', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' },
        { id: 'STDA2', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' },
        { id: 'STDEC', dimensions: '200 x 100 x 67 cm\n7\' 10" x 2\' 1" x 1\' 1"' }
    ];
    const fabrics = [
        { id: 'F1', dimensions: 'Code_P_9 165-09', color: 'red' },
        { id: 'F2', dimensions: 'Code_P_9 165-09', color: 'green' },
        { id: 'F3', dimensions: 'Code_P_9 165-09', color: 'blue' },
    ];

    const handleToggleDropdown = (dropdownName) => {
        setOpenDropdown(prevDropdown => prevDropdown === dropdownName ? null : dropdownName);
    };

    const handleSelectFabric = (fabricId) => {
        setSelectedFabric(fabricId);
    };

  return (
    <>
        <div className='control_panel'>
            <div className='sofa_option'>
                <h3 className='sofa_option_text'>Sofa Option</h3>
                <p className='sofa_option_text2'>Standart</p>
            </div>
            <CustomSelect
             components={components} 
             title="Add Components"
             isOpen={openDropdown === 'components'} 
             toggleDropdown={() => handleToggleDropdown('components')}
            />
            <CustomSelect
             components={fabrics} 
             title="Choose Fabrics"
             isOpen={openDropdown === 'fabrics'} 
             toggleDropdown={() => handleToggleDropdown('fabrics')}
             onSelect={handleSelectFabric}
            />
            <div className='sofa_fabrics'>
            </div>
        </div>
    </>
  )
}
