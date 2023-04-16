import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const Header = () => {

const {user,logout} = useContext(AuthContext)
const  handellogout = () =>{

}

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/SingUP">Sign up</Link>
                 {user && <>welcome {user.email} <button onClick={handellogout}>Sing Out</button></>}
            </div>
        </nav>
    );
};

export default Header;