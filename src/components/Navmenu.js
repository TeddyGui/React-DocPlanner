import React from 'react'
 

function Navmenu({x}) {
    return (
        <div className="Header">
        <img className="App-logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>    
        <ul className="list">
            {x.map(el => el.drop ?
                <li className="titre">{el.titre}
                    <ul className="dropdown">
                        { el.drop.map(el =>
                                <li>{el}</li>
                            )}
                    </ul>

                </li> : <li className="titre">{el.titre}</li>
            )}
        </ul>
        </div>
    )
}

export default Navmenu;