import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

interface LanguageSelectorProps {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  const { t } = useTranslation()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="en">{t('english')}</option>
      <option value="es">{t('spanish')}</option>
      <option value="fr">{t('french')}</option>
    </select>
  )
}