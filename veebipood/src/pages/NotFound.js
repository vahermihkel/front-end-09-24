import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Leht, mida otsid, on kahjuks ära kolinud ja me ei tea, kuhu. :(</p>
      <Link to="/">
        Tagasi pealehele
      </Link>
    </div>
  )
}

export default NotFound