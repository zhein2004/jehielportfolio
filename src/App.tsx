import { Routes, Route } from "react-router";
import GuestLayout from "@/pages/guest/layout";
import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import ContactPage from "@/pages/guest/contact";
import ProjectsPage from "@/pages/projects/projects";import FirstReactAppPage from "@/pages/projects/firstreactapp";
import PortfolioWebsitePage from "@/pages/projects/portfoliowebsite";
import SchoolProjectsPage from "@/pages/projects/schoolprojects";
import ServicesPage from "@/pages/guest/services";

function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Project Pages */}
        <Route
          path="/projects/first-react-app"
          element={<FirstReactAppPage />}
        />

        <Route
          path="/projects/portfolio-website"
          element={<PortfolioWebsitePage />}
        />

        <Route
          path="/projects/school-projects"
          element={<SchoolProjectsPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;