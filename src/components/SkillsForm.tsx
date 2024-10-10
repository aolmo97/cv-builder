import React, { useState } from 'react'
import { Skill, CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface SkillsFormProps {
  skills: Skill[]
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ skills, setCV }) => {
  const { t } = useTranslation()
  const [newSkill, setNewSkill] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSkill.trim()) {
      setCV((prevCV) => ({
        ...prevCV,
        skills: [...prevCV.skills, { id: Date.now().toString(), name: newSkill.trim() }],
      }))
      setNewSkill('')
    }
  }

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{t('skills')}</h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={newSkill}
          onChange={handleChange}
          placeholder={t('addSkill')}
          className="flex-grow p-2 mr-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {t('add')}
        </button>
      </form>
      <div className="mt-2 flex flex-wrap">
        {skills.map((skill) => (
          <span key={skill.id} className="bg-gray-200 px-2 py-1 m-1 rounded">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}