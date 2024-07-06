import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
    <div className="user">
      <span>{user.name}</span>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
