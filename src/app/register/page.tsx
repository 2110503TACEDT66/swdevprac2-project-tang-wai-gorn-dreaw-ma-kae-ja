'use client'
import { useState } from 'react';
import userRegister from '@/libs/userRegister';
import userLogin from '@/libs/userLogin';
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await userRegister(formData.name, formData.tel, formData.email, formData.password);
        await userLogin(formData.email, formData.password);
        window.location.href = '/';
    };

    return (
        <main className="bg-slate-100 m-5 p-5">
            <form onSubmit={addUser}>
                <div className="text-xl text-blue-700">Register</div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                    <input type="text" required id="name" name="name" placeholder="name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400" onChange={handleChange} />
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel</label>
                    <input type="text" required id="tel" name="tel" placeholder="tel"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400" onChange={handleChange} />
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email</label>
                    <input type="text" required id="email" name="email" placeholder="email"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400" onChange={handleChange} />
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password</label>
                    <input type="password" required id="password" name="password" placeholder="password"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400" onChange={handleChange} />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Register</button>
            </form>
        </main>
    );
}
