import React from 'react';
import { Button } from 'react-bootstrap'; 

function ReadingList() {
    return (
        <div>
            <h1>Reading List</h1>
            <Button variant="primary" href='/add-book'>Add Book</Button>
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