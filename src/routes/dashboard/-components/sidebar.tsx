import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Calendar ,Club ,Boxes, Home} from 'lucide-react'
import { Link } from '@tanstack/react-router';

export const AppSidebar= ()=>
  {
    const items = [
      {
        title: "Overview",
        url: "/dashboard/overview",
        icon: Home,
      },
      {
        title: "Teams",
        url: "/dashboard/teams",
        icon: Club,
      },
      {
        title: "Leagues",
        url: "/dashboard/leagues",
        icon: Boxes,
      },
      {
        title: "Fixtures",
        url: "/dashboard/fixtures",
        icon: Calendar,
      }
    ]
    return (
      <Sidebar className="">
        <SidebarHeader className='font-clash-bold text-orange-300 text-2xl p-4'>ArenaPulse</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className='space-y-2 p-2'>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className='font-clash-medium text-base text-gray-700 py-5 hover:bg-orange-300 hover:text-white rounded-md transition-colors'>
                      <Link to={item.url} activeProps={{ className: 'font-clash-semibold bg-orange-300 text-black border-3 border-black' }} className="flex items-center gap-3 px-3">
                        <item.icon size={20} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className='flex flex-row justify-center items-center border-t border-gray-100 p-4'>
          <img src="/profile.jpg" className='w-10 h-10 rounded-full' alt="Profile" />
          <div className='flex flex-col'>
            <span className='font-satoshi-regular text-gray-800 text-sm'>Jennifer Burger</span>
            <span className='font-satoshi-regular text-gray-500 text-xs'>engineering@polymorphlabs.io</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    )
  }
  