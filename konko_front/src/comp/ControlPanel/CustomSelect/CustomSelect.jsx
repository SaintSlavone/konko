import React from 'react'
import "./customSelect.css"
export default function CustomSelect({components, title, isOpen, toggleDropdown, onSelect}) {
  return (
    <>
        <div className="custom_select">
            <div className="dropdown_header" onClick={toggleDropdown}>
                <span>{title}</span>
                <span className={`dropdown_arrow ${isOpen ? 'open' : ''}`}>▾</span>
            </div>
            <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                {components.map((component) => (
                <div className="dropdown_item"
                 key={component.id}
                 onClick={() => onSelect && onSelect(component.id)}
                >
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
