import user from '../data/user.json';
import Profile from './Profile'
import Statistics from './Statistics';
import data from '../data/data.json';

const profileInfo = {
  username:user.username,
  tag:user.tag,
  location:user.location,
  avatar:user.avatar,
  stats:user.stats,
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile {...profileInfo}/> 
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
