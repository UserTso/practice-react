import PropTypes from 'prop-types';
import { Item } from './PostList.styled';

const PostListItem = ({ children }) => {
  return <Item>{children}</Item>;
};

PostListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListItem;
