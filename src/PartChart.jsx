import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Row, Col} from 'react-materialize';

class PartChart extends Component {

  Data = {
    datasets: [{
      data: this.props.Data,
      backgroundColor: ['#cccc00', '#cc9900', '#ff9900','#cc6600', '#ff3300', '#ff0000', '#cc0000', '#cc0066', '#cc6699', '#cc3399', '#cc0099', '#cc00cc'],
      hoverBackgroundColor: ['#cccc00', '#cc9900', '#ff9900','#cc6600', '#ff3300', '#ff0000', '#cc0000', '#cc0066', '#cc6699', '#cc3399', '#cc0099', '#cc00cc'],
      label: 'Body Part Pain'
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  render() {
    return (
        <Row>
          <br></br><br></br>
           <Col offset="m1">
              <h5 className="center">Monthly Occurances of Pain</h5>
              <Doughnut
                data={this.Data}
                width={500}
                height={375}
                options={{
                  mainAspectRatio: false
                }}
                redraw
              />
          </Col>
        </Row>
    )
  }
}

export default PartChart;