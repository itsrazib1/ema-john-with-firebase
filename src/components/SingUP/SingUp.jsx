import React, { useContext, useState } from 'react';
import './SingUP.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';


const SingUp = () => {

    const [error,setError] = useState('');
    const {createuser} = useContext(AuthContext);

const handelsingup = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,'||',password,'||',confirm);

if(password !== confirm){
setError('Your PassWord is not Same')
return
}
else if(password.length<6){
    setError('Your PassWord is very small')
return
}
createuser(email,password)
.then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
})
.catch(error => {
    console.log(error);
    setError(error.message)
})
} 

    return (
        <div>
             <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelsingup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
        </div>
    );
};

export default SingUp;