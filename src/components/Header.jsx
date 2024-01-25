import React from 'react';
import '../index.css'

const Header = ({name, title, subTitle }) => {
  return (
    <div className='header'>
        <h1>{name}</h1>

        <div className="header-summary">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
    </div>
  )
}

export default Header
