
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
        <header className="bg-background border-b h-16 flex items-center px-4">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-4 font-medium">
            <p className='text-lg text-gray-500 font-clash-bold'>
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