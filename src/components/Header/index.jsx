import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await doSignOut();
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-semibold">MyApp</Link>
                <div className="space-x-4">
                    <Link to="/login" className="text-white text-sm hover:text-blue-200">Login</Link>
                    <Link to="/register" className="text-white text-sm hover:text-blue-200">Register New Account</Link>
                    <button onClick={handleLogout} className="text-white text-sm hover:text-blue-200">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
