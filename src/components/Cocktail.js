import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({Image, name, id, info, glass}) => {

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={Image} alt={name} />
      </div>
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
    </article>
  )
}

export default Cocktail
