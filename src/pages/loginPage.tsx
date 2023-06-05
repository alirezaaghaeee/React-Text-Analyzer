import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { login } from '../store/login/loginSlice';

const LoginPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ name, email }));
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-blue-500">
            <div className="bg-white rounded shadow-lg p-8 w-96">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
                {isLoggedIn ? (
                    <p className="text-lg text-gray-800">You are already logged in.</p>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="bg-blue-700 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-800">
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
