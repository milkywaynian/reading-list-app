import React from 'react';
import { button } from 'react-bootstrap'; 

function ReadingList() {
    return (
        <div>
            <h1>Reading List</h1>
            <button type="button">Add Book</button>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Read</th>
                </tr>
            </table>
        </div>
    )

}

export default ReadingList;