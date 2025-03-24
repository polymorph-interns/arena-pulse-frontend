// src/routes/dashboard/_layout.tsx
import { createFileRoute } from '@tanstack/react-router'
import { SidebarProvider } from '@/components/ui/sidebar'
import { DashboardLayout } from './-components/layout'

export const Route = createFileRoute('/dashboard/_layout')({
  component: LayoutComponent,
})

function LayoutComponent({children}: {children: React.ReactNode}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardLayout>
        {/* <Outlet /> */}
        {children}
      </DashboardLayout>
    </SidebarProvider>
  )
}

export default LayoutComponent  