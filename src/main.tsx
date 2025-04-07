import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen.ts'
import { AuthProvider } from './context/authContext.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client'

const router = createRouter({routeTree})

declare module '@tanstack/react-router'{
  interface Register{
    router: typeof router
  }
}

const queryClient = new QueryClient()

 export const client = new ApolloClient({
  uri:import.meta.env.VITE_GRAPHQL_API_URL ,
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider> 
    
      <RouterProvider router={router}/>
      
    </AuthProvider>
    
    </QueryClientProvider>
    </ApolloProvider>
    
  </StrictMode>,
)
