import React from "react";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { currentUser } = useAuth(); // Assuming this provides the user
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await doSignOut(); // Log the user out
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('data:image/jpeg;base64,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')",
            }}
        >
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
                Welcome to the Home Page
            </h1>

            <button
                className="mt-4 px-6 py-3 bg-sky-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-sky-600"
                onClick={handleLogout}
            >
                Log Out
            </button>

            {currentUser ? (
                <div className="mt-6 p-4 bg-white/90 rounded-lg shadow-md">
                    <p className="text-gray-800 font-medium text-lg">
                        <span className="font-bold">User:</span> {currentUser.displayName || "Guest"}
                    </p>
                    <p className="text-gray-800 font-medium text-lg mt-2">
                        <span className="font-bold">Email:</span> {currentUser.email}
                    </p>
                </div>
            ) : (
                <p className="text-red-500 mt-6">No user is logged in.</p>
            )}
        </div>
    );
};

export default Home;
