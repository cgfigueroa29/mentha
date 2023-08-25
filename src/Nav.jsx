import './nav.css'
import { FaTooth } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

export default function Nav() {
    return (
    <>
    <div className='free'>

        <div className='icon'>
        <FaTooth />
        </div>

        <p>MENTHA by Daniela Espitia</p>

    </div>

    <div className='main-header'>

        <div className='container'>

            <div className='logo'>
                <img src='./public/mentha-logo3.png' alt='mentha-logo' />    
            </div>

            <div className='search-box'>
                <input type="text"  value='' placeholder='Enter the product name' autoComplete='off'/>
                <button>Search</button>
            </div>

            <div className='icon'>

            <div className='account'>

                <div className='user-icon'>
                   <AiOutlineUser /> 
                </div>

                <p>Hello user</p>

            </div>
            <AiOutlineHeart />
            <BsBagCheck />
            
        </div>

        </div>  
    </div>  
    </>
    )
}