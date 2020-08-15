import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ball from './ball.png';
import formation from './formation.jpg';
import card from './card.png';


class Features extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      overall : 0,
      age : 24,
      potential : 68,
      defending : 30.0,
      skill_ball_control: 57,
      movement_reactions: 65,
      mentality_composure: 52,
      gk_diving: 9,
      gk_handling: 9,
      gk_positioning: 12,
      gk_reflexes: 15,
      st: 61.0,
      cf: 62.0,
      cam: 60.0,
      rm: 63.0,
      cdm: 46.0,
      rwb: 52.0,
      cb: 41.0,
      rb: 50.0,
      name : 'Karl',
      isScore: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();
    let user_stats = {
      age : this.state.age,
      potential : this.state.potential,
      defending : this.state.defending,
      skill_ball_control: this.state.skill_ball_control,
      movement_reactions: this.state.movement_reactions,
      mentality_composure: this.state.mentality_composure,
      gk_diving: this.state.gk_diving,
      gk_handling: this.state.gk_handling,
      gk_positioning: this.state.gk_positioning,
      gk_reflexes: this.state.gk_reflexes,
      st: this.state.st,
      cf: this.state.cf,
      cam: this.state.cam,
      rm: this.state.rm,
      cdm: this.state.cdm,
      rwb: this.state.rwb,
      cb: this.state.cb,
      rb: this.state.rb,
      name : this.state.name,
    }

    let response = await fetch('http://127.0.0.1:8000/api/features/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(user_stats)
    });
    let response_js = await response.json();
    this.setState({overall: response_js});
    this.setState({isScore:true});
  }

  handleChange(event){
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

  render(){

    let formorscore;

    if (this.state.isScore){
      formorscore = (
        <div id="scorereveal">
          <img id="card" src={card} alt="ERROR"></img>
          <h1 id="cardname">{this.state.name}</h1>
          <h1 id="cardoverall">{this.state.overall}</h1>
        </div>
      )
    } else {
      formorscore = (
        <div id="submitform">
          <h1>Predict Your FIFA Overall</h1>
          <form autoComplete="new-password" onSubmit={this.handleSubmit}>
            <input
              type="text" name="age" placeholder="Age"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="potential" placeholder="Potential"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="defending" placeholder="Defending"
              onChange={this.handleChange}
              autoComplete="off">
              </input>

            <input
              type="text" name="skill_ball_control" placeholder="Ball Control"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="movement_reactions" placeholder="Movement Reactions"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="mentality_composure" placeholder="Mentality Composure"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="gk_diving" placeholder="GK Diving"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="gk_handling" placeholder="GK Handling"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="gk_positioning" placeholder="GK Positioning"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="gk_reflexes" placeholder="GK Reflexes"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="st" placeholder="ST Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="cf" placeholder="CF Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="cam" placeholder="CAM Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="rm" placeholder="RM Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="cdm" placeholder="CDM Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="rwb" placeholder="RWB Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="cb" placeholder="CB Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="rb" placeholder="RB Stats"
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            <input
              type="text" name="name" placeholder="Your Name"
              onChange={this.handleChange}
              autoComplete="off">
            </input>
            <input type="submit" value="Predict"/>
          </form>
        </div>
      )
    }

    return (
        <div>
          <div id="aboveball">
            <div id="bgimg">
              <img src={formation} alt="Error"></img>
            </div>
            {formorscore}
          </div>
          <div id="balllogo">
            <img src={ball} alt="ERROR"></img>
          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Features />,
  document.getElementById('root')
);
