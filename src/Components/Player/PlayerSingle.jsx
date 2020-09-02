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
                        <p>Phone:{props.player.phone}   Email:{props.player.email}</p>
                        <p>Strength:{props.player.strength} Endurance:{props.player.endurance}</p>

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