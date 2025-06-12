import React,{useState} from "react";
import {Link, Navigate,useNavigate} from "react-router-dom";
import BookAction from "../redux/action/BookAction";
import  {useSelector} from "react-redux/es/exports";
import { REQUEST_TYPE, server_request } from "../axios";


const AddBook=()=>{

    const  bookAction = BookAction();
    const [book,setBook]=useState({});
    const navigate = useNavigate();

    const onInputChange=(event)=>{
        setBook({...book, [event.target.name]: event.target.value});
    };

    const onSubmit=(bk)=>{
        bk.preventDefault();
        bookAction.addBook(book,navigate);
    };

    return(
        <div className="align-items-center container">
            <h1>Add New Book</h1>
            <form>
                <div className="form-group justify-content-center">
                    <label>Enter Book ID</label>
                    <input type={"text"} name="bookId" className="form-control"
                    value={book.bookId} onChange={onInputChange}/><br/>

                    <label>Enter Book Title</label>
                    <input type={"text"} name="title" className="form-control"
                    value={book.title} onChange={onInputChange}/><br/>

                    <label>Enter Author</label>
                    <input type={"text"} name="author" className="form-control"
                    value={book.author} onChange={onInputChange}/><br/>
                    
                    <label>Enter Publications</label>
                    <input type={"text"} name="publications" className="form-control"
                    value={book.publications} onChange={onInputChange}/><br/>
                    
                    <label>Enter Year</label>
                    <input type={"text"} name="year" className="form-control"
                    value={book.year} onChange={onInputChange}/><br/>
                    
                    <label>Enter Price</label>
                    <input type={"text"} name="price" className="form-control"
                    value={book.price} onChange={onInputChange}/><br/>

                    <button className="ui button medium green" onClick={onSubmit}>Add</button>
                    &nbsp;&nbsp;
                   
                    <Link to={"/"}>
                        <button className="ui primary button medium">Cancel</button>
                    </Link>
                    
                </div>




            </form>
        </div>

    );


}

export default AddBook;