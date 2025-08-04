import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const url = 'http://localhost:4000/';
  const url = 'https://mern-backend-ten-zeta.vercel.app/';

  // const onSubmit = (data) => {
  //   console.log("Register data:", data);
  //   try {
  //     const responce = axios.post(`${url}auth/register`, data)
  //     if (responce.status === 200) {
  //       console.log("Registration successful");
  //       console.log("Response:", responce);
  //     }
  //   } catch (error) {
  //     console.error("Error during registration:", error.message);
  //     alert("Registration failed. Please try again.");
  //   }
  // };
  const onSubmit = async (data) => {
    console.log("Register data:", data);
    try {
    const response =  await axios.post(`${url}auth/register`, data, {
        withCredentials: true,
      });
      
  
      if (response.status === 200) {
        console.log("Registration successful");
        console.log("Response:", response);
        console.log('registered successfully');
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Registration failed. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex p-3 items-center justify-center bg-gray-100">
      <div className="bg-white p-7 rounded-lg w-full max-w-md shadow-2xl shadow-black/70">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
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
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })}
              className="w-full border p-2 rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
