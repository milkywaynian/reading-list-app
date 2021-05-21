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
                title: "Harry Potter",
                author: "Joanne Rowling",
                read: false
            };
        
    }

   
    render() {
        return (
            <div>
            <h1>Reading List</h1>
            <Button variant="primary" href='/add-book'>Add Book</Button>
            <table>
                <tr>
                    <th>{this.state.title}</th>
                    <th>{this.state.author}</th>
                    <th>{this.state.read}</th>
                </tr>
            </table>
        </div>
        )
    }
}


export default ReadingList;