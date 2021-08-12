import React from 'react';
import {
   
    Link
  } from "react-router-dom";
const Home = (props) => {
    return (
        <div>
            <div className="content-flex">
                <div className="layout-one content-flex-items">
                    <div className="layout-one-content content-flex-items-content">
                        <h2>Hi, I am Sampath Kumar</h2>
                        <p>
                            I work as a software developer developing APIs for web <br />
                            and moblile applications.
                        </p>
                    </div>
                </div>
                <div className="layout-two content-flex-items">
                    <div className="content-flex-heading">
                        <p>
                            <strong>I currently work on</strong>
                        </p>
                    </div>
                    <div className="layout-two-content content-flex-items-content">
                        <ul>
                            <li>
                                <label className="title-medium">Language:</label> Javascript
                            </li>
                            <li>
                                <label className="title-medium">Runtime:</label> Node js
                            </li>
                            <li>
                                <label className="title-medium">Frameworks:</label> Express,
                                Firebase Cloud Functions
                            </li>
                            <li>
                                <label className="title-medium">Database:</label> MySQL,
                                Firebase Firestore{' '}
                            </li>
                            <li>
                                <label className="title-medium">Unit Test:</label> Jest Js{' '}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="layout-two content-flex-items">
                    <div className="content-flex-heading">
                        <p>
                            <strong>I have worked on</strong>
                        </p>
                    </div>
                    <div className="layout-two-content content-flex-items-content">
                        <ul>
                            <li>
                                <label className="title-medium">Languages: </label>HTML, CSS,
                                JQuery, PHP, Typescript
                            </li>
                            <li>
                                <label className="title-medium">Libraries: </label>React, Redux
                            </li>
                            <li>
                                <label className="title-medium">Frameworks: </label>Laravel
                            </li>
                            <li>
                                <label className="title-medium">Databases: </label>PostgreSQL,
                                MogoDB
                            </li>
                            <li>
                                <label>Message broker:</label> RabbitMQ
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="layout-three content-flex-items">
                    <div className="content-flex-heading">
                        <p>
                            <strong>Experience</strong>
                        </p>
                    </div>
                    <div className="layout-three-flex">
                        <div className="layout-three-flex-item content-flex-items-content">
                            <ul>
                                <li className="title-medium">Techversant Infotech</li>
                                <li>Software Developer - Node js</li>
                                <li>2020 - present</li>
                            </ul>
                        </div>
                        <div className="layout-three-flex-item content-flex-items-content">
                            <ul>
                                <li className="title-medium">Heptagon Technogies</li>
                                <li>Software Developer - Laravel</li>
                                <li>2018 - 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="layout-four content-flex-items">
                    <div className="content-flex-heading">
                        <p>
                            <strong>Projects</strong>
                        </p>
                    </div>
                    <div className="layout-four-flex">
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/financialPortal"
                        >
                            Student Finance Portal
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/retail"
                        >
                            AI powered ESS & Retail solutions
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/digitalHuman"
                        >
                            Digital Human
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/digitalHundi"
                        >
                            Digital Hundi
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/learningPathway"
                        >
                            Learning Pathway
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/feedbackSystem"
                        >
                            Feedback system
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/financialAid"
                        >
                            Financial Aid Portal
                        </Link>
                        <Link
                            className="item-1 layout-four-flex-item content-flex-items-content title-medium"
                            to="/project/taskTracker"
                        >
                            Task management
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;