import React, {Component} from 'react';
import {Row, Col, Input, Button, Card } from "react-materialize";
import './BodyParts.jsx';
import obj from '../obj.json';

 class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      rating: ''
    }
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/tracker', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        rating: this.state.rating,
        part: this.props.params.id,
        user: localStorage.getItem('uid')
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      this.props.router.push('/');
    })
  }

  render () {
    return (
      <div name="tracker">
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <Col m={10} offset="m1" className="red lighten-2">
            <h5 className="white-text">Tracker</h5>
          </Col>
        </Row>
        <Row>
          <Col m={8} offset="m2">
            <Card className="blue-grey lighten-5">
              <Col m={1}>
              {
                Object.keys(obj['body']['head']['parts']).map((val, index) => {
                if (obj['body']['head']['parts'][val].id === this.props.params.id)
                  return <img
                    key={index}
                    src={obj['body']['head']['parts'][val].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    style={{"border": "2px solid #e36352", "backgroundColor": "#F7F7F7", "borderRadius": "50px", "top": "280px"}}/>
                return null;
                })
              }
              {
                Object.keys(obj['body']['torso']['parts']).map((val, index) => {
                if (obj['body']['torso']['parts'][val].id === this.props.params.id)
                  return <img
                    key={index}
                    src={obj['body']['torso']['parts'][val].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    style={{"border": "2px solid #e36352", "backgroundColor": "#F7F7F7", "borderRadius": "50px", "top": "280px"}}/>
                return null;
                })
              }
              {
                Object.keys(obj['body']['arms']['parts']).map((val, index) => {
                if (obj['body']['arms']['parts'][val].id === this.props.params.id)
                  return <img
                    key={index}
                    src={obj['body']['arms']['parts'][val].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    style={{"border": "2px solid #e36352", "backgroundColor": "#F7F7F7", "borderRadius": "50px", "top": "280px"}}/>
                return null;
                })
              }
              {
                Object.keys(obj['body']['legs']['parts']).map((val, index) => {
                if (obj['body']['legs']['parts'][val].id === this.props.params.id)
                  return <img
                    key={index}
                    src={obj['body']['legs']['parts'][val].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    style={{"border": "2px solid #e36352", "backgroundColor": "#F7F7F7", "borderRadius": "50px", "top": "280px"}}/>
                return null;
                })
              }
              </Col>
                <form id="submitDescription" onSubmit={this.onSubmit}>
                  <Col m={8} offset="m1">
                    <Input m={12} label="Title" type="text" name="title" onChange={(e) => this.setState({title: e.target.value})} value={this.state.title}/>
                  </Col>
                  <Col m={8} offset="m1">
                    <Input m={12} label="Description" type="textarea" wrap="soft" maxLength="140" name="description" onChange={(e) =>  this.setState({description: e.target.value})} value={this.state.description}/>
                  </Col>
                  <Row>
                    <Col m={4} offset="m4">
                      <h6> Please select a pain rating from 1 to 5: </h6>
                    </Col>
                  </Row>
                </form>
              <Row>
                <Col m={10} offset="m2">
                  <form className="rating" name="rating" onChange={(e) => this.setState({rating: e.target.value})} value={this.state.rating} >
                    <Input name="rating" type="radio" value="1" label="1 - Minimal Pain" className="with-gap"  title="1 - Minimal Pain"/>
                    <Input name="rating" type="radio" value="2" label="2 - Mild Pain" className="with-gap" title="2 - Mild Pain"/>
                    <Input name="rating" type="radio" value="3" label="3 - Moderate Pain" className="with-gap" title="3 - Moderate Pain"/>
                    <Input name="rating" type="radio" value="4" label="4 - Severe Pain" className="with-gap" title="4 - Severe Pain"/>
                    <Input name="rating" type="radio" value="5" label="5 - Extreme Pain" className="with-gap"  title="5 - Extreme Pain"/>
                  </form>
                </Col>
              </Row>
              <form id="submitDescription" onSubmit={this.onSubmit}>
                <Row>
                  <Col m={4} offset="m5">
                    <Button waves="light" type="submit" value="Submit" className="red lighten-2">Submit</Button>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tracker;
