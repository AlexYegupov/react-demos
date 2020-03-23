import React from 'react';

export default (props) => {
  // const { hist } = props;

  console.log(`r page`, props)

  return (
    <React.Fragment>
      <h2>page {props.url}</h2>
    </React.Fragment>
  );
}
