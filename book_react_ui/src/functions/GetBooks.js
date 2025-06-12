import React,{useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import BookAction from "../redux/action/BookAction";
import  {useSelector} from "react-redux/es/exportns";


const GetBooks = () => {
    const bookAction = BookAction();

    const {books, user} = useSelector((state)=>{
        const statecopy = {...state};

        return{
            books : statecopy.books || [],
            user : statecopy.user || null
        };
    });

    let isAdmin = (user && user.role && user.role ==="admin") || true;

    useEffect(()=>{
            bookAction.getBooks();
        
    },[]);

    const AdminButtons = ({id})=>{
        return(
            <React.Fragment>
                <td>
                    <Link to={`/editbook/${id}`}>
                       <button className="btn btn-warning">Update</button>
                    </Link>
                </td>

                <td>
                    <div onClick={()=>{bookAction.delBook(id);}}>
                    <button className="btn btn-danger">Delete</button>
                    </div>
                </td>
            </React.Fragment>
        );


    };

    return user ?(

        <div>
            {
                isAdmin && (
                    <Link to={"/addbook"}>
                         <button className="btn btn-primary">Add Book</button>
                    </Link>
                )
            }

            <table  className="table table-striped" width={"50%"}>
                <thead>
                    <tr align="center">
                        <th>BOOK ID</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>PUBLICATIONS</th>
                        <th>YEAR</th>
                        <th>PRICE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        books.map((bk)=>(
                            <tr key={bk.bookId}>
                                <td>{bk.bookId}</td>
                                <td>{bk.title}</td>
                                <td>{bk.author}</td>
                                <td>{bk.publications}</td>
                                <td>{bk.year}</td>
                                <td>{bk.price}</td>
                                {isAdmin  && <AdminButtons id={bk.bookId}/>}
                            </tr>    
                        ))
                    }
                </tbody>
            </table>
        </div>

    ) : (<Navigate to={"/login"}></Navigate>);
    

};

export default GetBooks;