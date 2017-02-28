import React, {Component} from 'react';
import './App.css';


class Tracker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      body_part_id: '',
      pain_rating: '',
      description: '',
      date_created: ''
    }
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/tracker', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: this.state.user_id, //req.session.user_id,
        body_part_id: this.state.body_part_id, //req.params.id?,
        pain_rating: this.state.pain_rating, //e.target.value
        description: this.state.description, //e.target.value
        date_created: this.state.date_created
      })
    })
  }

  render () {
    return (
      <div className="tracker">
        <form id="submitDescription">
          <label>
            Title:
            <input type="text" onChange={(e) => this.setState({body_part_id: e.target.value})} value={this.state.body_part_id} />
          </label><br />
          <label>
            Description of PAIN!!:
            <input type="text"
              placeholder="Where does it hurt?" wrap="soft" maxlength="140"/>
          </label><br />
            <input type="submit" value="Submit" />
        </form>
        <form id="back" action="/">
          <input type="submit" value="Back" />
        </form>
        <form class="rating">
          <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
          <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
          <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
          <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
          <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
          <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
          <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
          <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
          <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
          <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
        </form>
      </div>
    )
  }
}

export default Tracker;