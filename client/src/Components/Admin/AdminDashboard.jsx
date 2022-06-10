import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBarShop'
import Footer from '../Footer/Footer'
import styles from './AdminDashboard.module.css'


export default function AdminDashboard (){

    return(
        <div>
            <NavBar />
            <div className={styles.container}>
            <Link to='/admin/post-products'><button>AGREGAR PRODUCTOS</button></Link>
            <Link to='/admin/delete-products'><button>ELIMINAR PRODUCTOS</button></Link>
            <Link to='/admin/modify-products'><button>MODIFICAR PRODUCTOS</button></Link>
            <Link to='/admin/sales-receipts'><button>COMPROBANTES DE COMPRAS</button></Link>
            <Link to='/admin/get-users'><button>OBTENER USUARIOS REGISTRADOS</button></Link>
            <Link to='/admin/banUser'><button>USUARIOS BANEADOS</button></Link>
            </div>
            <Footer />
        </div>
    )

}



