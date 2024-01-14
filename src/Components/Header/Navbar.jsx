import starbucks from "../../assets/starbucks.png"
import './Navbar.css'
import { MdLocationOn } from 'react-icons/md';
export default function Navbar(){
    return(
        <>
        <div className = "buttons">
        <div className="navbar_button1">
        <img src={starbucks} alt="Avatar" className="avatar"></img>
        <div className="innerButton">Menu</div>
        <div className="innerButton">Rewards</div>
        <div className="innerButton">Gift Cards</div>
        </div>
        <div className="navbar_button2">
        <div className="find"><MdLocationOn style={{ verticalAlign: 'middle', marginRight: '4px' , marginBottom : '2px'}}></MdLocationOn>Find a store</div>
        <button className="sign">Sign in</button>
        <button className="join">Join now</button>
        </div>
        </div>
        <div className="strip">
            <p>STARBUCKS<sup>®</sup> REWARDS</p>
        </div>
    
        
        </>
    )
}