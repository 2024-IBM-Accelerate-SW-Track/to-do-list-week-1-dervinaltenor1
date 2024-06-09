import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {Tooltip} from "@mui/material";

export default class About extends Component {
  render() {
    return (
      <div>
          <div>
              <div className = "containers">
                  <div className="split left">
                      <div className="centered">
                          <img
                              className="profile_image"
                              src={pfp}
                              alt="Profile Pic"
                          ></img>
                      </div>
                  </div>
                  <div className="split right">
                      <div className="centered">
                          <div className="name_title">Dervin Altenor</div>
                          <div className="brief_description">
                              Greetings, I am a rising junior at Florida A&M University majoring in Cybersecurity.
                              I love going to the gym and playing video games. In my spare time,
                              I like going to the courts and playing basketball.
                          </div>
                          <div className="home-sci">
                              <Tooltip title="Github" enterDelay={400} leaveDelay={50} arrow slotProps={{
                                  popper: {
                                      modifiers: [
                                          {
                                              name: 'offset',
                                              options: {
                                                  offset: [0, 5],
                                              },
                                          },
                                      ],
                                  },
                              }}>
                              <a href="https://github.com/dervinaltenor1"><GitHubIcon style={{ color: 'var(--accent2)', fontSize: 40 }} /></a></Tooltip>
                              <Tooltip title="LinkedIn" enterDelay={400} leaveDelay={50} arrow slotProps={{
                                  popper: {
                                      modifiers: [
                                          {
                                              name: 'offset',
                                              options: {
                                                  offset: [0, 5],
                                              },
                                          },
                                      ],
                                  },
                              }}><a href="https://linkedin.com/in/dervin-altenor-6172a4291"><LinkedInIcon style={{ color: 'var(--accent2)', fontSize: 40 }} />
                              </a></Tooltip>
                              <Tooltip title="Email" enterDelay={400} leaveDelay={50} arrow slotProps={{
                                  popper: {
                                      modifiers: [
                                          {
                                              name: 'offset',
                                              options: {
                                                  offset: [0, 5],
                                              },
                                          },
                                      ],
                                  },
                              }}><a href="mailto:dervinaltenor2004@gmail.com"><EmailIcon style={{ color: 'var(--accent2)', fontSize: 40 }} /></a></Tooltip>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}