import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import { dynamicProjectRoutes } from "./lib/projects";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          {dynamicProjectRoutes().map(({ path, element }) => (
            <Route key={path} path={path} element={<Page>{element}</Page>} />
          ))}
          <Route
            path="*"
            element={
              <Page>
                <NotFound />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
      <footer className="mt-20 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.main>
  );
}
