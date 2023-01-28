var React = require("react"); //importing React from the react package
                              //load the package and make it available for use in the current file.


class WhatIsYourName extends React.Component {

  constructor(props) {    //constructor method has one parameter props
                          // which is an object that contains all the properties
                          //passed to the component when it is created

    super(props);     //Passing the props as an argument to the parent class's
    this.state = { name: "" };
    this.onNameChange = this.onNameChange.bind(this); //setting the value of this keyword inside a function
  }



  onNameChange(event) {
    this.setState({ name: event.target.value});
  }
  //The event.target property refers to the element that fired the event, in this case, the input field.
  // The value property of the input field element contains the current value of the input field.

  render() {
    let userNameGreeting;            //passing the value of name to the variable
    if (this.state.name===""){
      userNameGreeting="Enter your name.";
    }else{
      userNameGreeting="Hello "+this.state.name;
    }
    return (
      <div>
        <p>{userNameGreeting}</p>
        <input type="text" name="name" onChange={this.onNameChange} />
      </div>
    );
  }
}

export default WhatIsYourName;
