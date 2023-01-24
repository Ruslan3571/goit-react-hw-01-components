import css from '../Profile/Profile-style.css';

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
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {userStats.map(el => (
          <li key={el.title}>
            <span className="label">{el.title}</span>
            <span className="quantity">{el.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
