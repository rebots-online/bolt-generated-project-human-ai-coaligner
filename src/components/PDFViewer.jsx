import React from 'react'
import { Document, Page } from 'react-pdf'
import { useGesture } from 'react-use-gesture'
import { useStore } from '../store'
import AnnotationLayer from './AnnotationLayer'

function PDFViewer() {
  const { 
    pdfFile, 
    currentPage, 
    viewMode, 
    scale,
    setCurrentPage,
    setNumPages 
  } = useStore()

  const bind = useGesture({
    onDrag: ({ direction: [dx] }) => {
      if (dx > 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1)
      } else if (dx < 0) {
        setCurrentPage(currentPage + 1)
      }
    }
  })

  const renderPages = () => {
    if (viewMode === 'single') {
      return (
        <div className="relative">
          <Page 
            pageNumber={currentPage} 
            scale={scale}
            renderTextLayer={false}
          />
          <AnnotationLayer pageNumber={currentPage} />
        </div>
      )
    }

    return (
      <div className="flex gap-4">
        <div className="relative">
          <Page 
            pageNumber={currentPage} 
            scale={scale}
            renderTextLayer={false}
          />
          <AnnotationLayer pageNumber={currentPage} />
        </div>
        {currentPage + 1 && (
          <div className="relative">
            <Page 
              pageNumber={currentPage + 1} 
              scale={scale}
              renderTextLayer={false}
            />
            <AnnotationLayer pageNumber={currentPage + 1} />
          </div>
        )}
      </div>
    )
  }

  if (!pdfFile) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Upload a PDF to get started
      </div>
    )
  }

  return (
    <div 
      className="h-full overflow-auto flex items-center justify-center bg-gray-100 p-4"
      {...bind()}
    >
      <Document
        file={pdfFile}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div>Loading PDF...</div>}
        error={<div>Error loading PDF!</div>}
      >
        {renderPages()}
      </Document>
    </div>
  )
}

export default PDFViewer
