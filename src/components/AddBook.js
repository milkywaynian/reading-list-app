import React from 'react';

function AddBook(){
    return (
        <>
            <p>Add your book</p>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" />
                <label for="author">author</label>
                <input type="add" value="Add" />
            </form>
        </>
            )
        }

export default AddBook;
