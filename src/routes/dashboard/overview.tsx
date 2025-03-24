import { createFileRoute,   } from '@tanstack/react-router'
import LayoutComponent from './_layout'
 

export const Route = createFileRoute('/dashboard/overview')({
  component: Dashboard,
})



function Dashboard() {
  return (
    <LayoutComponent>
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <p>Welcome to ArenaPulse dashboard.</p>
      </div>
    </LayoutComponent>
  )
}
