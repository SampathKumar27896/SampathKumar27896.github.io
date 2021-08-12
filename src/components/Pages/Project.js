import React from 'react';
import {useHistory} from "react-router-dom";
import ProjectData from '../../Data/portfolio';
const Project = (props) => {
    const history = useHistory();
    const project = ProjectData[props.match.params.name];
    console.log(project['financialPortal'])
    return (
        <div>

            <div className="content-flex">
                <button onClick={() => history.goBack()}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="hsl(233, 26%, 24%)" 
                        stroke-width="2" stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-chevron-left">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div className="layout-one content-flex-items">
                    <div className="layout-one-content content-flex-items-content">
                        <h3>{project['project']['heading']}</h3>
                        <p>
                            {project['project']['value']}
                        </p>
                    </div>
                    <div className="layout-one-content content-flex-items-content">
                        <h3>{project['description']['heading']}</h3>
                        <p>
                            {project['description']['value']}
                        </p>
                    </div>
                    <div className="layout-one-content content-flex-items-content">
                        <h3>{project['technology']['heading']}</h3>
                        <p>
                            {project['technology']['value']}
                        </p>
                    </div>
                    <div className="layout-one-content content-flex-items-content">
                        <h3>Contribution</h3>
                        <ul className="contribution-list">
                            {
                                project['contribution']['value'].map((item) => (
                                    <li>
                                        <p>
                                            {item}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;