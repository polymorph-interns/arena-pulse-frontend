import * as React from 'react'
import { Outlet, createRootRoute, } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
    {/* <nav>
      <Link to="/login">Login</Link>
      </nav> */}
      <Outlet />
    </React.Fragment>
  )
}
