import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import Moment from 'react-moment';
import moment from 'moment';

class Graph extends Component {
  myData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // datasets: [
      //   {
      //     label: 'Head Pains',
      //     fill: true,
      //     lineTension: 0.01,
      //     backgroundColor: 'rgba(75,192,192,0.4)',
      //     borderColor: 'rgba(75,192,192,1)',
      //     borderCapStyle: 'butt',
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     borderJoinStyle: 'miter',
      //     pointBorderColor: 'rgba(75,192,192,1)',
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 1,
      //     pointHoverRadius: 5,
      //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //     pointHoverBorderColor: 'rgba(220,220,220,1)',
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 10,
      //     pointHitRadius: 10,
      //     data: [65, 59, 80, 81, 56, 55, 40, 25, 34, 51, 12, 9]
      //   }
      // ],
      datasets: [
        {
          label: 'Torso Pains',
          fill: false,
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
          pointRadius: 10,
          pointHitRadius: 10,
          data: [68, 40, 20, 35, 21, 63, 24, 54, 12, 56, 86, 24]
        }
      ]
  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Line
          data={this.myData}
          width="500px"
          height="300px"
          options={{
            mainAspectRatio: false
          }}
        />
      </div>
    )
  }

}
export default Graph;
