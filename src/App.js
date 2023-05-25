import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://example.com/profile-image.jpg',
      profession: 'Web Developer'
    },
    show: false,
    mountedTime: 0
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="container">
        <h1>My React App</h1>
        <button className="btn btn-primary" onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
