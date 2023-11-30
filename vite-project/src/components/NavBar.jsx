import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>     
                    <img src="imagenes/carrito.png" class="Carro" ></img>                
                    <li><a href="index.html" className="Comienzodepag">Bm.Tejidos</a></li>
                    <li><a href="pages/contactos.html">CONTACTO</a></li>
                    <li><a href="pages/accesorios.html">AMIGURUMIS</a></li>
                    <li><a href="pages/ropa.html">ROPA</a></li>
                    <li><a href="pages/paraperros.html">PARA PERROS</a></li>
                    <li><a href="pages/accesorios.html">ACCESORIOS</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar