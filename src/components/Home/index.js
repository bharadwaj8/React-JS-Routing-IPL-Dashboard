import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedTeamCardsList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardsList: updatedTeamCardsList, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <div className="team-card-container">
              {teamCardsList.map(each => (
                <TeamCard key={each.id} details={each} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
