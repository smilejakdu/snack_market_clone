import React from 'react';
import PostTemplate from '../../components/PostTemplate';
import SearchForm from '../../components/SearchForm';

const PostPage = () => {
  return (
    <div>
      <PostTemplate>
        <SearchForm />
      </PostTemplate>
    </div>
  );
};

export default PostPage;