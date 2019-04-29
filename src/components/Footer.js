import React from 'react';

const Footer = () => {
  return (
    <div style={style.container}>
      <p>Copyright © - 2019〈 A.S 〉</p>
    </div>
  );
};

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: 15,
    fontSize: 12,
  },
};

export default Footer;
