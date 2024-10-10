import React from 'react'
import { CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface CVPreviewProps {
  cv: CV
}

export const CVPreview: React.FC<CVPreviewProps> = ({ cv }) => {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{t('cvPreview')}</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{cv.personalInfo.name}</h3>
        <p>{cv.personalInfo.email} | {cv.personalInfo.phone}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">{t('experience')}</h4>
        {cv.experience.map((exp) => (
          <div key={exp.id} className="mb-2">
            <p className="font-semibold">{exp.position} at {exp.company}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">{t('education')}</h4>
        {cv.education.map((edu) => (
          <div key={edu.id} className="mb-2">
            <p className="font-semibold">{edu.degree}</p>
            <p>{edu.institution} - {edu.graduationDate}</p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">{t('skills')}</h4>
        <p>{cv.skills.map((skill) => skill.name).join(', ')}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">{t('languages')}</h4>
        {cv.languages.map((lang) => (
          <p key={lang.id}>{lang.name}: {lang.level}</p>
        ))}
      </div>
    </div>
  )
}