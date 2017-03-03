import React, {Component} from 'react';

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
        part: this.props.params.id
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
        <form id="submitDescription" onSubmit={this.onSubmit}>
          <label>
            Title:
            <input type="text" placeholder="Title" name="title"
              onChange={(e) => this.setState({title: e.target.value})} value={this.state.title}/>
          </label><br />
          <label>
            Description of PAIN!!:
            <input type="text"
              placeholder="Where does it hurt?" wrap="soft" maxLength="140" name="description"
              onChange={(e) => this.setState({description: e.target.value})} value={this.state.description} />
          </label><br />
            <input type="submit" value="Submit" />
        </form>
        <form id="back" action="/">
          <input type="submit" value="Back" />
        </form>
        <form className="rating" name="rating"
          onChange={(e) => this.setState({rating: e.target.value})} value={this.state.rating} >
          <label>
            Please select a rating from 1 - 5<br />
            <input type="radio" id="star5" name="rating" value="5" /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
          </label>
        </form>
      </div>
    )
  }
}

export default Tracker;
