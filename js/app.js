class book {
}
function getAllBooks() {
    let books = [
        { title: 'ulysses', author: 'James Joyce', available: true },
        { title: 'a farewell to arms', author: 'earnest Hemmingway', available: false },
        { title: 'Moby Dick', author: 'Herman Melville', available: false }
    ];
    return books;
}
function logFirstAvailable(books) {
    let numberOfBooks = books.length;
    let firstAvailable = "";
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('total books: ' + numberOfBooks);
    console.log('first available: ' + firstAvailable);
}
const allBooks = getAllBooks();
logFirstAvailable(allBooks);
