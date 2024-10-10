import React, { useState } from 'react'
import { Language, CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface LanguagesFormProps {
  languages: Language[]
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const LanguagesForm: React.FC<LanguagesFormProps> = ({ languages, setCV }) => {
  const { t } = useTranslation()
  const [newLanguage, setNewLanguage] = useState<Language>({
    id: '',
    name: '',
    level: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewLanguage((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newLanguage.name && newLanguage.level) {
      setCV((prevCV) => ({
        ...prevCV,
        languages: [...prevCV.languages, { ...newLanguage, id: Date.now().toString() }],
      }))
      setNewLanguage({
        id: '',
        name: '',
        level: '',
      })
    }
  }

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{t('languages')}</h3>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <input
          type="text"
          name="name"
          value={newLanguage.name}
          onChange={handleChange}
          placeholder={t('language')}
          className="flex-grow p-2 mr-2 mb-2 border rounded"
        />
        <select
          name="level"
          value={newLanguage.level}
          onChange={handleChange}
          className="p-2 mr-2 mb-2 border rounded"
        >
          <option value="">{t('selectLevel')}</option>
          <option value="Beginner">{t('beginner')}</option>
          <option value="Intermediate">{t('intermediate')}</option>
          <option value="Advanced">{t('advanced')}</option>
          <option value="Native">{t('native')}</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">
          {t('add')}
        </button>
      </form>
      <div className="mt-2">
        {languages.map((lang) => (
          <div key={lang.id} className="bg-gray-200 px-2 py-1 m-1 rounded inline-block">
            {lang.name}: {lang.level}
          </div>
        ))}
      </div>
    </div>
  )
}