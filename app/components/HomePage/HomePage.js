import React from 'react'

import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessageList from '../MessageList/MessageList'

class HomePage extends React.Component {
  render () {
    return (
      <main>
        <Bio
          myName='Brian'
          age='28'
          pronoun={{
            nominative: 'he',
            accusative: 'him',
            possessive: 'his',
            reflecive: 'himself'
          }}
          favoriteActivity='React'
          />
        <BooksList />
        <MessageList />
      </main>
    )
  }
}

export default HomePage
