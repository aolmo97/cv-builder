import React from 'react'
import { CV } from '../types'

interface StaticCVPreviewProps {
  cv: CV
}

export const StaticCVPreview: React.FC<StaticCVPreviewProps> = ({ cv }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800">{cv.personalInfo.name}</h1>
        <p className="text-xl text-gray-600">{cv.personalInfo.email} | {cv.personalInfo.phone}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
        {cv.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{exp.position}</h3>
            <p className="text-lg text-gray-600">{exp.company}</p>
            <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {cv.education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
            <p className="text-lg text-gray-600">{edu.institution}</p>
            <p className="text-gray-600">{edu.graduationDate}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap">
          {cv.skills.map((skill) => (
            <span key={skill.id} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h2>
        <ul className="list-disc list-inside">
          {cv.languages.map((lang) => (
            <li key={lang.id} className="text-gray-700">
              <span className="font-semibold">{lang.name}</span>: {lang.level}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}