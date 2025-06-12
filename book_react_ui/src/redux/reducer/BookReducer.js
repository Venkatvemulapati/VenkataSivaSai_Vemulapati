export const GET_BOOKS = "GET_BOOKS";
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const DEL_BOOK = "DEL_BOOK";

const BookReducer =(state=[],action)=>{
    let books = [...state];

    switch(action.type){
        case GET_BOOKS :
            console.log([...action.payload]);
            return [...action.payload];
        
        case SEARCH_BOOKS  :
            return [...action.payload];
        
        case ADD_BOOK :{
            books.push(action.payload);
            return books;
        }

        case DEL_BOOK : {
            books = books.filter((book)=> book.bookId !== action.payload);
            return books;
        }
        
        case EDIT_BOOK :{
            const index = books.findIndex((book)=>book.bookId===
                            action.payload.bookId);

            books[index] = {...books[index],...action.payload};                
            return books;
        }
        default :
        return state;
    }


}

export default BookReducer;