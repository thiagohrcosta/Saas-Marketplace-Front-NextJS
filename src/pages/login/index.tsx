import React from 'react';
import { SigninComponentStyles } from './styles';

import { useForm, SubmitHandler } from "react-hook-form"
import { api } from '@/lib/axios';

import { IoBagHandle } from "react-icons/io5";
import { GlobalColors } from '@/styles/colors';

type InputProps = {
  email: string,
  full_name: string,
  role: string
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>()
const onSubmit: SubmitHandler<InputProps> = async (data) => {
    const response = await api.post(`http://localhost:3000/api/v1/login?token=${data.token || ""}&email=${data.email || ""}`, data)
     console.log(response)
  }

  return (
    <SigninComponentStyles>
      <div className="left-login-container">
        <div className='left-login-content'>
          <IoBagHandle 
            size={56}
            color={GlobalColors.purple500}
            className="bag-icon"
          />
          <p>Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder="Type your email" />
            <input className="btn-submit"type="submit" aria-label='login' />
          </form>
        </div>
      </div>
      <div className="right-login-container">
        <div className="right-login-content">
          <p className="right-login-title">Join Shop Online</p>
          <p className="right-login-subtitle">The best marketplace for buyers and sellers.</p>
          <button>Get more information</button>
        </div>
      </div>
    </SigninComponentStyles>
  )
}