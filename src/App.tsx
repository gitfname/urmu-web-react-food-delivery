
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { VerifyPhone } from "./pages/VerifyPhone";
import { CreateAccount } from "./pages/CreateAccount";
import { ApplicationDefaultLang, ApplicationSupportedLangs } from "./constants";
import { Login } from "./pages/Login";


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

  return <Login />

  return (
    <ApplicationLayout>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="about"
          element={<div>About page</div>}
        />

      </Routes>

    </ApplicationLayout>

  )
}

export default App