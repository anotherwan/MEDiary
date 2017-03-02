import React, {Component} from 'react';

 class Tracker extends Component {

  render () {
    return (
      <div name="tracker">
        <form id="submitDescription">
          <label>
            Title:
            <input type="text" placeholder="Title" name="title"/>
          </label><br />
          <label>
            Description of PAIN!!:
            <input type="text"
              placeholder="Where does it hurt?" wrap="soft" maxLength="140" name="description"/>
          </label><br />
            <input type="submit" value="Submit" />
        </form>
        <form id="back" action="/">
          <input type="submit" value="Back" />
        </form>
        <form className="rating" name="rating">
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
