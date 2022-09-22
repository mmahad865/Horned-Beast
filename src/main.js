import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./assets/data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
    };
  }
 

  render() {
    return (
      <>
 

        <Row xs={2} md={4} className="justify-content-md-center">
          {this.state.beasts.map((beast) => (
            <Col>
              <HornedBeast
                src={beast.image_url}
                alt={beast.title}
                title={beast.title}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Main;