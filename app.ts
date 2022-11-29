class book{
    title: string;
    author: string;
    available: boolean
}

function getAllBooks(){
    let books:book[] = [
        {title: 'ulysses', author : 'James Joyce', available: true },
        {title: 'a farewell to arms', author: 'earnest Hemmingway', available: false},
        {title: 'Moby Dick', author: 'Herman Melville', available: false}
    ]
    return books
}

function logFirstAvailable (books:book[]){
    let numberOfBooks:number = books.length;
    let firstAvailable = "";

    for(let currentBook of books){
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('total books: '+numberOfBooks)
    console.log('first available: '+firstAvailable)
}

const allBooks:book[] = getAllBooks();
logFirstAvailable(allBooks);