// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxsShoppingBags from '@iconify-icons/bx/bxs-shopping-bags';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import './Styles/Login.scss';
export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    document.getElementById("nav").style.display = "none"; 
    document.getElementById("footer").style.display = "none";
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className="login">
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
                <div className="email">
                <input type="email" id="email" placeholder="JohnDoe@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="password"><input type="password" id="password" placeholder="************"  onChange={(e) => setPassword(e.target.value)} required/></div>
                <Link to={`/register?redirect=${redirect}`} style={{color:'#930418',marginLeft:'24%'}}>New User? Register</Link>
                <div className="log-btn"><input type="submit" value="Sign In"></input></div>
                
            </form>
           
        </div>
    </div>
</div>
  );
}
