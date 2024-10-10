export interface PersonalInfo {
  name: string
  email: string
  phone: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  graduationDate: string
}

export interface Skill {
  id: string
  name: string
}

export interface Language {
  id: string
  name: string
  level: string
}

export interface CV {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  languages: Language[]
}