import React from 'react'
import {Row, Tile} from './styled'

const giveCoordinates = (x, y, handleClick, clickedUnit) => () => {
  console.log(x, y)
  handleClick(x, y, clickedUnit)
}

function findUnitHere(x, y, teams) {
  let unit
  teams.forEach(team => {
    const unitKeys = team.units && Object.keys(team.units)
    const unitsArray = unitKeys.map(key => team.units[key])
    const unitHere = unitsArray && unitsArray.find(unit => unit.x === x && unit.y === y)
    const unitHereWithTeamColor = unitHere && {
      ...unitHere,
      color: team.color,
    }
    if (unitHereWithTeamColor) {
      unit = unitHereWithTeamColor
    }
  })
  return unit
}

function tiles(y, teams, handleClick, clickState, width, whoseTurn) {
  let tiles = []
  for (let i = 0; i < width; i++) {
    const unitHere = findUnitHere(i, y, teams)
    const Unit = unitHere && unitHere.type
    tiles.push(
      <Tile
        onClick={giveCoordinates(i, y, handleClick, unitHere && unitHere.id)}
        key={`Tile-${i}`}
        x={i}
        y={y}
        clickState={clickState}
        teams={teams}
        whoseTurn={whoseTurn}
        unitHere={unitHere}
      >
        {unitHere && <Unit color={unitHere.color} />}
      </Tile>
    )
  }
  return tiles
}

function rows(teams, handleClick, clickState, width, height, whoseTurn) {
  let rows = []
  for (let i = 0; i < height; i++) {
    rows.push(
      <Row key={`Row-${i}`}>
        {tiles(i, teams, handleClick, clickState, width, whoseTurn)}
      </Row>
    )
  }
  return rows
}

function Map({teams, handleClick, clickState, width = 10, height = 10, whoseTurn}) {
  return (
    <div style={{position: 'absolute'}}>
      {rows(teams, handleClick, clickState, width, height, whoseTurn)}
    </div>
  )
}

export default Map
