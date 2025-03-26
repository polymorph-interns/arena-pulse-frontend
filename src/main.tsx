import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen.ts'
import { AuthProvider } from './context/authContext.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const router = createRouter({routeTree})

declare module '@tanstack/react-router'{
  interface Register{
    router: typeof router
  }
}

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider> 
      <RouterProvider router={router}/>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
