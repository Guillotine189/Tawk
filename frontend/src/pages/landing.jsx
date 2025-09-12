import React from "react"
import "../App.css"
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
	const navigate = useNavigate();

	return(
		<div className="LandingPageContainer">

			<nav>

				<div className="navHeader">
					<h2>TAWK</h2>
				</div>

				<div className="navList">
					<button onClick={() => navigate('/guest')}>Join as Guest</button>
					<button onClick={() => navigate('/register')}>Register</button>
					<button onClick={() => navigate('/login')}>Login</button>
				</div>

			</nav>


			<div className="LandingPageMainContainer">

				<div>
					<h1><span style={{color: "#ff9839"}}>Connect </span> with your loved ones</h1>
					<p>Covered by TAWK</p>
					<button onClick={() => navigate('/register')}>
						Get started
					</button>
				</div>
				<div>
					<img src="/mobile.png" alt=""></img>
				</div>

			</div>


		</div>
	)
}