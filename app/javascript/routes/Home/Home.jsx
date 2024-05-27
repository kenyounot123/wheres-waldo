import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import Table from "../../components/Table";
import TableData from "../../components/TableData";
import formatTime from "../../helper/timeHelper";

export default function Home() {
  const [recordData, setRecordData] = useState([]);
  useEffect(() => {
    const url = "/api/v1/users/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response not ok");
        }
      })
      .then((response) => {
        console.log(response);
        setRecordData(response);
      })
      // Should have an error page
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="d-flex">
        <h1 className="home-title">A Wheres-Waldo Game Variation</h1>
        <div className="home-target-img">
          <img src="targets.jpg" alt="Famous people" />
        </div>
        <p className="home-text">
          Find these 5 people in the crowd and see if you can make it to the
          Hall of Fame with your record
        </p>
        <h2 className="home-instruction-title">How To Play</h2>
        <p>Click anywhere on the photo and make your guess</p>
        <div className="home-gif">
          <img src="demoGuess.gif" alt="gif" />
        </div>
        <Link to={"/play"}>
          <button className="play-btn">Play Now</button>
        </Link>
        {/* Dynamically add player names and time from db */}
        <div className="hall-of-fame">
          <Table>
            {recordData.map((person, index) => (
              <TableData
                key={person.id}
                rank={index + 1}
                name={person.name}
                record={formatTime(person.record)}
              />
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
