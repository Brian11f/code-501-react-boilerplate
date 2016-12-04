import React from 'react'

const books = [
  {title: '1111', author:'1111'},
  {title: '2222', author:'2222'},
  {title: '3333', author:'3333'},
  {title: '4444', author:'4444'}
]

class BooksList extends React.Component {
  render () {
    return (
      <div className='BooksList'>
        <ul>
          {books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
