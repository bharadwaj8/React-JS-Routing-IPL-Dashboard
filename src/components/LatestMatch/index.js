import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    id,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <div className="latest-match-container">
      <div className="latest-match-left">
        <p className="team-heading">{competingTeam}</p>
        <p className="team-date">{date}</p>
        <p className="team-venue">{venue}</p>
        <p className="team-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-team-logo"
      />
      <div className="latest-match-right">
        <p className="sub-heading">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="sub-heading">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="sub-heading">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="sub-heading">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
