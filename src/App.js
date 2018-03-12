import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React.js and ReactStrap</h1>
  </header>
);

const Buttons = ({ onButtonClicked }) => (
  <div>
    <Button outline color="success" onClick={() => onButtonClicked(1)}>
      Up
    </Button>{" "}
    <Button outline color="danger" onClick={() => onButtonClicked(-1)}>
      Down
    </Button>
  </div>
);
const RadioButtons = () => (
  <div>
    <h5>Radio Buttons</h5>
    <ButtonGroup>
      <Button color="primary" active={true}>
        One
      </Button>
      <Button color="primary">Two</Button>
      <Button color="primary">Three</Button>
    </ButtonGroup>
  </div>
);

const MoreRadioButtons = () => (
  <div>
    <h5>More Radio Buttons</h5>
    <FormGroup check>
      <Label check>
        <Input type="radio" name="radio1" /> Option one is this and that—be sure
        to include why it's great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="radio" name="radio1" /> Option two can be something else
        and selecting it will deselect option one
      </Label>
    </FormGroup>
    <FormGroup check disabled>
      <Label check>
        <Input type="radio" name="radio1" disabled /> Option three is disabled
      </Label>
    </FormGroup>
  </div>
);

const PaginationDemo = ({ onPageClicked }) => (
  <div>
    <h5>Pagination</h5>
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#" onClick={() => onPageClicked(-100)} />
      </PaginationItem>
      {[1, 2, 3, 4, 5].map(i => (
        <PaginationItem key={i}>
          <PaginationLink href="#" onClick={() => onPageClicked(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next href="#" onClick={() => onPageClicked(100)} />
      </PaginationItem>
    </Pagination>
  </div>
);

class App extends Component {
  state = { counter: 0 };

  addToCounter = n => {
    const { counter } = this.state;
    this.setState({ counter: counter + n });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <br />
          <p>Counter: {this.state.counter}</p>
          <Buttons onButtonClicked={this.addToCounter} />
          <br />
          <br />
          <RadioButtons />
          <br />
          <MoreRadioButtons />
          <br />
          <br />
          <PaginationDemo onPageClicked={this.addToCounter} />
        </Container>
      </div>
    );
  }
}

export default App;
