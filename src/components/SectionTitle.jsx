function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="h-0.5 w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold uppercase leading-tight text-title sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="text-lg text-text-muted">{description}</p>}
    </div>
  )
}

export default SectionTitle
