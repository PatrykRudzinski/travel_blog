import React from 'react';

const HashRoute = ({component, extraProps}) => {
  const Component = component;
  return <Component {...extraProps} />
}

export default HashRoute;