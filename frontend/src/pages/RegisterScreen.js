import { Icon, InlineIcon } from '@iconify/react';
import bxsShoppingBags from '@iconify-icons/bx/bxs-shopping-bags';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import './Styles/Register.scss';
export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    document.getElementById("nav").style.display = "none"; 
    document.getElementById("footer").style.display = "none"; 
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className="register">
            <div className="box">
                <div className="left">
                <Link to="/">
                <Icon icon={bxsShoppingBags} color="#930418" width="250" height="250" />
                </Link>
                </div>
                <div className="right">
                    <form onSubmit={submitHandler}>
                        {loading && <LoadingBox></LoadingBox>}
         {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div className="name">
                        <input type="text" id="username" placeholder="John Doe" onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="email">
                        <input type="email" id="email" placeholder="JohnDoe@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="password"><input type="password" id="password" placeholder="************"  onChange={(e) => setPassword(e.target.value)} required/></div>
                        <div className="password"><input type="password" id="confirmPassword" placeholder="************"   onChange={(e) => setConfirmPassword(e.target.value)} required/></div>
                        <Link to={`/signin?redirect=${redirect}`} style={{color:'#930418',marginLeft:'24%'}}>Already a User? Login</Link>
                        <div className="log-btn"><input type="submit" value="Register"></input></div>
                        
                    </form>
                   
                </div>
            </div>
        </div>
  );
}
