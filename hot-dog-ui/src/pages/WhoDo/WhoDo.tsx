import React, { ReactElement } from 'react'
import { useLocation } from 'react-router'

const WhoDo = (): ReactElement => {
  const location = useLocation()
  return (
    <div>
      <h1>WhoDoPage</h1>
      <p>{location.state}</p>
    </div>
  )
}

export default WhoDo
