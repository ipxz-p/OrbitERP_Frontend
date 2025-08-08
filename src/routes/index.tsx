import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import BaseButton from "@/components/ui/base/button"
import Seo from "@/utils/seo/seo"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Seo title="Home" />
      <div className="p-2">
        <h3>{t("test")}</h3>
        <BaseButton onClick={() => i18n.changeLanguage("th")}>TH</BaseButton>
        <BaseButton onClick={() => i18n.changeLanguage("en")}>EN</BaseButton>
      </div>
    </>
  )
}
