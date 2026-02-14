import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img 
        			src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" 
        			alt="starWars" 
        			style={{ width: "80px", filter: "brightness(0)" }} 
        			className="img-fluid"
    />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};