import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  console.log(id)
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
