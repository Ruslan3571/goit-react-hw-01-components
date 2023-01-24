import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';
import { OnlineStatus } from '../FriendList/FriendList.styled.jsx';

export function FriendListItem({ avatar, name, isOnline }) {
  <li className={s.itemFriends}>
    <OnlineStatus isOnline={isOnline} />
    <img
      className={s.avatarFriends}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={s.name}>{name}</p>
  </li>;
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
