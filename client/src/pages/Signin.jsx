import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from "../redux/slices/userSlice";
import OAuth from "../components/OAuth";


export default function Signin() {
  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector((state) => state.user)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success == false) {
        dispatch(signInFailure(data.message))
        return;
      }
      
      dispatch(signInSuccess(data))
      navigate('/')

    } catch (error) {
      dispatch(signInFailure(data.message))
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      
        <input
          type="email"
          className="border p-3 rounded-lg "
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg "
          id="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-110"
        >
          {loading ? "Loading..." : "Signin"}
        </button>
        <OAuth/>
      </form>

      <div className="flex gap-2 mt-5">
        <p>dont Have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700 ">Signup</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );           
}
