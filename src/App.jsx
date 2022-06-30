import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import { Profile } from './components/Profile/index.jsx';
import { Statistics } from './components/Statistics/index.jsx';
import { FriendList } from './components/FriendList/index.jsx';

export const App = () => {
  return (
    <div className="App">
      <Profile
        user = {user}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
