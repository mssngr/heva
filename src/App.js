import React, { Component } from 'react'
import {compose, withState, lifecycle} from 'recompose'

import Map from './components/Map'
import unitTypes from './components/units'

function isClickValid(x, y, team, clickState) {
  const distance = clickState && Math.abs(team.units[clickState].x - x + team.units[clickState].y - y)
  const stamina = clickState && team.units[clickState].stamina
  const isDifferentTile = team.units[clickState].x !== x && team.units[clickState].y !== y
  const hasEnoughStamina = distance <= stamina

  return isDifferentTile && hasEnoughStamina
}

class App extends Component {
  handleClick = (x, y, clickedUnit) => {
    const {team1, team2, clickState, setTeam1, setTeam2, setClickState, whoseTurn, setWhoseTurn} = this.props
    const teams = [team1, team2]
    const clickedTeam = clickedUnit && clickedUnit.substr(0, 5)

    if (clickState) {
      switch (teams[whoseTurn].id) {
        case team1.id: {
          if (isClickValid(x, y, team1, clickState)) {
            setTeam1({
              ...team1,
              units: {
                ...team1.units,
                [clickState]: {
                  ...team1.units[clickState],
                  x: x,
                  y: y,
                },
              },
            })
            setClickState(undefined)
            setWhoseTurn(whoseTurn === 0 ? whoseTurn + 1 : whoseTurn - 1)
          } else {
            console.log('invalid movement. Try again')
          }
          break
        }

        case team2.id: {
          if (isClickValid(x, y, team2, clickState)) {
            setTeam2({
              ...team2,
              units: {
                ...team2.units,
                [clickState]: {
                  ...team2.units[clickState],
                  x: x,
                  y: y,
                },
              },
            })
            setClickState(undefined)
            setWhoseTurn(whoseTurn === 0 ? whoseTurn + 1 : whoseTurn - 1)
          } else {
            console.log('invalid movement. Try again')
          }
          break
        }

        default:
          break
      }
    } else {
      switch (teams[whoseTurn].id + clickedTeam) {
        case team1.id + team1.id: {
          console.log('clicked your unit')
          setClickState(clickedUnit)
          break
        }

        case team2.id + team2.id: {
          console.log('clicked your unit')
          setClickState(clickedUnit)
          break
        }

        default:
          break
      }
    }
  }

  render() {
    const {team1, team2, whoseTurn, clickState} = this.props
    const teams = [team1, team2]
    return (
      <div>
        <h1>{whoseTurn}'s turn</h1>
        <Map
          handleClick={this.handleClick}
          teams={teams}
          clickState={clickState}
          whoseTurn={whoseTurn}
          width={12}
          height={8}
        />
      </div>
    )
  }
}

export default compose(
  withState('clickState', 'setClickState', undefined),
  withState('whoseTurn', 'setWhoseTurn', 0),
  withState('team1', 'setTeam1', {
    id: 'team1',
    name: 'team1',
    color: 'black',
    units: {
      team1_unit1: {
        id: 'team1_unit1',
        type: unitTypes.Axeman,
        stamina: 5,
        x: 0,
        y: 0,
      },
      team1_unit2: {
        id: 'team1_unit2',
        type: unitTypes.Axeman,
        stamina: 5,
        x: 1,
        y: 0,
      },
    },
  }),
  withState('team2', 'setTeam2', {
    id: 'team2',
    name: 'team2',
    color: 'white',
    units: {
      team2_unit1: {
        id: 'team2_unit1',
        type: unitTypes.Swordsman,
        stamina: 5,
        x: 11,
        y: 7,
      },
      team2_unit2: {
        id: 'team2_unit2',
        type: unitTypes.Swordsman,
        stamina: 5,
        x: 10,
        y: 7,
      },
    },
  }),
  lifecycle({
    componentDidMount() {
      console.log(this.props)
    },
    componentDidUpdate() {
      console.log(this.props)
    },
  }),
)(App)
