import React from 'react'
import Wall from './Wall'

export default function Switch(props) {
  return (
    <div>
      <Wall on={props.on} handleState={props.handleState} />
    </div>
  )
}
