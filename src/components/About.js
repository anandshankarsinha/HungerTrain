import React from "react";
// import { Outlet } from 'react-router-dom'
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
// import HeaderComponent from './Header'
// const About = () => {
//   return (
//     <div>
//         {/* <HeaderComponent/> */}
//       <h1>
//         This is a about page
//       </h1>
//         <Profile name={"Anand Sinha"} />
//         <ProfileClass name={"Anand"}/>
//     </div>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent - constructor")
  }
  componentDidMount() {
    // Best place to make API call
    console.log("Parent- Component did mount");
  }
  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About Us Page</h1>
        {/* <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold texl-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <Profile name="Anand " /> */}


        UNDER CONSTRUCTION
        {/* <ProfileClass name="Anand "/> */}
      </div>
    );
  }
}

export default About;

/*
 * Parent Constructor
 * Parent render
 *   First Child constructor
 *   First Child render
 *   Second Child constructor
 *   Second Child render
 *
 *     Dom updated for children
 *
 *    first Child componentDidMount
 *    second Child componentDidMount
 * Parent componentDidMount
 */
