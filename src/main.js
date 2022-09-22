import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./assets/data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
    };
  }
 handleSearch = (e) => {
    e.preventDefault();

    const filteredBeasts = data.filter((beast) => {
      if (Number(this.state.search) === 0) return data;
      else return beast.horns === Number(this.state.search);
    });

    this.setState({beasts: filteredBeasts,});
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };


  render() {
    return (
      <>
      <Form onSubmit={this.handleSearch}>
          <Form.Group style={{ width: "50%"}}>
            <Form.Label htmlFor="selectSearch">Search By How much horns</Form.Label>
            <Form.Select id="selectSearch" onChange={this.handleChange}>
              <option value="0">Default</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>

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