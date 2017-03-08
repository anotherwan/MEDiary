import React, {Component} from 'react';
import Graph from './Graph.jsx'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painItems: [],
      headData: []
    }
  }

  BodyPart = ''

  HeadData = []
  JanHead = 0
  FebHead = 0
  MarHead = 0
  AprHead = 0
  MayHead = 0
  JunHead = 0
  JulHead = 0
  AugHead = 0
  SepHead = 0
  OctHead = 0
  NovHead = 0
  DecHead = 0

  componentDidMount() {

    fetch('http://localhost:4000/dashboard', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: localStorage.getItem('uid')
      })
    }).then((response) => {
      return response.json();
    }).then((body) => {
      this.setState({
        painItems: body.data
      })
    })
  }

  formatDate = (date) => {
    return (date.slice(0, 10));
  }

  render() {

    return (
      <div>
        <span style={{"display": "none"}}>{
          Object.keys(this.state.painItems.map((obj, index) => {

            if (obj.body_part_id.slice(0, 1) === "1") {

              if (obj.date_created.slice(5, 7) === "01") {
                this.JanHead += 1
              } else if (obj.date_created.slice(5, 7) === "02") {
                this.FebHead += 1
              } else if (obj.date_created.slice(5, 7) === "03") {
                  this.MarHead += 1
              } else if (obj.date_created.slice(5, 7) === "04") {
                  this.AprHead += 1
              } else if (obj.date_created.slice(5, 7) === "05") {
                  this.MayHead += 1
              } else if (obj.date_created.slice(5, 7) === "06") {
                  this.JunHead += 1
              } else if (obj.date_created.slice(5, 7) === "07") {
                  this.JulHead += 1
              } else if (obj.date_created.slice(5, 7) === "08") {
                  this.AugHead += 1
              } else if (obj.date_created.slice(5, 7) === "09") {
                  this.SepHead += 1
              } else if (obj.date_created.slice(5, 7) === "10") {
                  this.OctHead += 1
              } else if (obj.date_created.slice(5, 7) === "11") {
                  this.NovHead += 1
              } else if (obj.date_created.slice(5, 7) === "12") {
                  this.DecHead += 1
              }

              this.HeadData.splice(0, 1, this.JanHead)
              this.HeadData.splice(1, 1, this.FebHead)
              this.HeadData.splice(2, 1, this.MarHead)
              this.HeadData.splice(3, 1, this.AprHead)
              this.HeadData.splice(4, 1, this.MayHead)
              this.HeadData.splice(5, 1, this.JunHead)
              this.HeadData.splice(6, 1, this.JulHead)
              this.HeadData.splice(7, 1, this.AugHead)
              this.HeadData.splice(8, 1, this.SepHead)
              this.HeadData.splice(9, 1, this.OctHead)
              this.HeadData.splice(10, 1, this.NovHead)
              this.HeadData.splice(11, 1, this.DecHead)
            }

          }))
        }</span>
        <Graph
          headData={this.HeadData}
        />
        {/* <div style={{"position": "absolute", "top": "130px"}}>
          Name: {this.state.user}<br />
          {this.state.painItems.map((obj, index) => {
            return (
              <span key={index}>
                <span>Title: {obj.title}<br /></span>
                <span>Body Part: {
                                    Object.keys(Body['body']).map((region, i) => {
                                      const regId = obj.body_part_id.slice(0, 1);
                                      const partId = obj.body_part_id;
                                      if (Body['body'][region]['id'] === regId) {
                                        Object.keys(Body['body'][region]['parts']).map((part, i) =>{
                                          if (Body['body'][region]['parts'][part]['id'] === partId) {
                                            this.BodyPart = part
                                          }
                                            return null;
                                        })
                                      }
                                      return null;
                                    })
                                 }
                                 {this.BodyPart}<br /></span>
                <span>Description: {obj.description}<br /></span>
                <span>Pain Rating: {obj.pain_rating}<br /></span>
                <span>Date Logged: {this.formatDate(obj.date_created)}<br /></span>
                <br/>
              </span>
            )
          })}
        </div> */}
      </div>
    )
  }
}

export default Dashboard;
