import { createFileRoute } from '@tanstack/react-router'
import LayoutComponent from './_layout'

export const Route = createFileRoute('/dashboard/teams')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LayoutComponent>
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-4">Teams</h1>
        <p>Teams page</p>
      </div>
    </LayoutComponent>
 
  )
}
