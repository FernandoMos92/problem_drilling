import React from 'react'
import Bulb from './Bulb'

export default function Wall(props) {
  return (
    <div>
      <Bulb on={props.on} handleState={props.handleState} />
    </div>
  )
}
