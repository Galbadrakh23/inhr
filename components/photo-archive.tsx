'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { archivePhotos } from './archive-photos'

const years = Array.from(new Set(archivePhotos.map((photo) => photo.year))).sort(
  (a, b) => Number(b) - Number(a),
)

export function PhotoArchive() {
  const [selectedYear, setSelectedYear] = useState('Бүгд')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const photos = useMemo(() => {
    if (selectedYear === 'Бүгд') {
      return years.flatMap((year) => {
        const highlight = archivePhotos.find((photo) => photo.year === year)
        return highlight ? [highlight] : []
      })
    }
    return archivePhotos.filter((photo) => photo.year === selectedYear)
  }, [selectedYear])

  useEffect(() => {
    if (activeIndex === null) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % photos.length)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, photos.length])

  const activePhoto = activeIndex === null ? null : photos[activeIndex]

  return (
    <section className="archive-section" id="gallery" aria-labelledby="archive-title">
      <div className="archive-heading">
        <div>
          <p className="eyebrow"><span /> Үйл ажиллагааны түүх</p>
          <h2 id="archive-title">Бидний <em>дурсамж.</em></h2>
          <p className="archive-intro">
            2011 оноос хойших сургалт, уулзалт, арга хэмжээний гэрэл зургууд.
          </p>
        </div>
        <div className="archive-count"><strong>120</strong><span>зураг · 12 жилийн архив</span></div>
      </div>

      <div className="archive-controls" aria-label="Зургаар шүүх">
        <div className="year-filters" role="group" aria-label="Архивын он сонгох">
          <button
            className={`year-filter${selectedYear === 'Бүгд' ? ' is-selected' : ''}`}
            onClick={() => setSelectedYear('Бүгд')}
            type="button"
            aria-pressed={selectedYear === 'Бүгд'}
          >
            Он бүрээс
          </button>
          {years.map((year) => (
            <button
              className={`year-filter${selectedYear === year ? ' is-selected' : ''}`}
              key={year}
              onClick={() => setSelectedYear(year)}
              type="button"
              aria-pressed={selectedYear === year}
            >
              {year}
            </button>
          ))}
        </div>
        <span className="archive-result-count">
          {selectedYear === 'Бүгд' ? `${photos.length} он` : `${photos.length} зураг`}
        </span>
      </div>

      <div className="archive-grid" aria-live="polite">
        {photos.map((photo, index) => (
          <button
            className={`archive-photo archive-photo-${index % 6}`}
            type="button"
            key={photo.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`${photo.year} оны зургийг томоор үзэх`}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 620px) 50vw, (max-width: 980px) 33vw, 25vw" />
            <span className="archive-photo-overlay">
              <span>{photo.year}</span>
              <span className="archive-photo-plus" aria-hidden="true">+</span>
            </span>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`${activePhoto.year} оны зураг`} onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Хаах"><X size={22} /></button>
          <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex! - 1 + photos.length) % photos.length) }} aria-label="Өмнөх зураг"><ArrowLeft size={22} /></button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-image-wrap">
              <Image src={activePhoto.src} alt={activePhoto.alt} fill sizes="90vw" priority />
            </div>
            <figcaption><strong>{activePhoto.year}</strong><span>ХНСҮХ-ийн үйл ажиллагааны архив</span><small>{activeIndex! + 1} / {photos.length}</small></figcaption>
          </figure>
          <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex! + 1) % photos.length) }} aria-label="Дараагийн зураг"><ArrowRight size={22} /></button>
        </div>
      )}
    </section>
  )
}
