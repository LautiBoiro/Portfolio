import './SkillTag.css'

export function SkillTag ({ label, img, emoji }) {
  return (
    <div className='skill-tag'>
      {img
        ? <img src={img} alt={label} className='skill-tag-img' />
        : <span className='skill-tag-emoji'>{emoji}</span>}
      <span className='skill-tag-tooltip'>{label}</span>
    </div>
  )
}