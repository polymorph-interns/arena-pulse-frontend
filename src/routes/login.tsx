import { createFileRoute,Link } from '@tanstack/react-router'
import { useFormik } from 'formik'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import * as Yup from "yup"
import { useState } from 'react'
import {Loader2} from "lucide-react"
import axios from "axios"

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password:Yup.string().required("Password is required")
    }),
    onSubmit: values => {
      axios.post("http://localhost:4000/v1/auth/login", values)
        .then((response: any) => {
          setIsLoading(true);
          return response.data;
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });
  return (
    <main className="flex justify-center items-center h-screen">
      <div className='bg-white p-10 w-1/2 flex flex-col justify-center items-start'>
        <h1 className="font-clash-bold text-3xl">Welcome Back, Baller 🏀</h1>
          <p className='font-satoshi-regular text-md text-gray-700 w-4/5'>Log in to catch every dunk, three-pointer, and buzzer-beater!</p>
          <form className='flex flex-col justify-center item-start w-4/5 mt-5 gap-4' onSubmit={formik.handleSubmit}>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-md font-satoshi-regular text-gray-900'>Email</Label>
                <Input
                id="email"
                type='email'
                {...formik.getFieldProps('email')}
                placeholder="engineering@polymorphlabs.io"
                className="font-satoshi-regular text-lg text-gray-700 py-5"
               />
               {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm font-satoshi-regular">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-md font-satoshi-regular text-gray-900'>Password</Label>
                <Input
                id="password"
                type='password'
                {...formik.getFieldProps('password')}
                placeholder="****************"
                className="font-satoshi-regular text-lg text-gray-700 py-5 "
               />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm font-satoshi-regular">{formik.errors.password}</div>
                ) : null}
              </div>
  <Button disabled={isLoading} type='submit' className='bg-orange-800 hover:bg-orange-600 hover:cursor-pointer text-white font-satoshi-regular text-sm py-5 px-24 rounded-md'>{
                    isLoading ? (
                     <Loader2 className='animate-spin'/>
                    ): "Log in" 
}</Button>          </form>

<div className='mt-4 flex flex-col justify-start items-start gap-2 w-4/5' >
<p className='text-md font-satoshi-regular text-gray-500  hover:text-gray-900 hover:cursor-pointer hover:font-satoshi-medium'>Forgot password ?
           </p>
<p className='text-md font-satoshi-regular text-gray-700'>Don't have an account ?
  
        {" "}  
        <Link  to="/signup">
        <span className='text-orange-800 hover:text-orange-500 font-satoshi-medium hover:font-satoshi-bold hover:cursor-pointer'>Create an account</span>
        </Link>       
           </p>

</div>
      </div>
      <div className="w-1/2 h-screen overflow-hidden">
    <video
      autoPlay
      muted
      loop
      className="w-full h-full object-cover"
      style={{ objectFit: 'cover' }}
    >
      <source src="/cinema.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
    </main>
  )
}
