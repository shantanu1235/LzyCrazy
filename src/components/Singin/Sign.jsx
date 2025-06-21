import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { MdPerson, MdEmail, MdLock, MdPhone } from 'react-icons/md';
import 'react-phone-input-2/lib/style.css';
import './Sign.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !phone || !password) {
            setError('All fields are required');
            return;
        }
        console.log('User signed up:', { username, email, phone, password });
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setError('');
    };

    const handleAlreadyAccount = (e) => {
        e.preventDefault();
        navigate('/userpanel1');
    };

    return (
        <div className="signup-container">
            {error && <p className="signup-error">{error}</p>}
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="input-icon-group">
                    <MdPerson className="input-icon" />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                    />
                </div>
                <div className="input-icon-group">
                    <MdEmail className="input-icon" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                </div>
                <div className="input-icon-group">
                    <MdPhone className="input-icon" />
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={setPhone}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: false,
                            placeholder: 'Enter phone number'
                        }}
                        inputClass="phone-input"
                        containerClass="phone-container"
                    />
                </div>
                <div className="input-icon-group">
                    <MdLock className="input-icon" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <br />
            <span>We may use your contact information to improve your experience. <a href="">learn more</a></span><br />
            <span>By clicking Sign Up, you agree to our <a href="">Terms of Service</a>, <a href="">Privacy Policy</a>, and <a href=""> Cookies Policy</a></span>
            <br />
            <a href="" className='aa' onClick={handleAlreadyAccount}>alredy have an account</a>
        </div>
    );
};

export default Signup;