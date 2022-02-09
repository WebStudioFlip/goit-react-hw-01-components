import Profile from './Profile'
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'
import data from    '../data/data.js';

const profileInfo = data.user

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
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
      <Statistics title="Upload stats" stats={data.data} />     
      <FriendList friends={data.friends} />     
      <TransactionHistory items={data.transactions} />
    </div>
  );
};
