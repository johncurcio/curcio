import React from 'react';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: "en"
		};
		this.changeLanguage = this.changeLanguage.bind(this);
	}

	changeLanguage(lang){
		this.props.changeLanguage(lang);
		this.setState({ active: lang });
	}

	render(){
		return (
			<section className="flex flex-wrap">
				
				<div className="fl w-60-ns w-100 pa4">
					<a className="link" href="#">
					<span className="audrey black f1">
						CURCIO
					</span>
					<span className= "brela blue f5"> 
						.dev 
					</span>
					</a>
				</div>

				<div className="fl w-40-ns w-100 pv4-l pv4-m tc">
					<div className="fl w-40 pv2-ns"> + 55 21 96827 0731 </div>  
					<div className="fl w-40 pv2-ns"> 
						<a href="https://github.com/johncurcio/" className="link black hover-moon-gray">github</a> /  
						<a href="https://linkedin.com/in/joaocurcio/" className="link black hover-moon-gray"> linkedin</a> 
					</div>
					<div className="fl w-20 pv2-ns"> 
						<button className={"link black dim abutton mr2 " + (this.state.active === "pt" ? 'activeBtn' : '')}
							onClick={() => this.changeLanguage("pt")}>PT</button>   
						<button className={"link black dim abutton " + (this.state.active === "en" ? 'activeBtn' : '')}
							onClick={() => this.changeLanguage("en")}>EN</button> 
					</div>
				</div>

			</section>
		);
	}
}

export default Header;