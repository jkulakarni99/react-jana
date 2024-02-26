import React from "react";
import '../UserClass/UserClass.css'
class UserClass extends React.Component {
    constructor(props) {
      
      super(props);

      this.state = {
        userDetails: {
            name: 'Dummy',
            location: 'Dummy',
            login: '',
            bio: '',
        },
        count: 0
      }

    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/janardhanakulakarni');
        const json = await data.json();
        console.log(json);
        this.setState({
            userDetails: json,
        })
        console.log('did mount')
    }

    componentDidUpdate(){
        console.log('did update');
    }

    componentWillUnmount() {
        console.log('destory')
    }
    render() {
        const {name, location, login, bio} = this.state.userDetails;
        console.log('redner')
      return (
        <div>
          <h1>This is about page </h1>
          <div className="aboutCard">
          <h4>Name: {name}</h4>
          <h5>Location: {location}</h5>
          <h6>UserName: {login}</h6>
          <h6>Bio: {bio}</h6>
          </div>
          <button onClick={() => {
            this.setState(val => {
                console.log(val);
                const userDetails = Object.assign({}, val.userDetails)
                userDetails.name = 'dummy';
                return {userDetails}
            })
            setTimeout(() => {
                console.log(this.state.userDetails)

            }, 5000)
          }}>Click me</button>
        </div>
      )
    }
}
export default UserClass
