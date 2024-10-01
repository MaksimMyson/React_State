import React from 'react';
import Lorem from './components/Lorem';
import ManagerButton from './components/ManagerButton';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isQuoteVisible: false,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }

  toggleQuote = () => {
    this.setState((prevState) => ({
      isQuoteVisible: !prevState.isQuoteVisible
    }));
  }

  render() {
    const { isQuoteVisible, quote } = this.state;

    return (
      <div className="app-container">
        <h1>Test: Does this appear?</h1> {/* Додаємо текст */}
        <ManagerButton toggleQuote={this.toggleQuote} isQuoteVisible={isQuoteVisible} />
        {isQuoteVisible && <Lorem quote={quote} />}
      </div>
    );
  }
}

export default App;
