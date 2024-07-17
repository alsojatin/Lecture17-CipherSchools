import React from 'react';

function Greeting(props) {
  const { name } = props; // Destructuring assignment to get name from props
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;
