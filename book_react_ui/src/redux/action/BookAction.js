import { useDispatch } from "react-redux";
import { REQUEST_TYPE,server_request } from "../../axios";
import { GET_BOOKS,ADD_BOOK,DEL_BOOK,EDIT_BOOK,SEARCH_BOOKS } from "../reducer/BookReducer";

function BookAction(){
    const dispatch = useDispatch();

    const getBooks = async ()=>{
        try {
            const response = await server_request(REQUEST_TYPE.GET,"/books");
            dispatch({type : GET_BOOKS,payload : response.data});
            
        } catch (error) {
            console.log(error);
        }


    }

    const addBook = (book,navigate)=>{
        try {
            server_request(REQUEST_TYPE.POST,"/books",book);
            navigate("/");
            return dispatch({type: ADD_BOOK,payload : book});


        } catch (error) {
            console.log(error);
        }

    };

    const delBook=(id)=>{
        try {
            server_request(REQUEST_TYPE.DELETE,`/books/${id}`)
            return  dispatch({type: DEL_BOOK, payload:id});
        } catch (error) {
            console.log(error);
        }
    };

    const getBookById=(id)=>{
        try {
            const response = server_request(REQUEST_TYPE.GET,`/books/${id}`);
            if(response.status===200){
                return response;
            }
        } catch (error) {
            
        }

    }

    const editBook=(book,navigate)=>{
        try {
            const response=server_request(REQUEST_TYPE.PUT,"/books",book);
            navigate("/");
            return  dispatch({type : EDIT_BOOK,payload:book});
            
        } catch (error) {
            console.log(error);
        }


    }

    return Object.freeze({getBooks,addBook,delBook,getBookById,editBook});
}




export default BookAction;