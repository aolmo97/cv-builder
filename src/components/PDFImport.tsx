import React, { useRef } from 'react'
import { CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface PDFImportProps {
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const PDFImport: React.FC<PDFImportProps> = ({ setCV }) => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        parseCV(text)
      }
      reader.readAsText(file)
    }
  }

  const parseCV = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '')
    const newCV: CV = {
      personalInfo: {
        name: lines[0] || '',
        email: '',
        phone: '',
      },
      experience: [],
      education: [],
      skills: [],
      languages: [],
    }

    let currentSection = ''
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.includes('@') && line.includes('|')) {
        const [email, phone] = line.split('|')
        newCV.personalInfo.email = email.trim()
        newCV.personalInfo.phone = phone.trim()
      } else if (line === 'Experience' || line === 'Education' || line === 'Skills' || line === 'Languages') {
        currentSection = line
      } else {
        switch (currentSection) {
          case 'Experience':
            if (line.includes(' at ')) {
              const [position, company] = line.split(' at ')
              newCV.experience.push({
                id: Date.now().toString(),
                position: position.trim(),
                company: company.trim(),
                startDate: '',
                endDate: '',
                description: '',
              })
            }
            break
          case 'Education':
            if (line.includes(' - ')) {
              const [degree, institution] = line.split(' - ')
              newCV.education.push({
                id: Date.now().toString(),
                degree: degree.trim(),
                institution: institution.trim(),
                graduationDate: '',
              })
            }
            break
          case 'Skills':
            newCV.skills = line.split(',').map(skill => ({
              id: Date.now().toString(),
              name: skill.trim(),
            }))
            break
          case 'Languages':
            if (line.includes(':')) {
              const [name, level] = line.split(':')
              newCV.languages.push({
                id: Date.now().toString(),
                name: name.trim(),
                level: level.trim(),
              })
            }
            break
        }
      }
    }

    setCV(newCV)
  }

  const importFromPDF = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".txt"
        style={{ display: 'none' }}
      />
      <button
        onClick={importFromPDF}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {t('importFromTXT')}
      </button>
    </>
  )
}