import React from 'react';
import '../styles/ManagerButton.css';

class ManagerButton extends React.Component {
  render() {
    const { toggleQuote, isQuoteVisible } = this.props;
    return (
      <button className="toggle-button" onClick={toggleQuote}>
        {isQuoteVisible ? 'Hide Quote' : 'Show Quote'}
      </button>
    );
  }
}

export default ManagerButton;
