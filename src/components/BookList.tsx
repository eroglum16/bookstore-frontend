import React, {useEffect, useState} from 'react';
import {BookDTO} from "../api-client";
import {getAllBooks} from "../service/BookService";

interface BookListProps {
    addToBasket: (book: BookDTO) => void;
}

const BookList = ({ addToBasket }: BookListProps) => {
    const [books, setBooks] = useState([] as BookDTO[]);
    useEffect(() => {
        getAllBooks().then((res) => {
            setBooks(res.data);
        });
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Books</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="p-4 bg-white shadow-md rounded-md space-y-4"
                    >
                        <img
                            src={book.coverImageUrl}
                            alt={book.title}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-gray-600">By {book.authorName}</p>
                        <p className="text-gray-800 font-bold">${book.price?.toFixed(2)}</p>
                        <button
                            onClick={() => addToBasket(book)}
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
                        >
                            Add to Basket
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
