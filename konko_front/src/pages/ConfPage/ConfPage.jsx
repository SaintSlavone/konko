import React from 'react'
import "./confPage.css"
import Header from "../../comp/Header/Header"
import SofaConfComp from '../../comp/SofaConfComp/SofaConfComp'
import ControlPanel from '../../comp/ControlPanel/ControlPanel'
import ConfFooter from '../../comp/ConfFooter/ConfFooter'

export default function ConfPage() {
  return (
    <>
        <div className="conf_page_wrapper">
            <Header/>
            <SofaConfComp/>
            <ControlPanel/>
            <ConfFooter/>
        </div>
    </>
  )
}
