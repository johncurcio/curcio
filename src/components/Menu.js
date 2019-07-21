import React from 'react';

class Menu extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "flex flex-column">
				<nav className="adam f-6-l f-5-m f-1 pl6-l pl4-m pl4">
					<span className="fl w-50 pa2 pl4">
						<a href="" className="ttu link b black hover-my-blue">me</a>
					</span>
					<span className="fl w-50 pa2 pl4">
						<a href="" className="ttu link b black hover-my-pink">projects</a>
					</span>
					<span className="fl w-50 pa2 pl4">
						<a href="" className="ttu link b black hover-light-blue">contacts</a>
					</span>
				</nav>
			</div>
		);
	}
}

export default Menu;