import React from 'react'
import { PersonalInfo, CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo
  setCV: React.Dispatch<React.SetStateAction<CV>>
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ personalInfo, setCV }) => {
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCV((prevCV) => ({
      ...prevCV,
      personalInfo: {
        ...prevCV.personalInfo,
        [name]: value,
      },
    }))
  }

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{t('personalInfo')}</h3>
      <input
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
        placeholder={t('name')}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
        placeholder={t('email')}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={handleChange}
        placeholder={t('phone')}
        className="w-full p-2 mb-2 border rounded"
      />
    </div>
  )
}