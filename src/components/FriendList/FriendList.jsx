import css from '../FriendList/FriendList.style.css';
import { OnlineStatus } from '../FriendList/FriendList.styled.jsx';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list__block">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item-friends" key={id}>
            <OnlineStatus isOnline={isOnline} />
            <img
              className="avatar-friends"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
