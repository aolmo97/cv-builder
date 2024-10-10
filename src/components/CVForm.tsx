import React from 'react'
import { CV } from '../types'
import { PersonalInfoForm } from './PersonalInfoForm'
import { ExperienceForm } from './ExperienceForm'
import { EducationForm } from './EducationForm'
import { SkillsForm } from './SkillsForm'
import { LanguagesForm } from './LanguagesForm'
import { useTranslation } from '../hooks/useTranslation'

interface CVFormProps {
  cv: CV
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const CVForm: React.FC<CVFormProps> = ({ cv, setCV }) => {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{t('cvForm')}</h2>
      <PersonalInfoForm personalInfo={cv.personalInfo} setCV={setCV} />
      <ExperienceForm experience={cv.experience} setCV={setCV} />
      <EducationForm education={cv.education} setCV={setCV} />
      <SkillsForm skills={cv.skills} setCV={setCV} />
      <LanguagesForm languages={cv.languages} setCV={setCV} />
    </div>
  )
}