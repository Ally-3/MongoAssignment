import React, { useState, useEffect } from 'react';

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    fetch('http://localhost:5002')
      .then(response => response.json())
      .then(setBooks)
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const addBook = async () => {
    try {
      const response = await fetch('http://localhost:5002/addbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      const data = await response.json();
      setBooks([...books, data]);
      setNewBook({ title: '', author: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="App">
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default Booklist;
