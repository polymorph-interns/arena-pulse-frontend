import { createFileRoute } from '@tanstack/react-router'
import LayoutComponent from './_layout'
export const Route = createFileRoute('/dashboard/fixtures')({
  component: Fixtures,
})

function Fixtures() {
  return (
    <LayoutComponent>
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-4">Fixtures</h1>
        <p>Fixtures page</p>
      </div>
    </LayoutComponent>
  )
}