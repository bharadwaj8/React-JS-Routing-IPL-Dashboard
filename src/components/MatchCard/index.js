import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, id, matchStatus, result} = details

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchStatus.toLowerCase()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
