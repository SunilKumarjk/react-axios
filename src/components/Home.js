import React from 'react'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="card mt-5">
                            <div className="card-header ">
                                <h2 >Project Overview</h2>
                                <p>Crud operations using react router, redux toolkit and axios</p>
                            </div>
                            <div className="card-body table-responsive">
                                <blockquote class="blockquote">
                                    <p>**Create a new project with npx create-react-app my-app</p>
                                </blockquote>
                                <blockquote class="blockquote">
                                    <h5>Packages</h5>
                                    <p>Bootstrap = npm install bootstrap</p>
                                    <p>React Router = npm install react-router-dom</p>
                                    <p>React Notifications = npm i react-toastify</p>
                                    <p>React Redux = npm i redux react-redux redux-thunk axios redux-logger @reduxjs/toolkit</p>
                                    <p>Json Server Getting An API = npm i -g json-server</p>
                                    <p>To Run Json Server = first create a Data folder in src <br /> To run Json Server = json-server --watch src/Data/db.json --port 8000</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home