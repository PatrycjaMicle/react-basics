var React = require("react");


class WhatIsYourName extends React.Component {

  constructor(props) {    //constructor method has one parameter props
                          // which is an object that contains all the properties
                          //passed to the component when it is created

    super(props);     //Passing the props as an argument to the parent class's
    this.state = { name: "" }; //sets the initial state of this component
    // the state is being set to an object with a single property 'name' that
    // has an initial value of an empty string
    this.onNameChange = this.onNameChange.bind(this); //setting the value of this keyword inside a function
    //so that the onNameChange function can later refer to `this` of the component
  }



  onNameChange(event) {
    this.setState({ name: event.target.value});
  }
  //The event.target property refers to the element that fired the event, in this case, the input field.
  // The value property of the input field element contains the current value of the input field.

  render() {
    let userNameGreeting;
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
