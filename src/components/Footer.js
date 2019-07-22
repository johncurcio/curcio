import React from 'react';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="fixed tc w-100 left-0 right-0 bottom-0 h2">
        <span className="audrey">{this.props.content}</span>
      </div>
		);
	}
}

export default Footer;