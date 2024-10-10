import React, { useRef } from 'react'
import { CV } from '../types'
import { useTranslation } from '../hooks/useTranslation'
import { usePDF } from 'react-to-pdf'
import { StaticCVPreview } from './StaticCVPreview'

interface PDFExportProps {
  cv: CV
}

export const PDFExport: React.FC<PDFExportProps> = ({ cv }) => {
  const { t } = useTranslation()
  const { toPDF, targetRef } = usePDF({ filename: 'cv.pdf' })

  return (
    <>
      <div style={{ display: 'none' }}>
        <div ref={targetRef}>
          <StaticCVPreview cv={cv} />
        </div>
      </div>
      <button
        onClick={() => toPDF()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t('exportToPDF')}
      </button>
    </>
  )
}