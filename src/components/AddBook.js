import React from 'react';
import {Button} from 'react-bootstrap';

function AddBook(){
    return (
        <>
            <p>Add your book</p>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" />
                <label for="author">author</label>
                <input type="add" />
                <Button variant="primary" type="submit">Submit</Button>
            </form>
        </>
            )
        }

export default AddBook;
