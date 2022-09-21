import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      discription: props.discription,
      src: props.src,
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
      <Card.Img variant="top" src={this.state.src} />
      <Card.Body>
        <Card.Title>{this.props.Title}</Card.Title>
        <Card.Text className="fst-italic">{this.state.discription} </Card.Text>
        <Button variant="primary" onClick={this.handleClick}>❤️ here</Button>
      </Card.Body>
    </Card>
    </>
  );
}
}


export default HornedBeast;
