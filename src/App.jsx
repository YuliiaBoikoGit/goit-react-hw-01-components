import user from './data/user.json';
import { Profile } from './components/Profile/index';

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
    </div>
  );
};
