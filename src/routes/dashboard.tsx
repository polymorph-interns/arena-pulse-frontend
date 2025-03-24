import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <>
    <div className='flex justify-center items-center'>
 {/* Sidebar */}
 Test
    <div className="h-screen w-1/5 bg-white">

    </div>
    <div className='h-screen w-4/5 bg-gray-300'>
    <Outlet/>
      </div>
 
    </div>
   

  
    </>
  )
}
