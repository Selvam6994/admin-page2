import React from 'react'
import Topbar from './topbar';
import Sidebar from './sidebar';
import { Outlet } from "react-router-dom";


function Portal() {
  return (
    <div className="App">
        <div id="page-top">     
        <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar></Topbar>
                    <Outlet /> 
                </div>
            </div>
        </div>
        </div>
        </div>
        
    )
        }
export default Portal;