import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useAuth } from '@/context/authContext'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { isAuthenticated } = useAuth();
 return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}
