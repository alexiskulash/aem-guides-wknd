import './PdfViewer.scss'

interface PdfViewerProps {
  url: string
  title?: string
  height?: number
  className?: string
}

export default function PdfViewer({ url, title = 'PDF Document', height = 600, className = '' }: PdfViewerProps) {
  return (
    <div className={`cmp-pdfviewer ${className}`}>
      <iframe
        className="cmp-pdfviewer__iframe"
        src={url}
        title={title}
        style={{ height }}
      />
      <div className="cmp-pdfviewer__download">
        <a href={url} download className="cmp-pdfviewer__download-link" target="_blank" rel="noopener noreferrer">
          Download PDF
        </a>
      </div>
    </div>
  )
}
