import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default () => (
  <div className="container">
    <div className="d-flex">
      <h1 className="home-title">A Wheres-Waldo Game Variation</h1>
      <div className="home-target-img">
        <img src="targets.jpg" alt="Famous people" />
      </div>
      <p className="home-text">
        Find these 5 people in the crowd and see if you can make it to the Hall
        of Fame with your record
      </p>
      <h2 className="home-instruction-title">How To Play</h2>
      <p>Click anywhere on the photo and make your guess</p>
      <div className="home-gif">
        <img src="demoGuess.gif" alt="gif" />
      </div>
      <Link to={"/play"}>
        <button>Play Now</button>
      </Link>
      {/* Dynamically add player names and time from db */}
      <div className="hall-of-fame">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Hall of Fame</th>
            </tr>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>1:23:45</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>1:30:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
