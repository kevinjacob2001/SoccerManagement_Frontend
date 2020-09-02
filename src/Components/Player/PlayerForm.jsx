import React from 'react';
import { Component } from 'react';

class PlayerForm extends Component{
    constructor(){
        super()
    }
    render(){
        return(
           
  <div className="row">
      <h4 className="center">Add a new player.</h4>
            <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
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
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Add Player
                </button>
            </form>
</div>
        )
    }
}

export default PlayerForm;