import './NavBar.css';
import logo from '../assets/images/carrito.png'
const NavBar = () => {
    return (
        <header>
            <nav>  
                <ul>
                    <li><img className='logocarrito' src={logo}></img></li>               
                    <li><a href="#" className="Comienzodepag">Bm.Tejidos</a></li>
                    <li><a href="#">CONTACTO</a></li>
                    <li><a href="#">AMIGURUMIS</a></li>
                    <li><a href="#">ROPA</a></li>
                    <li><a href="#">PARA PERROS</a></li>
                    <li><a href="#">ACCESORIOS</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar