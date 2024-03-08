import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Header() {
  return (
    <div>
      <h1 className="display-1">March Madness</h1>
      <h3>
        Scroll below to see list of colleges, their mascots and their location.
        ⬇️
      </h3>
      <br />
      <br />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h3>Thank you for visiting! ⛹🏼 Site by Cristian Cruz ™️ blah</h3>
    </div>
  );
}

class College extends React.Component<CollegeProps> {
  render() {
    const indCollege = this.props;

    return (
      <div>
        <h2>
          <b>{indCollege.school}</b>
        </h2>
        <p>Mascot: {indCollege.name}</p>
        <p>
          Location: {indCollege.city}, {indCollege.state}
        </p>
        <p>🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀 🏀</p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {data.teams.map((indCollege) => (
        <College {...indCollege} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
      <Footer />
    </div>
  );
}

export default App;
