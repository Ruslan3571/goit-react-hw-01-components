import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  const userStats = [
    {
      title: 'Followers',
      quantity: stats.followers,
    },
    {
      title: 'Views',
      quantity: stats.views,
    },
    {
      title: 'Likes',
      quantity: stats.likes,
    },
  ];
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {userStats.map(el => (
          <li key={el.title}>
            <span className={s.label}>{el.title}</span>
            <span className={s.quantity}>{el.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
