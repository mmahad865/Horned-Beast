import React from "react";


    
    class HornedBeast extends React.Component {
        render() {
            return (
                <div>
                    <h3>{this.props.title}</h3>
                    <img title={this.props.title} src={this.props.src} alt={this.props.alt}/>
                    <p>{this.props.description}</p>
                   
                </div>
            );
        }
    }
    
    export default HornedBeast;
