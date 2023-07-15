
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ApplicationDefaultLang, ApplicationSupportedLangs } from "./constants";
import { ApplicationRoutes } from "./routes";
import 'swiper/css';
import { Categories } from "./pages/Categories";


function App() {

  const [_, i18n] = useTranslation()

  useEffect(
    () => {
      if (!ApplicationSupportedLangs.includes(i18n.language)) i18n.changeLanguage(ApplicationDefaultLang)

      if (i18n.dir(i18n.language) === "rtl") {
        document.body.setAttribute("dir", "rtl")
      }
      else {
        document.body.setAttribute("dir", "ltr")
      }
    },
    [i18n.language]
  )

  return (
    <ApplicationLayout>

      <Routes>

        <Route
          path={ApplicationRoutes.pages.home}
          element={<HomePage />}
        />

        <Route
          path={ApplicationRoutes.pages.categories}
          element={<Categories />}
        />

      </Routes>

    </ApplicationLayout>

  )
}

export default App