import React from 'react';

//https://stackoverflow.com/questions/41131450/active-link-with-react-router
class Menu extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "flex flex-column">
				<nav className="adam f-6-l f-5-m f-1 pl6-l pl4-m pl2">
					{
						this.props.links.map((link, i) => 
							<span key={i} className="fl w-50 pa2 pl4">
								<a href={link.href} className={"ttu link b black " + link.color}>{link.text}</a>
							</span>
						)
					}
				</nav>
			</div>
		);
	}
}

export default Menu;