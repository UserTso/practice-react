import Header from './Header/Header';
import PostList from './PostList/PostList';
import { data } from 'data/data';

export const App = () => {
  return (
    <div>
      <Header title="Котик на диете - несчастный котик" />
      <PostList data={data} />
    </div>
  );
};
