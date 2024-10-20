import {useState} from "react";
import {UserDTO} from "../api-client";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../service/RegisterService";

const Register = () => {
    const [formData, setFormData] = useState<UserDTO>({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
    });

    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic form validation
        if (
            !formData.username ||
            !formData.password ||
            !formData.firstName ||
            !formData.lastName ||
            !confirmPassword
        ) {
            setError('All fields are required except the address');
            return;
        }

        if (formData.password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        register(formData).then((res) => {
            if (res.status === 201) {
                navigate("/");
            }
        }).catch(() => {
            setError("An error occurred while registering");
        })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address (Optional)
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default Register;