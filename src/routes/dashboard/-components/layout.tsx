import { AppSidebar } from './sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const currentTime = new Date().getHours();
  let greeting = '';
  if (currentTime >= 0 && currentTime < 12) {
    greeting = 'Good Morning';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <div className="flex justify-center items-center h-auto w-full overflow-auto">
      <AppSidebar />
      <div className="flex flex-col  justify-center items-start flex-1  min-w-0"> 
        <header className="border-b  border-b-gray-300 text-black  mt-4 h-16 w-full flex items-center px-4">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-4 font-medium w-full">
            <p className='text-lg text-black font-clash-semibold'>
              {greeting}, Jennifer Burger
            </p>
          </div>
        </header>
        <main className="w-full overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}