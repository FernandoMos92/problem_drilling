import React from 'react'
// Aqui estou importando dois icones que vem da lib React icons
// https://react-icons.github.io/react-icons/
import { AiOutlineBulb, AiFillBulb } from 'react-icons/ai'

function Bulb(props) {
  return (
    <div>
      {props.on ? (
        <div>
          <h4>LIGOU !</h4>
          <AiFillBulb style={{ color: 'ffb800' }} onClick={props.handleState} />
        </div>
      ) : (
        <div>
          <h4>DESLIGADA !</h4>
          <AiOutlineBulb onClick={props.handleState} />
        </div>
      )}
    </div>
  )
}

export default Bulb;
