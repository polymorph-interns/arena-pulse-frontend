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
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-orange-300 text-black rounded-md  ml-4  mt-4 h-16 flex items-center px-4">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-4 font-medium w-full">
            <p className='text-lg text-black font-clash-semibold'>
              {greeting}, Jennifer Burger
            </p>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}