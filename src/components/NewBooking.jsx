import "../NewBooking.css";
import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function NewBooking() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [click, setClick] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [room, setRoom] = useState(1);

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/");
    }
  }, []);

  let data = [
    { time: "9:30 - 11:30", availabilty: "Occupied", host: "John" },
    { time: "11:30 - 1:30", availabilty: "Available" },
    { time: "1:30 - 3:30", availabilty: "Occupied", host: "Angel" },
    { time: "3:30 - 5:30", availabilty: "Available" },
    { time: "5:30 - 7:30", availabilty: "Available" },
  ];

  function handleClick() {
    document.querySelector(".date-filter-btn").style.backgroundColor =
      "#3263e0";
    setClick(true);
    setShowForm(false);
  }

  let monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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
            <Nav.Link href="/MyBooking">My Booking</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hi, <strong>{username}</strong> !
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="myBooking">
        <h1>New Booking</h1>

        <div className="schedule-list-2">
          <div className="booking-list">
            <h3 className="current-date">{`${value.getDate()} ${
              monthArr[value.getMonth()]
            } ${value.getFullYear()}`}</h3>
            <button className="date-filter-btn" onClick={handleClick}>
              Choose Date
            </button>
            <br />
            <div className="room-filter-div">
              <button
                className="room-filter-btn-1 active"
                onClick={(e) => {
                  e.target.classList.toggle("active");
                  document
                    .querySelector(".room-filter-btn-2")
                    .classList.remove("active");
                  document
                    .querySelector(".room-filter-btn-3")
                    .classList.remove("active");
                }}
              >
                Room 1
              </button>
              <button
                className="room-filter-btn-2"
                onClick={(e) => {
                  e.target.classList.toggle("active");
                  setRoom(2);
                  document
                    .querySelector(".room-filter-btn-1")
                    .classList.remove("active");
                  document
                    .querySelector(".room-filter-btn-3")
                    .classList.remove("active");
                }}
              >
                Room 2
              </button>
              <button
                className="room-filter-btn-3"
                onClick={(e) => {
                  setRoom(3);
                  e.target.classList.toggle("active");
                  document
                    .querySelector(".room-filter-btn-1")
                    .classList.remove("active");
                  document
                    .querySelector(".room-filter-btn-2")
                    .classList.remove("active");
                }}
              >
                Room 3
              </button>{" "}
            </div>
            <div className="time-slot">
              {data.map((item) => {
                if (item.availabilty === "Occupied") {
                  return (
                    <div className="meeting-preview-Occupied">
                      <span className="meeting-time">{item.time}</span>
                      <div className="status">
                        <div className="status-dot-red"></div>
                        <span className="occupied">{item.availabilty}</span>
                      </div>
                      <div className="host">
                        <span>{item.host}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="meeting-preview-available">
                      <span className="meeting-time">{item.time}</span>
                      <div className="status">
                        <div className="status-dot-green"></div>
                        <span className="available">{item.availabilty}</span>
                      </div>
                      <div className="host">
                        <button
                          className="join-btn"
                          onClick={(e) => {
                            setClick(false);
                            setShowForm(true);
                            setTime(
                              e.target.parentNode.parentNode.childNodes[0]
                                .textContent
                            );
                            document.querySelector(
                              ".date-filter-btn"
                            ).style.backgroundColor = "transparent";
                          }}
                        >
                          Join
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="block-1"></div>
          <div className="info-list">
            {click ? (
              <div>
                <h3>Date and Time</h3>
                <div>
                  <Calendar onChange={onChange} value={value} />
                  <p className="reminder">☝🏼 Click to view availability</p>
                </div>
              </div>
            ) : null}
            {showForm ? (
              <div>
                <h3>Booking info</h3>
                <p className="dateAndTime">{`( Room ${room} ) ${value.getDate()} ${
                  monthArr[value.getMonth()]
                } ${value.getFullYear()} - ${time}`}</p>
                <div className="bookingForm">
                  <input
                    type="text"
                    value={`${username} (Host)`}
                    disabled="true"
                  />
                  <br />
                  <input type="text" placeholder="Title of this meeting?" />
                  <br />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Leave something here... (Overview, rundown)"
                  ></textarea>
                  <br />
                  <button className="confirm-btn">Confirm</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <p className="copyright">Copyright © 2023 Booking App</p>
    </div>
  );
}

export default NewBooking;
