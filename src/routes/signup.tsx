import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: SignUp,
})

function SignUp() {
  return(
    <main className='flex justify-center items-center h-screen'>
        
    </main>
  )
}
