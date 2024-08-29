import React, {useState} from 'react'
import "./confPage.css"
import Header from "../../comp/Header/Header"
import SofaConfComp from '../../comp/SofaConfComp/SofaConfComp'
import ControlPanel from '../../comp/ControlPanel/ControlPanel'
import ConfFooter from '../../comp/ConfFooter/ConfFooter'

export default function ConfPage() {
  const [selectedFabric, setSelectedFabric] = useState(null);
  return (
    <>
        <div className="conf_page_wrapper">
            <Header/>
            <SofaConfComp selectedFabric={selectedFabric}/>
            <ControlPanel setSelectedFabric={setSelectedFabric}/>
            <ConfFooter/>
        </div>
    </>
  )
}
