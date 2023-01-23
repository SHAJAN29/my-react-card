import { useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button';
import './App.css'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

function App() {
 

  return (
    <div className="App">
     
<Card price="0" plan="free" user="Single User" storage="5GB Storage" project="Unlimited Public Projects" access="Community Access" privateProjects="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Reports"/>
<Card price="9" plan="plus" user="5 Users" storage="50GB Storage" project="Unlimited Public Projects" access="Community Access" privateProjects="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Reports"/>
<Card price="49" plan="pro" user="Unlimited Users" storage="150GB Storage" project="Unlimited Public Projects" access="Community Access" privateProjects="Unlimited Private Projects" support="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Reports"/>
    </div>
  )
}

export default App;



function Card(props){

const {price,plan,user,storage,project,access,privateProjects,support,subdomain,reports} =props

return(


  <div className="cardBody">
     
     <div className="cardBody2">
     <h5 className="card-title">{plan}</h5>
            <h6 className="card-price">${price}<span className="period">/month</span></h6>
    <hr />
    <ul class="lists">
              <li><span><CheckIcon /></span> {user}</li>
              <li><span><CheckIcon/></span>{storage}</li>
              <li><span><CheckIcon/></span>{project}</li>
              <li><span><CheckIcon/></span>{access}</li>
              <li className={plan=="plus" ?"text-display":plan=="pro" ?"text-display":"text-muted"}><span>{plan=="plus" ?<CheckIcon/>:plan=="pro" ?<CheckIcon/>:<CloseIcon/>}</span>{privateProjects}
                </li>
              <li className={plan=="plus" ?"text-display":plan=="pro" ?"text-display":"text-muted"}><span>{plan=="plus" ?<CheckIcon/>:plan=="pro" ?<CheckIcon/>:<CloseIcon/>}</span>{support}
                </li>
              <li className={plan=="plus" ?"text-display":plan=="pro" ?"text-display":"text-muted"}><span>{plan=="plus" ?<CheckIcon/>:plan=="pro" ?<CheckIcon/>:<CloseIcon/>}</span>{subdomain}
              </li>
              <li className={plan=="pro" ?"text-display":"text-muted"}><span>{plan=="pro" ?<CheckIcon/>:<CloseIcon/>}</span>{reports}
                </li>
            </ul>
            
         
              <button className='btn'>Button</button>
              
            </div>
    </div>


)


} 

