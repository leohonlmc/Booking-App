import "../MyBooking.css";
import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

function MyBooking() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState(1);

  let quotes = [
    "“The meetings can be a lot of fun or they can be frustrating.”",
    "“The world is run by those willing to sit until the end of meetings.”",
    "“Meetings don’t have to be endless to be eternal.”",
    "“Meetings move at the speed of the slowest mind in the room.”",
    "“Meetings are a symptom of bad organization. The fewer meetings the better.”",
    "“The longer the meeting, the less is accomplished.”",
    "“Meetings at work present great opportunities to showcase your talent. Do not let them go to waste.”",
    "“People who enjoy meetings should not be in charge of anything.”",
    "“The majority of meetings should be discussions that lead to decisions.”",
    "“You have a meeting to make a decision, not to decide on the question.",
  ];

  let authors = [
    "— Bob Weir",
    "— Hugh Park",
    "— James E. Faust",
    "— Dale Dauton",
    "— Peter Drucker",
    "— Tim Cook",
    "— Abhishek Ratna",
    "— Thomas Sowell",
    "— Patrick Lencioni",
    "— Bill Gates",
  ];

  const [quote, setQuote] = useState(0);
  const [author, setAuthor] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/");
    }

    let randomNum = ~~(Math.random() * quotes.length);
    setQuote(randomNum);
    setAuthor(randomNum);
  }, [navigate, quote, author]);

  if (schedule === 0) {
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
              <Nav.Link href="/NewBooking">New Booking</Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <button
                  className="switchUser"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Switch User
                </button>
              </Navbar.Text>
              <Navbar.Text>
                Hi, <strong>{username}</strong> !
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="myBooking">
          <h1>Upcoming Schedule: {schedule}</h1>

          <div className="schedule-list">
            <h3 className="quotes">{quotes[quote]}</h3>
            <h2>{authors[author]}</h2>
            <button
              className="newBooking"
              onClick={() => {
                navigate("/NewBooking");
              }}
            >
              New Booking
            </button>
          </div>
        </div>

        <p className="copyright">Copyright © 2023 Booking App</p>
      </div>
    );
  } else {
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
              <Nav.Link href="/NewBooking">New Booking</Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <button
                  className="switchUser"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Switch User
                </button>
              </Navbar.Text>
              <Navbar.Text>
                Hi, <strong>{username}</strong> !
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="myBooking">
          <h1>Upcoming Schedule: {schedule}</h1>

          <div className="schedule-list-1">
            <div className="schedules-lastest">
              <div className="Date">
                <span>25 Apr</span>
              </div>
              <div className="block"></div>
              <div className="roomNum">Room 1</div>
              <div className="time">3:30 - 5:30</div>
              <div className="participants">10 👨🏻‍💼</div>
              <div className="button-div">
                <button className="viewButton">View</button>
              </div>
              <div className="button-div">
                <button className="cancelButton">Cancel</button>
              </div>
            </div>
            <div className="upcoming-schedules">
              <div className="schedules">
                <span className="Date">25 Apr</span>
                <div className="block"></div>
                <div className="roomNum">Room 1</div>
                <div className="time">3:30 - 5:30</div>
                <div className="participants">10 👨🏻‍💼</div>
                <div className="button-div">
                  <button className="viewButton">View</button>
                </div>
                <div className="button-div">
                  <button className="cancelButton">Cancel</button>
                </div>
              </div>
              <div className="schedules">
                <span className="Date">25 Apr</span>
                <div className="block"></div>
                <div className="roomNum">Room 1</div>
                <div className="time">3:30 - 5:30</div>
                <div className="participants">10 👨🏻‍💼</div>
                <div className="button-div">
                  <button className="viewButton">View</button>
                </div>
                <div className="button-div">
                  <button className="cancelButton">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">Copyright © 2023 Booking App</p>
      </div>
    );
  }
}

export default MyBooking;
