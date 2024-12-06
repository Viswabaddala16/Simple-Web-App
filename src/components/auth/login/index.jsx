import React, { useState } from 'react';
import { useAuth } from "../../../context/authContext";
import { Navigate, useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message || "An error occurred during sign-in.");
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message || "An error occurred during Google sign-in.");
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gradient-to-br from-blue-primary to-blue-dark font-custom"
            style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/08/68/51/04/1000_F_868510427_vsvN67LV1zSmLMyXMOFG05tRCmTAj1xL.jpg)' }}
        >
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}
            <div className="bg-white p-8 rounded-lg shadow-glow w-full sm:w-96">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-blue-dark">Welcome Back!</h2>
                    <p className="text-sm text-blue-600">Please login to continue.</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div className='flex flex-col space-y-2 items-start'>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-dark">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
                        />
                    </div>
                    <div className='flex flex-col space-y-2 items-start'>
                        <label htmlFor="password" className="block text-sm font-medium font-medium text-blue-dark">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full py-2 px-4 rounded-lg text-white ${isSigningIn ? 'bg-gray-400' : 'bg-blue-hover hover:shadow-lg transition-shadow'}`}
                        >
                            {isSigningIn ? "Signing In..." : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Don't have an account?</p>
                    <button
                        className="text-sm text-blue-hover hover:underline"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={onGoogleSignIn}
                        disabled={isSigningIn}
                        className="w-full py-2 px-4 rounded-lg text-white bg-red-500 hover:bg-red-600 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                        <img
                            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                            alt="Google icon"
                            className="w-5 h-5"
                        />
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
