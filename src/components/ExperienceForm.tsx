import React, { useState } from 'react'
import { Experience, CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface ExperienceFormProps {
  experience: Experience[]
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, setCV }) => {
  const { t } = useTranslation()
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewExperience((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCV((prevCV) => ({
      ...prevCV,
      experience: [...prevCV.experience, { ...newExperience, id: Date.now().toString() }],
    }))
    setNewExperience({
      id: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    })
  }

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{t('experience')}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          value={newExperience.company}
          onChange={handleChange}
          placeholder={t('company')}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="position"
          value={newExperience.position}
          onChange={handleChange}
          placeholder={t('position')}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="date"
          name="startDate"
          value={newExperience.startDate}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="date"
          name="endDate"
          value={newExperience.endDate}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          name="description"
          value={newExperience.description}
          onChange={handleChange}
          placeholder={t('description')}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t('addExperience')}
        </button>
      </form>
      {experience.map((exp) => (
        <div key={exp.id} className="mt-2 p-2 border rounded">
          <p><strong>{exp.position}</strong> at {exp.company}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  )
}