import React from 'react';
import { Link } from "react-router-dom";
const StartMenu = () => {
    return(
        <div className='flex-item'>
            <div class='inner_container'>
                <Link className='tile' id="tile1" to="/education">
                    <div className='tile_heading'>
                        Education
                    </div>
                </Link>
                <a className='tile' id='tile3'>
                    <div className='tile_heading'>
                        Technologies
                    </div>
                </a>
                <a className='tile' id="tile5" href="profession.html">
                        <div className='tile_heading'>
                        Professional Experience
                    </div>
                </a>
                <a className='tile' id="tile6">
                    <div className='tile_heading'>
                        Projects
                    </div>
                </a>
                
                <a className='tile' id="tile8">
                    <div className='tile_heading'>
                        Hackathons
                    </div>
                </a>
                <a className='tile' id="tile9">
                    <div className='tile_heading'>
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
        
    )
}
export default StartMenu;