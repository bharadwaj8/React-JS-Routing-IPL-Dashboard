import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    id: '',
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)

    const lmd = data.latest_match_details

    const updatedLatestMatch = {
      competingTeam: lmd.competing_team,
      competingTeamLogo: lmd.competing_team_logo,
      id: lmd.id,
      date: lmd.date,
      firstInnings: lmd.first_innings,
      manOfTheMatch: lmd.man_of_the_match,
      matchStatus: lmd.match_status,
      result: lmd.result,
      secondInnings: lmd.second_innings,
      umpires: lmd.umpires,
      venue: lmd.venue,
    }

    const updatedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      id: each.id,
      date: each.date,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      id,
      latestMatchDetails: updatedLatestMatch,
      recentMatches: updatedRecentMatches,
      isLoading: false,
      teamBannerUrl: data.team_banner_url,
    })
  }

  render() {
    const {
      id,
      isLoading,
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
    } = this.state

    console.log(isLoading)

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <p className="latest-desc">Latest Matches</p>
            <LatestMatch details={latestMatchDetails} />
            <div className="match-card-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
