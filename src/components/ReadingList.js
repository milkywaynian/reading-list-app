import React from 'react';
import { Button } from 'react-bootstrap'; 

// function ReadingList() {
//     return (
//         <div>
//             <h1>Reading List</h1>
//             <Button variant="primary" href='/add-book'>Add Book</Button>
//             <table>
//                 <tr>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Read</th>
//                 </tr>
//             </table>
//         </div>
//     )

// }

class ReadingList extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            books: [
                    {title: "Harry Potter", author: "Joanne Rowling", read: false},
                    {title: "Cakes in Bloom", author: "Peggy Porschen", read: true},
                    {title: "example ", author: "example2", read: true}
                    ]  
            };
        
    }

   
    render() {
        return (
            <div>
            <h1>Reading List</h1>
            <Button variant="primary" href='/add-book'>Add Book</Button>
            <table>
                <tr>
                    <th>{this.state.books.map(
                        (book,index) => (<p key ={index}>{book.title}</p>)
                    )}</th>
                    <th>{this.state.books.map(
                        (book,index) => (<p key ={index}>{book.author}</p>)
                    )}</th>
                    <th>{this.state.books.map(
                        (book,index) => (<p key ={index}>{book.read}</p>)
                    )}</th>
                </tr>
            </table>
        </div>
        )
    }
}


export default ReadingList;