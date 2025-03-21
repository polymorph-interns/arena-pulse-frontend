import { createFileRoute, Link } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {Button} from "@/components/ui/button"
import { useFormik } from 'formik'
import * as Yup from "yup"
import {useState } from "react"
import {Loader2} from "lucide-react"

export const Route = createFileRoute('/signup')({
  component: SignUp,
})

function SignUp() {
const [isLoading, setItsLoading] = useState(false);
  const formik =  useFormik({
    initialValues:{
      firstName: "",
      lastName:"",
      email:"",
      password:""
    },
    validationSchema:Yup.object({
      firstName: Yup.string().min(3,"Your first name must contain more 2 letters").required("Your first name is required"),
      lastName: Yup.string().min(3,"Your first name must contain more 2 letters").required("Your first name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password:Yup.string().required("Password is required")
    }),
    onSubmit:values=>{
      setItsLoading(true);
      console.log(values)
    }
  })
  return(
    <main className='flex justify-center items-center h-screen'>
     <div className='bg-white p-10 w-1/2 flex flex-col justify-center items-start'>
             <h1 className="font-clash-bold text-3xl">Join the Squad! 🏀</h1>
               <p className='font-satoshi-regular text-md text-gray-700 w-4/5'>Get live updates, stats, and highlights - never miss a play</p>
               <form className='flex flex-col justify-center item-start w-4/5 mt-5 gap-4' onSubmit={formik.handleSubmit}>
               <div className='w-full flex jusitfy-center items-center gap-6'>
               <div className='space-y-2 w-2/3'>
                     <Label htmlFor='firstName' className='text-md font-satoshi-regular text-gray-900'>First Name</Label>
                     <Input
                     id="firstName"
                     type='text'
                     {...formik.getFieldProps('firstName')}
                     placeholder="Johnson"
                     className="font-satoshi-regular text-lg text-gray-700 py-5"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                       <div className="text-red-500 text-sm font-satoshi-regular">{formik.errors.firstName}</div>
                     ) : null}
                   </div>
               <div className='space-y-2 w-2/3'>
                     <Label htmlFor='lastName' className='text-md font-satoshi-regular text-gray-900'>Last Name</Label>
                     <Input
                     id="lastName"
                     type='text'
                     {...formik.getFieldProps('lastName')}
                     placeholder="White"
                     className="font-satoshi-regular text-lg text-gray-700 py-5"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                       <div className="text-red-500 text-sm font-satoshi-regular">{formik.errors.lastName}</div>
                     ) : null}
                   </div>
               </div>
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
                    ): "Create Account" 
}</Button>
               </form>
     
     <div className='mt-4 w-4/5' >
     <p className='text-md font-satoshi-regular text-gray-700'>Already have  an account ?
       
             {" "}  
             <Link  to="/">
             <span className='text-orange-800 hover:text-orange-500 font-satoshi-medium hover:font-satoshi-bold hover:cursor-pointer'>Log in</span>
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
