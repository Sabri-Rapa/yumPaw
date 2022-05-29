import React, { useEffect, useState } from "react";
import NavBarRegistered from "../../Components/NavBar/NavBarRegistered";
import style from "./Profile.module.css";
import styleContainer from "../../Components/GlobalCss/InContainer.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';

export default function Profile() {
    const [userData, setUser] = useState({});
    const{user, isAuthenticated} = useAuth0();
    useEffect(()=>{
        if (isAuthenticated){
            setUser({
                nombre:user.name,
                picture:user.picture,
            })
        }
    },[user])
    return (
        <main>
            <NavBarRegistered />
            <div className={styleContainer.container}>
            <section className={style.infoProfile}>
                <img src={userData.picture} alt="profilePicture" />
                <article>
                    <h1>{userData.nombre}</h1>
                    <h2>Localidad</h2>
                </article>
            </section>

            <section className={style.mainInfoProfile}>
                <h1 className={style.boxLabel}>Mis datos</h1>
                <h4>Correo electronico: email</h4>
                <h4>Direccion: adress</h4>
                <div>
                    <button>Editar datos</button>
                </div>
            </section>
            
            <section className={style.petsProfile}>
                <h1 className={style.boxLabel}>Mis mascotas</h1>
                <article>    
                    <div className={style.petInfo}>
                        <img src="" alt="profilePicture" />
                        <div className={style.petData}>
                            <h2>Mascota 1: name</h2>
                            <h4>Raza: race</h4>
                            <p>Sobre Mascota 1: description</p>
                        </div>
                    </div>
                    <div className={style.petInfo}>
                        <img src="" alt="profilePicture" />
                        <div className={style.petData}>
                            <h2>Mascota 2: name</h2>
                            <h4>Raza: race</h4>
                            <p>Sobre Mascota 2: description</p>
                        </div>
                    </div>
                    <NavLink to='/agregarmascota'>
                        <button>Agregar mascota</button>
                    </NavLink>
                    
                </article>
            </section>
            </div>
        </main>
    )
}