import { createFileRoute, Outlet } from '@tanstack/react-router'
import { 
  SidebarProvider, 
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  // SidebarHeader,
  // SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter

 } from '@/components/ui/sidebar'
 import { Calendar ,Club ,Boxes} from 'lucide-react'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})


const AppSidebar= ()=>
{
  const items = [
    {
      title: "Teams",
      url: "#",
      icon: Club,
    },
    {
      title: "Leagues",
      url: "#",
      icon: Boxes,
    },
    {
      title: "Fixtures",
      url: "#",
      icon: Calendar,
    }
  ]
  return(
    <Sidebar collapsible='offcanvas' className="dark text-white">
      <SidebarHeader className='font-clash-bold text-orange-300 text-2xl'>ArenaPulse</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='space-y-4'>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild  className='font-clash-regular text-[1rem] text-white hover:bg-orange-500 rounded-none'>
                    <a href={item.url}>
                      <item.icon size={50} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='flex flex-row justify-center items-center border border-t-gray-100/30 py-5'>
      <img src="/profile.jpg" className='w-10 h-10 rounded-full' alt=""/>
              <div className='flex flex-col'>
              <span className='font-satoshi-regular text-white text-sm'>Jennifer Burger</span>
              <span className='font-satoshi-regular text-white text-sm'>engineering@polymorphlabs.io</span>
              </div>
      </SidebarFooter>
    </Sidebar>
  )
}
function Dashboard() {
  return (
    <>
    <SidebarProvider>
    <AppSidebar/>
      <main>
      <SidebarTrigger/>
      {/* <Outlet /> */}
<Outlet/>
        </main>
      </SidebarProvider>
   

  
    </>
  )
}
