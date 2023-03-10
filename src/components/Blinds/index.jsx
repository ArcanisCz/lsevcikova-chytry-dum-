import React, { useState } from 'react'
import './style.css'
import closedImg from './images/blinds-closed.svg'
import openImg from './images/blinds-open.svg'

const Blinds = ({state}) => {
  const [blinds, setBlinds] = useState(state)

  return (
    <div className="blinds">
    <div className="blinds__icon">
    <img src={blinds === 'open' ? openImg : closedImg} />
    </div>
    <div className="blinds__name">
      Žaluzie
    </div>
    <div className="blinds__controls">
      <button onClick={() => setBlinds('open')} className={blinds === 'open' ? "button button--active" : "button"}>Otevřeno</button>
      <button onClick={() => setBlinds('closed')} className={blinds === 'closed' ? "button button--active" : "button"}>Zavřeno</button>
    </div>
  </div>
  )
}

export default Blinds