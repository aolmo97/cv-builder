import React, { useState } from 'react'
import { Education, CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface EducationFormProps {
  education: Education[]
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const EducationForm: React.FC<EducationFormProps> = ({ education, setCV }) => {
  const { t } = useTranslation()
  const [newEducation, setNewEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    graduationDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEducation((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCV((prevCV) => ({
      ...prevCV,
      education: [...prevCV.education, { ...newEducation, id: Date.now().toString() }],
    }))
    setNewEducation({
      id: '',
      institution: '',
      degree: '',
      graduationDate: '',
    })
  }

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{t('education')}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="institution"
          value={newEducation.institution}
          onChange={handleChange}
          placeholder={t('institution')}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="degree"
          value={newEducation.degree}
          onChange={handleChange}
          placeholder={t('degree')}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="date"
          name="graduationDate"
          value={newEducation.graduationDate}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t('addEducation')}
        </button>
      </form>
      {education.map((edu) => (
        <div key={edu.id} className="mt-2 p-2 border rounded">
          <p><strong>{edu.degree}</strong></p>
          <p>{edu.institution} - {edu.graduationDate}</p>
        </div>
      ))}
    </div>
  )
}