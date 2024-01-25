import React from 'react';
import { NavLink} from 'react-router-dom';
import '../index.css';
import { profilePicture, datas, logoutBtn } from '../data/data';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="profile">
         <img src={profilePicture}/>

         <p>
           <span>Jasper Rock</span>
           <span className='small'>@jasrock</span>
         </p>
      </div>

       <ul>
        {datas.map((data) => (
            <NavLink
             to={`/${data.name}`} 
             key={data.name} 
             style={{ textDecoration: 'none'}}
            >

                <li key={data.name}>
                    <div></div>
                    <img src={data.icon}/>
                    <p>{data.name}</p>
                </li>
            </NavLink>
           
        ))}
       </ul>

       <button className="logout-btn">
         <img src={logoutBtn} /> Log out
       </button>
    </div>
  )
}

export default Sidebar


{/*
<li>
    <div></div>
    <img src="img/general.svg">
    <p>General</p>
</li>


<div>
    {links.map((item) => (
     <div key={item.title}>
        <p >
            {item.title}
        </p>

        {item.links.map((link) => (
            <NavLink 
                to={`/${link.name}`} 
                key={link.name} 
             >
                {link.icon}
                <span>
                 {link.name}
                </span>
            </NavLink>
        ))}
     </div>
    ))}

 </div>
*/}