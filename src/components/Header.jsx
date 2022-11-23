import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {ShoppingContext} from "./context/ShoppingContext";
import "../App.css"
import Logo from "../logo.png"
export default function Header() {
    const {cartItems} = useContext(ShoppingContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark App-header">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/"><img className='App-logo' src={Logo} alt="Logo" width={60}/> Anime Store</Link>
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active nv" aria-current="page" to="/">Page Cart</Link>
                        </li>
                        <li className="nav-item m-8 DD">
                            <Link className="nav-link active nv" to="/cart">
                                <i className="bi bi-cart-check-fill"></i>{cartItems.length}
                            </Link>
                        </li>
                    </ul>
                
            </div>
        </nav>
    )
}
