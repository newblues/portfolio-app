import React from 'react';

const Footer = props => {
  return (
    <div style={style.container}>
      <p>Credit photo: &nbsp;</p>

      <a href="https://pixabay.com/fr/users/Sara_Torda-888816/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2298286">
        {' '}
        Sara Torda
      </a>
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
