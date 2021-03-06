import React from 'react';


const BookDetail = ({ book, handleBookShelf }) => {
        
        const imageThumb = book.imageLinks ? book.imageLinks.smallThumbnail : null;
       

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageThumb})` }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={e => handleBookShelf(book, e.target.value)} value={book.shelf} >
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="no">None</option>
                                </select>
                            </div>
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        );
};

export default BookDetail;
