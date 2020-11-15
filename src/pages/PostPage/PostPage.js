import React from 'react';
import PostTemplate from '../../components/PostTemplate';
import FooterInfoList from '../../components/Footer/FooterInfoList';

const PostPage = () => {
  return (
    <div>
      <PostTemplate>
        <FooterInfoList />
        <FooterInfoList />

      </PostTemplate>
    </div>
  );
};

export default PostPage;