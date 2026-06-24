import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import OnboardingPage from "./pages/onboarding"
import MyJobs from "./pages/my-jobs"
import JobPage from "./pages/job"
import JobListing from "./pages/job-listing"
import PostJob from "./pages/post-job"
import SavedJob from "./pages/saved-job"
import ProtectedRoute from "./components/protected-route"
import { ThemeProvider } from "./components/theme-provider"
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/onboarding", element: <ProtectedRoute><OnboardingPage /></ProtectedRoute> },
        { path: "/my-jobs", element: <ProtectedRoute><MyJobs /></ProtectedRoute> },
        { path: "/job/:id", element: <ProtectedRoute><JobPage /></ProtectedRoute> },
        { path: "/jobs", element: <ProtectedRoute><JobListing /></ProtectedRoute> },
        { path: "/post-job", element: <ProtectedRoute><PostJob /></ProtectedRoute> },
        { path: "/saved-job", element: <ProtectedRoute><SavedJob /></ProtectedRoute> },
      ]
    },
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
export default App