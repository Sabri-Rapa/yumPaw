import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from '../Providers/ProvidersCard.module.css';
import NavBar from "../NavBar/NavBarShop";
import { Container } from "semantic-ui-react";
import Footer from "../Footer/Footer";

const Ratings = ()=>{
    const {user, isAuthenticated} = useAuth0();
    const [reviews, setReviews] = useState([]);
    const [stars, setStars] = useState(5)
    useEffect(()=>{
        if (isAuthenticated) {
            axios.get("http://localhost:3001/reviews").then((x) => {
              let myreviews = x.data.filter((x) => x.provider.email === user.email);

              if(myreviews.length) {
                setReviews(myreviews)
                myreviews= myreviews.map(x=> x.review) 
                let numberEvaluations = myreviews.length
                myreviews = myreviews.reduce((x,y)=>x+y, 0)
                setStars(myreviews/numberEvaluations)
                }
            })}
    },[isAuthenticated])
    return(
        <div>
        <NavBar />
      <div className={style.container}>
        <Container>
          <div className={style.centerFlex}>
            <h2 style={{display:'inline'}}>Mi calificación general:  </h2>
            <div style={{display:'inline'}}>
                    <p className={style.star}>{stars>=1?'★':'☆'}</p>
                    <p className={style.star}>{stars>=2?'★':'☆'}</p>
                    <p className={style.star}>{stars>=3?'★':'☆'}</p>
                    <p className={style.star}>{stars>=4?'★':'☆'}</p>
                    <p className={style.star}>{stars===5?'★':'☆'}</p>
            </div>
            <h3 style={{display:'inline'}}> ({stars})</h3>
            <br/>
            <br/>
        <div style={{marginBottom:30}}>
        {reviews && reviews.length?
        reviews.map((x,y)=>{
            return(
                <div key={y}>
                    <hr/>  
                    <div>
                    <p className={style.star}>{x.review>=1?'★':'☆'}</p>
                    <p className={style.star}>{x.review>=2?'★':'☆'}</p>
                    <p className={style.star}>{x.review>=3?'★':'☆'}</p>
                    <p className={style.star}>{x.review>=4?'★':'☆'}</p>
                    <p className={style.star}>{x.review===5?'★':'☆'}</p>
                    </div>
                    <h4 style={{display:'inline'}}>{x.owner.name} {x.owner.lastName}:</h4>
                    <p style={{display:"inline", color:'blue'}}> {x.message}</p>
                </div>
            )
        }):null}
        </div>
        </div>
        </Container>
      </div>
      <Footer />
    </div>
    )
}


export default Ratings