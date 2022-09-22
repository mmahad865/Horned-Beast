import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import SelectedBeast from "./selectedBeast";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Description: this.props.description,
      Title: this.props.title,
      liked: 0,
      Src: this.props.src,
      Alt: this.props.alt,
      
     
    };
  }

  handleClick =() =>{
    this.setState({
      liked: this.state.liked + 1,
      discription: this.props.discription + "😍:" +(this.state.liked+1),
    });
  }

  render() {
    return (
      <Card style={{ margin: "0 auto", width: "70%", height: "100%" }}>
        <Card.Img
          variant="top"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
          </div>
          <p> ❤ : {this.state.liked}</p>
          <Button variant="primary" onClick={this.handleClick}>❤️ here</Button>

          <SelectedBeast
            src={this.state.Src}
            alt={this.state.Alt}
            title={this.state.Title}
            description={this.state.Description}
            liked={this.state.liked}
            handleClick={this.handleClick}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
