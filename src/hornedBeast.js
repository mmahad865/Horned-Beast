import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      discription: props.discription,
      liked: 0,
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
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.src} onClick={this.handleClick}/>
      <Card.Body>
        <Card.Title>{this.props.Title}</Card.Title>
        <Card.Text className="fst-italic">{this.state.discription} </Card.Text>
        <Button variant="primary">❤️ here</Button>
      </Card.Body>
    </Card>
    </>
  );
}
}


export default HornedBeast;
