import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Row, Col, Card} from "react-materialize";

class Graph extends Component {


  myData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Head Pains',
          fill: true,
          lineTension: 0.01,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: this.props.headData
        },
        {
          label: 'Torso Pains',
          fill: true,
          lineTension: 0.01,
          backgroundColor: 'rgba(207, 92, 76, 0.4)',
          borderColor: 'rgba(208, 60, 42, 0.67)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(208, 60, 42, 0.67)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(208, 60, 42, 0.67)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: this.props.torsoData
        },
        {
          label: 'Arm Pains',
          fill: true,
          lineTension: 0.01,
          backgroundColor: 'rgba(255, 197, 51, 0.55)',
          borderColor: 'rgba(255, 197, 51, 0.81)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 197, 51, 0.81)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 197, 51, 0.81)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: this.props.armsData
        },
        {
          label: 'Leg Pains',
          fill: true,
          lineTension: 0.01,
          backgroundColor: 'rgba(110, 189, 242, 0.64)',
          borderColor: 'rgba(5, 155, 255, 0.64)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(5, 155, 255, 0.64)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(5, 155, 255, 0.64)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 8,
          pointHitRadius: 10,
          data: this.props.legsData
        }

      ]
  }
  render() {
    return (
        <Row>
          <br></br><br></br><br></br><br></br><br></br><br></br>
           <Col offset="m1">
            <Card className="blue-grey lighten-5" title='Dashboard'>
              <p>Monthly Number of Pain Occurances by Body Regions</p>
              <Line
                data={this.myData}
                width={500}
                height={300}
                options={{
                  mainAspectRatio: false
                }}
                redraw
              />
            </Card>
          </Col>
        </Row>
    )
  }

}
export default Graph;
