import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
