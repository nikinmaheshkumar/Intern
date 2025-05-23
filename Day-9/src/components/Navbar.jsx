import '../styles/index.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <nav className='bg-[#220135] text-white text-2xl px-4 py-3 flex gap-x-30 h-20 justify-center'>
            <button onClick={() => navigate('/')} className='hover:underline font-semibold'>Home</button>
            <button onClick={() => navigate('/products')} className='hover:underline font-semibold'>Products</button>
            <button onClick={() => navigate('/cart')} className='hover:underline font-semibold'>Cart</button>
            <button onClick={() => navigate('/contact')} className='hover:underline font-semibold'>Contact</button>
        </nav>
    );
}


export default Navbar;
