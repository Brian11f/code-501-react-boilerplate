import React from 'react'
import _ from 'lodash'

const Bio = ({ myName, age, pronoun, favoriteActivity }) =>
  <div className='Bio'>
    {/* <img src={this.props.imgSRC} alt={this.props.imgAlt} /> */}
    <p>{myName} is {age}</p>
    <p>{_.capitalize(pronoun.nominative)} enjoys {favoriteActivity}.</p>
  </div>

const propTypes = {
  myName: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

export default Object.assign(Bio, propTypes)
