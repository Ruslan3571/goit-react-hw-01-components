import s from '../FriendList/FriendList.module.css';
import { OnlineStatus } from '../FriendList/FriendList.styled.jsx';

export function FriendList({ friends }) {
  return (
    <ul className={s.friendListBlock}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={s.itemFriends} key={id}>
            <OnlineStatus isOnline={isOnline} />
            <img
              className={s.avatarFriends}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
