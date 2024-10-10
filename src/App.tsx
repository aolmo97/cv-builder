import React, { useState } from 'react'
import { CVForm } from './components/CVForm'
import { CVPreview } from './components/CVPreview'
import { StaticCVPreview } from './components/StaticCVPreview'
import { LanguageSelector } from './components/LanguageSelector'
import { PDFExport } from './components/PDFExport'
import { PDFImport } from './components/PDFImport'
import { CV } from './types'
import { useTranslation } from './hooks/useTranslation'

function App() {
  const [cv, setCV] = useState<CV>({
    personalInfo: { name: '', email: '', phone: '' },
    experience: [],
    education: [],
    skills: [],
    languages: [],
  })
  const [language, setLanguage] = useState('en')
  const [showStaticPreview, setShowStaticPreview] = useState(false)
  const { t } = useTranslation(language)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{t('cvBuilder')}</h1>
      <div className="flex justify-end mb-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      {showStaticPreview ? (
        <div>
          <StaticCVPreview cv={cv} />
          <button
            onClick={() => setShowStaticPreview(false)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {t('backToEdit')}
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <CVForm cv={cv} setCV={setCV} />
          </div>
          <div className="w-full md:w-1/2">
            <CVPreview cv={cv} />
            <div className="mt-4 flex justify-between">
              <PDFExport cv={cv} />
              <PDFImport setCV={setCV} />
              <button
                onClick={() => setShowStaticPreview(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {t('viewStaticPreview')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App