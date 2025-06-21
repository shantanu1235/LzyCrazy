import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdLock } from 'react-icons/md'; // <-- import icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Username and password are required');
            return;
        }
        setError('');
        alert('Logged in!');
    };

    const handleGoogleLogin = () => {
        alert('Google login clicked');
    };

    const handleFacebookLogin = () => {
        alert('Facebook login clicked');
    };

    const handleAlreadyAccount = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="login-container">
            {error && <p className="login-error">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-icon-group">
                    <MdPerson className="input-icon" />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="input-icon-group">
                    <MdLock className="input-icon" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="login-links">
                    <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="login-divider">or</div>
            <div className="social-login">
                <button className="google-btn" onClick={handleGoogleLogin}>
                    <FaGoogle className="social-icon" /> Login with Google
                </button>
                <button className="facebook-btn" onClick={handleFacebookLogin}>
                    <FaFacebookF className="social-icon" /> Login with Facebook
                </button>
            </div>
            <span>
                <a href=" " onClick={handleAlreadyAccount}>create a new account</a>
            </span>
        </div>
    );
};

export default Login;