import user from '../info/user.json';

<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>;




// export const Profile = ({ username, tag, location, avatar, stats }) => {
//     const userStats = [
//         {
//             title: 'Folowers,'
//     quantity: stats.followers,
//         },
//         {
//             title: 'vievs,'
//     quantity: stats.vievs,
//         },
// {
//             title: 'likes,'
//     quantity: stats.likes,
//         },
//     ]

//     return (
//  <div class="profile">
//   <div class="description">
//     <img
//       src={avatar}
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{username}</p>
//     <p class="tag">{tag}</p>
//     <p class="location">{location}</p>
//   </div>

//             <ul class="stats">
//                 {userStats.map(element)=>{
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     }}
//   </ul>
//         </div>
//     )}
