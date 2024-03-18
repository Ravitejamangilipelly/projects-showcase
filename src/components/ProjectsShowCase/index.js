import './index.css'

const ProjectsShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="list-container">
      <img src={imageUrl} className="image" alt={name} />
      <p className="heading-name">{name}</p>
    </li>
  )
}

export default ProjectsShowCase
