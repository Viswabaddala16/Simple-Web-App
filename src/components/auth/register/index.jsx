import { useState } from "react";
import { doCreateUserWithEmailAndPassword,doSignOut } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const[username,setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) return; // Prevent duplicate submissions

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsRegistering(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password,username);
      
      await doSignOut();
      setIsRegistering(false);
      navigate('/'); // Redirect to login page after registration
    } catch (error) {
      setErrorMessage(error.message);
      setIsRegistering(false);
    }
  };
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 bg-gradient-to-br from-blue-hover to-blue-dark font-custom" 
    style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/digital-approval-concept-businessman-hand-holding-check-mark-icon-check-mark-symbol-digital-background-technology-abstract-211373573.jpg)' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-glow max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-primary mb-4">Register</h2>
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-start space-y-2">
          <label className="block text-blue-primary ">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email" className="text-sm font-medium text-blue-primary">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              required
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-blue-primary">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              required
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-primary">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter your confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-primary"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full py-2 px-4 rounded-lg text-white ${isRegistering ? 'bg-gray-400' : 'bg-blue-hover hover:shadow-glow'}`}
            >
              {isRegistering ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
