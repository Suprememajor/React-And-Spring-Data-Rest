import './App.css';
import {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: []
    };
  }

  componentDidMount() {
      fetch("/api/employees")
          .then(res => res.json())
          .then((result) => {
                  this.setState({
                      isLoaded: true,
                      employees: result._embedded.employees
                  });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error
                  });
              }
          )
  }

  render() {
      // console.log(this.state.employees);
    return (
        <EmployeeList employees={this.state.employees}/>
    )
  }
}

class EmployeeList extends Component{
  render() {
    // return (<h1>Hello World</h1>)
    const employees = this.props.employees.map(employee =>
        <Employee key={employee._links.self.href} employee={employee}/>
    );
    return (
        <table>
          <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
          </tr>
          {employees}
          </tbody>
        </table>
    )
  }
}

class Employee extends Component{
  render() {
    return (
        <tr>
          <td>{this.props.employee.firstName}</td>
          <td>{this.props.employee.lastName}</td>
          <td>{this.props.employee.description}</td>
        </tr>
    )
  }
}

export default App;
