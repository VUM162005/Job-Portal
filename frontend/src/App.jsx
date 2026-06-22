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
import { ThemeProvider } from "./components/theme-provider"
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/onboarding", element: <OnboardingPage /> },
        { path: "/my-jobs", element: <MyJobs /> },
        { path: "/job/:id", element: <JobPage /> },
        { path: "/jobs", element: <JobListing /> },
        { path: "/post-job", element: <PostJob /> },
        { path: "/saved-job", element: <SavedJob /> },
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