import React from 'react'
import axios from 'axios'

import PicOfDay from './PicOfDay'

class PicOfDayHead extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      picOfDayHead: []
    }
  }
  componentDidMount () {
    axios.get('https://api.unsplash.com/photos/random?client_id=fd813aa7399829fbd496ff9ba7fa3cead32c30fa4089c952af6bc7ab8722e65e')
      .then((res) => {
        this.setState({
          picOfDayHead: res.data.messages
        })
        console.log(picOfDayHead);
      })
      .catch((res) => {
        console.error(res)
      })
  }
  render () {
    if (this.state.picOfDayHead.length > 0) {
      return (
        <ul>
          {this.state.picOfDayHead.map((message, i) =>
              <PicOfDay
                key={i}
                author={message.author}
                message={message.content}
                date={message.updated}
              />
          )}
        </ul>
      )
    } else {
      return (
        <p>Something is wrong!</p>
      )
    }
  }
}

export default PicOfDayHead
