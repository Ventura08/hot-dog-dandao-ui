import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const WhereAreWe = (): ReactElement => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>WhereAreWePage</h1>
      <button onClick={() => navigate('/who-do')}>Redirect To Who Do</button>
    </div>
  )
}

export default WhereAreWe
