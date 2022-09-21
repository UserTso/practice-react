import PropTypes from 'prop-types';
import { Title, List, Image, TitleSecond, Text } from './PostList.styled';
import PostListItem from './PostListItem';

const PostList = ({ data }) => {
  return (
    <>
      <Title>Post List</Title>
      <List>
        {data.map((el, index) => {
          const { title, description, src } = el;
          return (
            <PostListItem key={index}>
              <Image src={src} alt="Photo" />
              <TitleSecond>{title}</TitleSecond>
              <Text>{description}</Text>
            </PostListItem>
          );
        })}
      </List>
    </>
  );
};

export default PostList;

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
