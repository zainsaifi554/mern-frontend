import { useForm } from 'react-hook-form';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register.jsx';


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log("Login data:", data);
    console.log('login successful');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex p-3 items-center justify-center bg-gray-100 ">
      <div className="bg-white p-7 rounded-lg w-full max-w-md shadow-2xl shadow-black/70">
        <h2 className="text-2xl font-bold text-center mb-3 ">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}