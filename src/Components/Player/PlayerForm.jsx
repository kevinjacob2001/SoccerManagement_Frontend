import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class PlayerForm extends Component{
        submitPlayer(e){
            e.preventDefault();
                axios.post("http://localhost:8000/players",{
                    firstName:this.refs.firstName.value,
                    lastName:this.refs.lastName.value,
                    team:this.refs.team.value,
                    email:this.refs.email.value,
                    phone:this.refs.phone.value,
                  endurance:this.refs.endurance.value

                }).then((res)=>{
                    console.log(res)
                }).catch((error)=>{
                    console.log(error)
                });

        }

    render(){
        return(
           
  <div className="row">
      <h4 className="center">Add a new player.</h4>
            <form style={{color:"black"}} className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" ref="firstName" type="text"/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" ref="lastName" type="text"/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="team" ref="team" type="text"/>
                        <label htmlFor="team">Team Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" ref="email" type="text"/>
                        <label htmlFor="email">Email</label>
                    </div>
                
                    <div className="input-field col s6">
                        <input id="phone" ref="phone" type="number"/>
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="endurance" ref="endurance" type="number"/>
                        <label htmlFor="endurance">Endurance(out of 3)</label>
                    </div>
                </div>
                <div className="center">
                <button style={{backgroundColor:"blue"}} className=" btn waves-effect waves-dark" type="submit" name="action">
                    Add Player
                </button>
                </div>
            </form>
</div>
        )
    }
}

export default PlayerForm;