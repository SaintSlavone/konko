import React, {useState} from 'react'
import "./customSelect.css"
export default function CustomSelect({components, title}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
        <div className="custom_select">
            <div className="dropdown_header" onClick={toggleDropdown}>
                <span>{title}</span>
                <span className={`dropdown_arrow ${isOpen ? 'open' : ''}`}>▾</span>
            </div>
            <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                {components.map((component) => (
                <div className="dropdown_item" key={component.id}>
                    <div className="component_icon">
                        <div className="icon_placeholder"></div>
                    </div>
                    <div className="component_details">
                        <div className="component_id">{component.id}</div>
                        <div className="component_dimensions">{component.dimensions}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}
