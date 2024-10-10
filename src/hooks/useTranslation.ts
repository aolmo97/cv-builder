import { useCallback } from 'react'

const translations = {
  en: {
    cvBuilder: 'CV Builder',
    cvForm: 'CV Form',
    cvPreview: 'CV Preview',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    english: 'English',
    spanish: 'Spanish',
    french: 'French',
    exportToPDF: 'Export to PDF',
    importFromPDF: 'Import from PDF',
    viewStaticPreview: 'View Static Preview',
    backToEdit: 'Back to Edit',
  },
  es: {
    cvBuilder: 'Constructor de CV',
    cvForm: 'Formulario de CV',
    cvPreview: 'Vista previa del CV',
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Habilidades',
    languages: 'Idiomas',
    english: 'Inglés',
    spanish: 'Español',
    french: 'Francés',
    exportToPDF: 'Exportar a PDF',
    importFromPDF: 'Importar desde PDF',
    viewStaticPreview: 'Ver Vista Previa Estática',
    backToEdit: 'Volver a Editar',
  },
  fr: {
    cvBuilder: 'Créateur de CV',
    cvForm: 'Formulaire de CV',
    cvPreview: 'Aperçu du CV',
    experience: 'Expérience',
    education: 'Éducation',
    skills: 'Compétences',
    languages: 'Langues',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
    exportToPDF: 'Exporter en PDF',
    importFromPDF: 'Importer depuis PDF',
    viewStaticPreview: 'Voir l\'Aperçu Statique',
    backToEdit: 'Retour à l\'Édition',
  },
}

export const useTranslation = (language = 'en') => {
  const t = useCallback((key: string) => {
    return translations[language as keyof typeof translations][key as keyof typeof translations['en']] || key
  }, [language])

  return { t }
}