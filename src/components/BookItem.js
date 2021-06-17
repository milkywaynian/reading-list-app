import React from 'react';

const BookItem = (book, index) => {
    console.log(book.book);
    return (
        <>
            <tr>
                <td><p >{book.book.title}</p></td>
                <td><p >{book.book.author}</p></td>
                <td><p key ={index}>{book.book.read}</p></td>
            </tr>

        </>
    )
} 



export default BookItem;