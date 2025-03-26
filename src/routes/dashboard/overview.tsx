import { createFileRoute,   } from '@tanstack/react-router'
import LayoutComponent from './_layout'
 

export const Route = createFileRoute('/dashboard/overview')({
  component: Dashboard,
})



function Dashboard() {
  return (
    <LayoutComponent>
      <div className="h-full">
        <div className='flex flex-col justify-center items-center gap-5'>
        {/* Top Fixtures Display */}
        <div>
          
        </div>
          </div>
      </div>
    </LayoutComponent>
  )
}
