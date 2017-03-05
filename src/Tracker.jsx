import React, {Component} from 'react';
import {Row, Col, Input, Button, Breadcrumb, MenuItem} from "react-materialize";
import { Link } from "react-router";
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
    console.log(this.props)

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
      console.log(body);
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

          {
            Object.keys(obj['body']['head']['parts']).map((val, index) => {
            if (obj['body']['head']['parts'][val].id === this.props.params.id)
              return <img
                src={obj['body']['head']['parts'][val].img_path}
                role="presentation"
                height="100px"
                width="100px"
                style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}}/>
            })
          }
          {
            Object.keys(obj['body']['torso']['parts']).map((val, index) => {
            if (obj['body']['torso']['parts'][val].id === this.props.params.id)
              return <img
                src={obj['body']['torso']['parts'][val].img_path}
                role="presentation"
                height="100px"
                width="100px"
                style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}}/>
            })
          }
          {
            Object.keys(obj['body']['arms']['parts']).map((val, index) => {
            if (obj['body']['arms']['parts'][val].id === this.props.params.id)
              return <img
                src={obj['body']['arms']['parts'][val].img_path}
                role="presentation"
                height="100px"
                width="100px"
                style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}}/>
            })
          }
          {
            Object.keys(obj['body']['legs']['parts']).map((val, index) => {
            if (obj['body']['legs']['parts'][val].id === this.props.params.id)
              return <img
                src={obj['body']['legs']['parts'][val].img_path}
                role="presentation"
                height="100px"
                width="100px"
                style={{"border": "2px solid black", "borderRadius": "50px", "position": "relative", "top": "280px"}}/>
            })
          }

          <form id="submitDescription" onSubmit={this.onSubmit}>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Title" type="text" placeholder="Title" name="title"
                onChange={(e) => this.setState({title: e.target.value})} value={this.state.title}/>
              </Col>
            </Row>
            <Row>
              <Col m={10} offset="m3">
                <Input m={6} label="Description" type="textarea"
                  placeholder="Describe your pain" wrap="soft" maxLength="140" name="description"
                  onChange={(e) => this.setState({description: e.target.value})} value={this.state.description} />
              </Col>
            </Row>
          </form>
          <form className="rating" name="rating"
            onChange={(e) => this.setState({rating: e.target.value})} value={this.state.rating} >
            <Row>
              <Col m={10} offset="m3">
                Please select a rating from 1 - 5
              </Col>
              <Col m={10} offset="m3">
                <Input name="rating" type="radio" value="1" label="1" className="with-gap" htmlFor="star1" title="Sucks big time - 1 star"/>
                <Input name="rating" type="radio" value="2" label="2" className="with-gap" htmlFor="star2" title="Kinda bad - 2 stars"/>
                <Input name="rating" type="radio" value="3" label="3" className="with-gap" htmlFor="star3" title="Meh - 3 stars"/>
                <Input name="rating" type="radio" value="4" label="4" className="with-gap" htmlFor="star4" title="Pretty good - 4 stars"/>
                <Input name="rating" type="radio" value="5" label="5" className="with-gap" htmlFor="star5" title="Awesome - 5 stars"/>
              </Col>
            </Row>
            <Col m={10} offset="m3">
              <Button waves="light" type="submit" value="Submit">Submit</Button>
            </Col>
          </form>
        </Row>
      </div>
    )
  }
}

export default Tracker;
