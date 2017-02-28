import React, {Component} from 'react';


class Tracker extends Component {

  render () {
    return (
      <div className="tracker">
        <form id="submitDescription">
          <label>
            Title:
            <input type="text" placeholder="Title" />
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
      </div>
    )
  }
}

export default Tracker;