import React from 'react';
import '../styles/Lorem.css';

class Lorem extends React.Component {
  render() {
    const { quote } = this.props;
    return (
      <div className="lorem-container">
        <p>Test Quote: {quote}</p>
      </div>
    );
  }
}

export default Lorem;
