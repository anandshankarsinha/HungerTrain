import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child- constructor" + this.props.name)
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Namaste React OP");
    // }, 1000);
    const data = await fetch("https://api.github.com/users/anandshankarsinha");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    //console.log("Child - componentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }

    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    //component.log("ComponentWillUnmount");
  }

  render() {
    const { count } = this.state;
    return (
      <div className="">
        <h1>Profile Class Component</h1>
        <p>Name - {this.state.userInfo.name}</p>
        <h3>Location: {this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} alt="" />
      </div>
    );
  }
}

export default ProfileClass;

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
