import {useState} from "react";
import {login} from "../service/LoginService";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in both fields');
            return;
        }

        setError('');

        login({username, password}).then((res) => {
            if (res.status === 200){
                navigate("/");
            }
        }).catch(err => {
            if (err.status === 401){
                setError("Username or password is incorrect");
            }
        });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;