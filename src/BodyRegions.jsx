import React, {Component} from 'react';
import BodyParts from './BodyParts.jsx';
import obj from '../obj.json';
import '../public/styles/BodyRegion.css';
import PartChart from './PartChart.jsx';


class BodyRegions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painItems: []
    }
  }

  WIDTH = 640
  HEIGHT = 640
  RADIUS = 200
  RegionX = 280
  RegionY = 280
  Rotation = 0

  calculateXPosition = (i, N) => {
    return 0.5 * this.WIDTH + this.RADIUS * Math.cos(i * 2 * Math.PI / N) - 40;
  }

  calculateYPosition = (i, N) => {
    return 0.5 * this.WIDTH - this.RADIUS * Math.sin(i * 2 * Math.PI / N) - 40;
  }

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

  TorsoData = []
  JanTorso = 0
  FebTorso = 0
  MarTorso = 0
  AprTorso = 0
  MayTorso = 0
  JunTorso = 0
  JulTorso = 0
  AugTorso = 0
  SepTorso = 0
  OctTorso = 0
  NovTorso = 0
  DecTorso = 0

  ArmsData = []
  JanArms = 0
  FebArms = 0
  MarArms = 0
  AprArms = 0
  MayArms = 0
  JunArms = 0
  JulArms = 0
  AugArms = 0
  SepArms = 0
  OctArms = 0
  NovArms = 0
  DecArms = 0

  LegsData = []
  JanLegs = 0
  FebLegs = 0
  MarLegs = 0
  AprLegs = 0
  MayLegs = 0
  JunLegs = 0
  JulLegs = 0
  AugLegs = 0
  SepLegs = 0
  OctLegs = 0
  NovLegs = 0
  DecLegs = 0

  componentDidMount() {

    const user = localStorage.getItem('uid');

    fetch('http://localhost:4000/dashboard/' + user, {
      method: 'get',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
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

  render () {
    if(localStorage.getItem('uid'))
      switch(this.props.location.pathname) {
        case "/region/head":
          return (
            <div>
              <span style={{"display": "none"}}>
                {
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

                    } else if (obj.body_part_id.slice(0, 1) === "2") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecTorso += 1
                        }

                        this.TorsoData.splice(0, 1, this.JanTorso)
                        this.TorsoData.splice(1, 1, this.FebTorso)
                        this.TorsoData.splice(2, 1, this.MarTorso)
                        this.TorsoData.splice(3, 1, this.AprTorso)
                        this.TorsoData.splice(4, 1, this.MayTorso)
                        this.TorsoData.splice(5, 1, this.JunTorso)
                        this.TorsoData.splice(6, 1, this.JulTorso)
                        this.TorsoData.splice(7, 1, this.AugTorso)
                        this.TorsoData.splice(8, 1, this.SepTorso)
                        this.TorsoData.splice(9, 1, this.OctTorso)
                        this.TorsoData.splice(10, 1, this.NovTorso)
                        this.TorsoData.splice(11, 1, this.DecTorso)
                    } else if (obj.body_part_id.slice(0, 1) === "3") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanArms += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebArms += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarArms += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprArms += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayArms += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunArms += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulArms += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugArms += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepArms += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctArms += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovArms += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecArms += 1
                        }

                        this.ArmsData.splice(0, 1, this.JanArms)
                        this.ArmsData.splice(1, 1, this.FebArms)
                        this.ArmsData.splice(2, 1, this.MarArms)
                        this.ArmsData.splice(3, 1, this.AprArms)
                        this.ArmsData.splice(4, 1, this.MayArms)
                        this.ArmsData.splice(5, 1, this.JunArms)
                        this.ArmsData.splice(6, 1, this.JulArms)
                        this.ArmsData.splice(7, 1, this.AugArms)
                        this.ArmsData.splice(8, 1, this.SepArms)
                        this.ArmsData.splice(9, 1, this.OctArms)
                        this.ArmsData.splice(10, 1, this.NovArms)
                        this.ArmsData.splice(11, 1, this.DecArms)
                    } else if (obj.body_part_id.slice(0, 1) === "4") {

                        if (obj.date_created.slice(5, 7) === "01") {
                        this.JanLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "02") {
                        this.FebLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "03") {
                          this.MarLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "04") {
                          this.AprLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "05") {
                          this.MayLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "06") {
                          this.JunLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "07") {
                          this.JulLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "08") {
                          this.AugLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "09") {
                          this.SepLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "10") {
                          this.OctLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "11") {
                          this.NovLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "12") {
                          this.DecLegs += 1
                      }

                      this.LegsData.splice(0, 1, this.JanLegs)
                      this.LegsData.splice(1, 1, this.FebLegs)
                      this.LegsData.splice(2, 1, this.MarLegs)
                      this.LegsData.splice(3, 1, this.AprLegs)
                      this.LegsData.splice(4, 1, this.MayLegs)
                      this.LegsData.splice(5, 1, this.JunLegs)
                      this.LegsData.splice(6, 1, this.JulLegs)
                      this.LegsData.splice(7, 1, this.AugLegs)
                      this.LegsData.splice(8, 1, this.SepLegs)
                      this.LegsData.splice(9, 1, this.OctLegs)
                      this.LegsData.splice(10, 1, this.NovLegs)
                      this.LegsData.splice(11, 1, this.DecLegs)
                    }
                    return null;
                  }))
                }
              </span>
              <div className="chart">
                <PartChart Data={this.HeadData}/>
              </div>
              <div className="head">
              {
                Object.keys(obj['body']).map((region, i) => {
                  return <BodyParts
                    key={i}
                    isClickable={false}
                    svgSrc={obj['body']['head'].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    xPosition={this.RegionX}
                    yPosition={this.RegionY} />
                })}

              {
                Object.keys(obj['body']['head']['parts']).map((part, i, arr) => {
                  const parts = arr.length;
                  const deg = 360/parts;
                  const start = deg + 90;

                  this.Rotation = start - (deg * (i + 1))

                  return <BodyParts
                    key={i}
                    rotation={this.Rotation}
                    isClickable={true}
                    part={obj['body']['head']['parts'][part].id}
                    onClick={this.onClick}
                    svgSrc={obj['body']['head']['parts'][part].img_path}
                    xPosition={this.calculateXPosition(i, arr.length)}
                    yPosition={this.calculateYPosition(i, arr.length)} />
                })
              }
              </div>
            </div>
          )
        case "/region/torso":
          return (
            <div>
              <span style={{"display": "none"}}>
                  {
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

                      } else if (obj.body_part_id.slice(0, 1) === "2") {

                          if (obj.date_created.slice(5, 7) === "01") {
                            this.JanTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "02") {
                            this.FebTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "03") {
                              this.MarTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "04") {
                              this.AprTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "05") {
                              this.MayTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "06") {
                              this.JunTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "07") {
                              this.JulTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "08") {
                              this.AugTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "09") {
                              this.SepTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "10") {
                              this.OctTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "11") {
                              this.NovTorso += 1
                          } else if (obj.date_created.slice(5, 7) === "12") {
                              this.DecTorso += 1
                          }

                          this.TorsoData.splice(0, 1, this.JanTorso)
                          this.TorsoData.splice(1, 1, this.FebTorso)
                          this.TorsoData.splice(2, 1, this.MarTorso)
                          this.TorsoData.splice(3, 1, this.AprTorso)
                          this.TorsoData.splice(4, 1, this.MayTorso)
                          this.TorsoData.splice(5, 1, this.JunTorso)
                          this.TorsoData.splice(6, 1, this.JulTorso)
                          this.TorsoData.splice(7, 1, this.AugTorso)
                          this.TorsoData.splice(8, 1, this.SepTorso)
                          this.TorsoData.splice(9, 1, this.OctTorso)
                          this.TorsoData.splice(10, 1, this.NovTorso)
                          this.TorsoData.splice(11, 1, this.DecTorso)
                      } else if (obj.body_part_id.slice(0, 1) === "3") {

                          if (obj.date_created.slice(5, 7) === "01") {
                            this.JanArms += 1
                          } else if (obj.date_created.slice(5, 7) === "02") {
                            this.FebArms += 1
                          } else if (obj.date_created.slice(5, 7) === "03") {
                              this.MarArms += 1
                          } else if (obj.date_created.slice(5, 7) === "04") {
                              this.AprArms += 1
                          } else if (obj.date_created.slice(5, 7) === "05") {
                              this.MayArms += 1
                          } else if (obj.date_created.slice(5, 7) === "06") {
                              this.JunArms += 1
                          } else if (obj.date_created.slice(5, 7) === "07") {
                              this.JulArms += 1
                          } else if (obj.date_created.slice(5, 7) === "08") {
                              this.AugArms += 1
                          } else if (obj.date_created.slice(5, 7) === "09") {
                              this.SepArms += 1
                          } else if (obj.date_created.slice(5, 7) === "10") {
                              this.OctArms += 1
                          } else if (obj.date_created.slice(5, 7) === "11") {
                              this.NovArms += 1
                          } else if (obj.date_created.slice(5, 7) === "12") {
                              this.DecArms += 1
                          }

                          this.ArmsData.splice(0, 1, this.JanArms)
                          this.ArmsData.splice(1, 1, this.FebArms)
                          this.ArmsData.splice(2, 1, this.MarArms)
                          this.ArmsData.splice(3, 1, this.AprArms)
                          this.ArmsData.splice(4, 1, this.MayArms)
                          this.ArmsData.splice(5, 1, this.JunArms)
                          this.ArmsData.splice(6, 1, this.JulArms)
                          this.ArmsData.splice(7, 1, this.AugArms)
                          this.ArmsData.splice(8, 1, this.SepArms)
                          this.ArmsData.splice(9, 1, this.OctArms)
                          this.ArmsData.splice(10, 1, this.NovArms)
                          this.ArmsData.splice(11, 1, this.DecArms)
                      } else if (obj.body_part_id.slice(0, 1) === "4") {

                          if (obj.date_created.slice(5, 7) === "01") {
                          this.JanLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovLegs += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecLegs += 1
                        }

                        this.LegsData.splice(0, 1, this.JanLegs)
                        this.LegsData.splice(1, 1, this.FebLegs)
                        this.LegsData.splice(2, 1, this.MarLegs)
                        this.LegsData.splice(3, 1, this.AprLegs)
                        this.LegsData.splice(4, 1, this.MayLegs)
                        this.LegsData.splice(5, 1, this.JunLegs)
                        this.LegsData.splice(6, 1, this.JulLegs)
                        this.LegsData.splice(7, 1, this.AugLegs)
                        this.LegsData.splice(8, 1, this.SepLegs)
                        this.LegsData.splice(9, 1, this.OctLegs)
                        this.LegsData.splice(10, 1, this.NovLegs)
                        this.LegsData.splice(11, 1, this.DecLegs)
                      }
                      return null;
                    }))
                  }
                </span>
                <div className="chart">
                  <PartChart Data={this.TorsoData}/>
                </div>
              <div className="torso">
              {
                Object.keys(obj['body']).map((region, i, arr) => {

                  return <BodyParts
                    key={i}
                    isClickable={false}
                    svgSrc={obj['body']['torso'].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    xPosition={this.RegionX}
                    yPosition={this.RegionY} />
              })}

              {
                Object.keys(obj['body']['torso']['parts']).map((part, i, arr) => {
                  const parts = arr.length;
                  const deg = 360/parts;
                  const start = deg + 90;

                  this.Rotation = start - (deg * (i + 1))

                  return <BodyParts
                    key={i}
                    rotation={this.Rotation}
                    isClickable={true}
                    part={obj['body']['torso']['parts'][part].id}
                    onClick={this.onClick}
                    svgSrc={obj['body']['torso']['parts'][part].img_path}
                    xPosition={this.calculateXPosition(i, arr.length)}
                    yPosition={this.calculateYPosition(i, arr.length)} />
                })}
              </div>
            </div>
            )
        case "/region/legs":
          return (
            <div>
              <span style={{"display": "none"}}>
                {
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

                    } else if (obj.body_part_id.slice(0, 1) === "2") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecTorso += 1
                        }

                        this.TorsoData.splice(0, 1, this.JanTorso)
                        this.TorsoData.splice(1, 1, this.FebTorso)
                        this.TorsoData.splice(2, 1, this.MarTorso)
                        this.TorsoData.splice(3, 1, this.AprTorso)
                        this.TorsoData.splice(4, 1, this.MayTorso)
                        this.TorsoData.splice(5, 1, this.JunTorso)
                        this.TorsoData.splice(6, 1, this.JulTorso)
                        this.TorsoData.splice(7, 1, this.AugTorso)
                        this.TorsoData.splice(8, 1, this.SepTorso)
                        this.TorsoData.splice(9, 1, this.OctTorso)
                        this.TorsoData.splice(10, 1, this.NovTorso)
                        this.TorsoData.splice(11, 1, this.DecTorso)
                    } else if (obj.body_part_id.slice(0, 1) === "3") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanArms += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebArms += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarArms += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprArms += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayArms += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunArms += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulArms += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugArms += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepArms += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctArms += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovArms += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecArms += 1
                        }

                        this.ArmsData.splice(0, 1, this.JanArms)
                        this.ArmsData.splice(1, 1, this.FebArms)
                        this.ArmsData.splice(2, 1, this.MarArms)
                        this.ArmsData.splice(3, 1, this.AprArms)
                        this.ArmsData.splice(4, 1, this.MayArms)
                        this.ArmsData.splice(5, 1, this.JunArms)
                        this.ArmsData.splice(6, 1, this.JulArms)
                        this.ArmsData.splice(7, 1, this.AugArms)
                        this.ArmsData.splice(8, 1, this.SepArms)
                        this.ArmsData.splice(9, 1, this.OctArms)
                        this.ArmsData.splice(10, 1, this.NovArms)
                        this.ArmsData.splice(11, 1, this.DecArms)
                    } else if (obj.body_part_id.slice(0, 1) === "4") {

                        if (obj.date_created.slice(5, 7) === "01") {
                        this.JanLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "02") {
                        this.FebLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "03") {
                          this.MarLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "04") {
                          this.AprLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "05") {
                          this.MayLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "06") {
                          this.JunLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "07") {
                          this.JulLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "08") {
                          this.AugLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "09") {
                          this.SepLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "10") {
                          this.OctLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "11") {
                          this.NovLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "12") {
                          this.DecLegs += 1
                      }

                      this.LegsData.splice(0, 1, this.JanLegs)
                      this.LegsData.splice(1, 1, this.FebLegs)
                      this.LegsData.splice(2, 1, this.MarLegs)
                      this.LegsData.splice(3, 1, this.AprLegs)
                      this.LegsData.splice(4, 1, this.MayLegs)
                      this.LegsData.splice(5, 1, this.JunLegs)
                      this.LegsData.splice(6, 1, this.JulLegs)
                      this.LegsData.splice(7, 1, this.AugLegs)
                      this.LegsData.splice(8, 1, this.SepLegs)
                      this.LegsData.splice(9, 1, this.OctLegs)
                      this.LegsData.splice(10, 1, this.NovLegs)
                      this.LegsData.splice(11, 1, this.DecLegs)
                    }
                    return null;
                  }))
                }
              </span>
              <div className="chart">
                <PartChart Data={this.LegsData}/>
              </div>
              <div className="legs">
              {
                Object.keys(obj['body']).map((region, i, arr) => {
                  return <BodyParts
                    key={i}
                    isClickable={false}
                    svgSrc={obj['body']['legs'].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    xPosition={this.RegionX}
                    yPosition={this.RegionY} />
              })}

              {
                Object.keys(obj['body']['legs']['parts']).map((part, i, arr) => {
                  const parts = arr.length;
                  const deg = 360/parts;
                  const start = deg + 90;

                  this.Rotation = start - (deg * (i + 1))

                  return <BodyParts
                    key={i}
                    rotation={this.Rotation}
                    isClickable={true}
                    part={obj['body']['legs']['parts'][part].id}
                    onClick={this.onClick}
                    svgSrc={obj['body']['legs']['parts'][part].img_path}
                    xPosition={this.calculateXPosition(i, arr.length)}
                    yPosition={this.calculateYPosition(i, arr.length)} />
                })}
              </div>
            </div>
            )
        case "/region/arms":
          return (
            <div>
              <span style={{"display": "none"}}>
                {
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

                    } else if (obj.body_part_id.slice(0, 1) === "2") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovTorso += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecTorso += 1
                        }

                        this.TorsoData.splice(0, 1, this.JanTorso)
                        this.TorsoData.splice(1, 1, this.FebTorso)
                        this.TorsoData.splice(2, 1, this.MarTorso)
                        this.TorsoData.splice(3, 1, this.AprTorso)
                        this.TorsoData.splice(4, 1, this.MayTorso)
                        this.TorsoData.splice(5, 1, this.JunTorso)
                        this.TorsoData.splice(6, 1, this.JulTorso)
                        this.TorsoData.splice(7, 1, this.AugTorso)
                        this.TorsoData.splice(8, 1, this.SepTorso)
                        this.TorsoData.splice(9, 1, this.OctTorso)
                        this.TorsoData.splice(10, 1, this.NovTorso)
                        this.TorsoData.splice(11, 1, this.DecTorso)
                    } else if (obj.body_part_id.slice(0, 1) === "3") {

                        if (obj.date_created.slice(5, 7) === "01") {
                          this.JanArms += 1
                        } else if (obj.date_created.slice(5, 7) === "02") {
                          this.FebArms += 1
                        } else if (obj.date_created.slice(5, 7) === "03") {
                            this.MarArms += 1
                        } else if (obj.date_created.slice(5, 7) === "04") {
                            this.AprArms += 1
                        } else if (obj.date_created.slice(5, 7) === "05") {
                            this.MayArms += 1
                        } else if (obj.date_created.slice(5, 7) === "06") {
                            this.JunArms += 1
                        } else if (obj.date_created.slice(5, 7) === "07") {
                            this.JulArms += 1
                        } else if (obj.date_created.slice(5, 7) === "08") {
                            this.AugArms += 1
                        } else if (obj.date_created.slice(5, 7) === "09") {
                            this.SepArms += 1
                        } else if (obj.date_created.slice(5, 7) === "10") {
                            this.OctArms += 1
                        } else if (obj.date_created.slice(5, 7) === "11") {
                            this.NovArms += 1
                        } else if (obj.date_created.slice(5, 7) === "12") {
                            this.DecArms += 1
                        }

                        this.ArmsData.splice(0, 1, this.JanArms)
                        this.ArmsData.splice(1, 1, this.FebArms)
                        this.ArmsData.splice(2, 1, this.MarArms)
                        this.ArmsData.splice(3, 1, this.AprArms)
                        this.ArmsData.splice(4, 1, this.MayArms)
                        this.ArmsData.splice(5, 1, this.JunArms)
                        this.ArmsData.splice(6, 1, this.JulArms)
                        this.ArmsData.splice(7, 1, this.AugArms)
                        this.ArmsData.splice(8, 1, this.SepArms)
                        this.ArmsData.splice(9, 1, this.OctArms)
                        this.ArmsData.splice(10, 1, this.NovArms)
                        this.ArmsData.splice(11, 1, this.DecArms)
                    } else if (obj.body_part_id.slice(0, 1) === "4") {

                        if (obj.date_created.slice(5, 7) === "01") {
                        this.JanLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "02") {
                        this.FebLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "03") {
                          this.MarLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "04") {
                          this.AprLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "05") {
                          this.MayLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "06") {
                          this.JunLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "07") {
                          this.JulLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "08") {
                          this.AugLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "09") {
                          this.SepLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "10") {
                          this.OctLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "11") {
                          this.NovLegs += 1
                      } else if (obj.date_created.slice(5, 7) === "12") {
                          this.DecLegs += 1
                      }

                      this.LegsData.splice(0, 1, this.JanLegs)
                      this.LegsData.splice(1, 1, this.FebLegs)
                      this.LegsData.splice(2, 1, this.MarLegs)
                      this.LegsData.splice(3, 1, this.AprLegs)
                      this.LegsData.splice(4, 1, this.MayLegs)
                      this.LegsData.splice(5, 1, this.JunLegs)
                      this.LegsData.splice(6, 1, this.JulLegs)
                      this.LegsData.splice(7, 1, this.AugLegs)
                      this.LegsData.splice(8, 1, this.SepLegs)
                      this.LegsData.splice(9, 1, this.OctLegs)
                      this.LegsData.splice(10, 1, this.NovLegs)
                      this.LegsData.splice(11, 1, this.DecLegs)
                    }
                    return null;
                  }))
                }
              </span>
              <div className="chart">
                <PartChart Data={this.ArmsData}/>
              </div>
              <div className="arms">
              {
                Object.keys(obj['body']).map((region, i, arr) => {
                  return <BodyParts
                    key={i}
                    isClickable={false}
                    svgSrc={obj['body']['arms'].img_path}
                    role="presentation"
                    height="100px"
                    width="100px"
                    xPosition={this.RegionX}
                    yPosition={this.RegionY} />
              })}

              {
                Object.keys(obj['body']['arms']['parts']).map((part, i, arr) => {
                  const parts = arr.length;
                  const deg = 360/parts;
                  const start = deg + 90;

                  this.Rotation = start - (deg * (i + 1))

                  return <BodyParts
                    key={i}
                    rotation={this.Rotation}
                    isClickable={true}
                    part={obj['body']['arms']['parts'][part].id}
                    onClick={this.onClick}
                    svgSrc={obj['body']['arms']['parts'][part].img_path}
                    xPosition={this.calculateXPosition(i, arr.length)}
                    yPosition={this.calculateYPosition(i, arr.length)} />
                })}
              </div>
            </div>
            )
        default:
          console.log("Nothing working")
    }
  }
}

export default BodyRegions;
