import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';

export function FriendList({ friends }) {
  return (
    <ul className={s.friendListBlock}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
