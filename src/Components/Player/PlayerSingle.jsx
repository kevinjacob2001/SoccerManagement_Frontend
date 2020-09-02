import React from 'react';


const PlayerSingle=(props)=>{
    return(
      <div className="container-fluid">
         <div className="row">
            <div className="col 12">
            <div className="card">
                <div className="card-image">
                <img alt="soccer image" src="https://besthqwallpapers.com/Uploads/1-2-2018/39081/thumb2-lionel-messi-barcelona-la-liga-spain-corner-kick.jpg"/>
                <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                </div>
                <div className="card-content">
                        <div><p className="col 6">Phone:{props.player.phone}</p>  <p className="col 6"> Email:{props.player.email}</p></div>
                        <div><p className="col 6">Strength:{props.player.strength}</p>  <p className="col 6"> Endurance(Out of 3):{props.player.endurance}</p></div>

                </div>
                <div className="card-action">
               Team:{props.player.team}
                </div>
             </div>
            </div>
        </div>
    </div>       
      
    )
}

export default PlayerSingle;