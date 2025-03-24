import { createFileRoute } from '@tanstack/react-router'
import LayoutComponent from './_layout'

export const Route = createFileRoute('/dashboard/leagues')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LayoutComponent>
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-4">Leagues</h1>
        <p>Leagues page</p>
        </div>
    </LayoutComponent>
  )
}
