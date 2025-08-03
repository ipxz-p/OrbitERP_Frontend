import BaseButton from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { t, i18n } = useTranslation()
  return (
    <div className="p-2">
      <h3>{t('test')}</h3>
      <BaseButton onClick={() => i18n.changeLanguage('th')}>TH</BaseButton>
      <BaseButton onClick={() => i18n.changeLanguage('en')}>EN</BaseButton>
    </div>
  )
}