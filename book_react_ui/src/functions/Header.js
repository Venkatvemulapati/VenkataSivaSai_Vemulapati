import{Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserAction from '../redux/action/UserAction';


const Header=()=>{
    const user = useSelector((state)=> state.user);
    const userAction = UserAction();
    const logoutClick=()=>{
        userAction.logout();
    };

    return(
        <div className='ui large menu'>
            <Link to={"/login"} className="active item">Home</Link>
            <h1 className='right menu'>Book Information System</h1>
           <div className='right menu'>
           
                <div className='item'>
                {
                    user ? (<div  className='ui primary button'
                    onClick={logoutClick}>Logout</div>)
                    :
                    (<Link to={"/login"} className="ui primary button">Login</Link>)
                }
                 </div>
            </div>
        </div>
    );


}

export default Header;