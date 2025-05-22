import '../styles/index.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <nav className='bg-sky-900 text-white text-2xl px-4 py-3 flex gap-x-30 h-20 justify-center'>
            <button onClick={() => navigate('/')} className='hover:underline '>Home</button>
            <button onClick={() => navigate('/products')} className='hover:underline'>Products</button>
            <button onClick={() => navigate('/cart')} className='hover:underline'>Cart</button>
        </nav>
    );
}


export default Navbar;
