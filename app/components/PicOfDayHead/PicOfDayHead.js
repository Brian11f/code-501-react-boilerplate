import React from 'react'
import axios from 'axios'

import PicOfDay from './PicOfDay'

class PicOfDayHead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: ''
    }
  }
  componentDidMount () {
    const id = 'fd813aa7399829fbd496ff9ba7fa3cead32c30fa4089c952af6bc7ab8722e65e'
    const url = `https://api.unsplash.com/photos/random?client_id=${id}`

    axios.get(url)
      .then((res) => {
        const newPicture = res.data.urls
        this.setState({
          pictures: newPicture
        })
        console.log(this.state.pictures);
      })
      .catch((err) => {
        console.error('An error occurred ', err)
      })
  }
  render () {
    return (
      <ul>
        {/* {this.state.picOfDayHead.map((message, i) =>
            <PicOfDay
              key={i}
              author={message.author}
              message={message.content}
              date={message.updated}
            />
        )} */}
        <img src={this.state.pictures.full} alt='photo' />
      </ul>
    )
  }
}

export default PicOfDayHead
