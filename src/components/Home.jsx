import "../Home.css";
import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1100 });
    if (!localStorage.getItem("username")) {
      navigate("/");
    }
    localStorage.removeItem("username");
  }, [navigate]);

  return (
    <div className="Home">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/meeting_room_96.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Booking App
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Booking</Nav.Link> */}
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hi, <strong>Guest</strong> !
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="meeting-room-div">
        <div className="center-div">
          <h1 className="greeting">
            Hi there! Who's using{" "}
            <strong className="brand-name">Booking App</strong>?
          </h1>
          <input
            className="input-username"
            placeholder="Let us know your name..."
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                localStorage.setItem(
                  "username",
                  username.charAt(0).toUpperCase() +
                    username.substr(1).toLowerCase()
                );
                navigate("/MyBooking");
              }
            }}
          ></input>
        </div>
      </div>
      <h2 className="slogan">
        Office room booking is getting <strong>easier</strong>{" "}
      </h2>
      <div className="steps-div">
        <div className="step">
          <p className="left-text">
            <strong>Step 1</strong> : Let us know your name
          </p>
        </div>
        <div className="step">
          <input placeholder="Leo - Sr Manager" disabled={true}></input>
        </div>
        <div className="step">
          <img className="room-demo-img" src="room_demo.png" alt="" />
        </div>
        <div className="step">
          <p className="right-text">
            <strong>Step 2</strong> : Check available rooms 📅
          </p>
        </div>
        <div className="step">
          <p className="left-text-mid">
            <strong>Step 3</strong> : Make an appointment ✔️
          </p>
        </div>
        <div className="step">
          <img
            className="confirmation-demo-img"
            src="confirmation_demo.png"
            alt=""
          />
        </div>
      </div>
      <p className="done">
        <strong>You’re all set! See you there!</strong> 😊{" "}
      </p>
      <p className="copyright">Copyright © 2023 Booking App</p>
    </div>
  );
}

export default Home;
