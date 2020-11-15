import React, { useState } from 'react';
import { PostTemplateBlock, PostWriteButton } from './PostTemplate.style';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faEdit } from "@fortawesome/free-solid-svg-icons";

const PostItem = (props) => {
  const { id, content, name, date, hits } = props.post;

  return (
    <tr>
      <td>{id}</td>
      <td><FontAwesomeIcon icon={faNewspaper} /></td>
      <td></td>
      <td>{content}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{hits}</td>
    </tr>
  );
};

const PostList = (props) => {
  const posts = props.posts;
  const postList = posts.reverse().map((post) =>
    <PostItem key={post.id} post={post} />
  );

  return (
    <tbody>
      {postList}
    </tbody>
  )
}


const PostTemplate = ({ children }) => {

  // 임시 데이터
  const [posts, setPosts] = useState([
    {
      id: '1',
      content: '첫 번째 게시물',
      name: '운영자',
      date: '2020/11/20',
      hits: '2',
    },
    {
      id: '2',
      content: '두 번째 게시물',
      name: '운영자',
      date: '2020/11/20',
      hits: '4',
    },
    {
      id: '3',
      content: '세 번째 게시물',
      name: '운영자',
      date: '2020/11/20',
      hits: '5',
    },
    {
      id: '4',
      content: '네 번째 게시물',
      name: '운영자',
      date: '2020/11/20',
      hits: '2',
    },
  ])

  // 쿼리 스트링을 가져오기 위한 작업
  // TODO : 쿼리 스트링 값에 따라 제목 변경되게 수정 나중에 컨테이너에서 해줘야 될 것 같기도 함.
  const location = useLocation();
  let title = queryString.parse(location.search);

  return (
    <PostTemplateBlock>
      <div className="post-link">
        <ul>
          <li><a href="#">공지사항</a></li>
          <li className="divide-link">|</li>
          <li><a href="#">구매후기</a></li>
          <li className="divide-link">|</li>
          <li><a href="#">제휴안내</a></li>
          <li className="divide-link">|</li>
          <li><a href="#">질문과 답변</a></li>
        </ul>
      </div>

      <hr />

      <div className="post-title">
        [ {title.name} ] 
      </div>

      <div className="search">
        {children}
      </div>

      <div className="content">
        <table>
          <colgroup>
            <col width="50" />
            <col width="30" />
            <col width="75" />
            <col width="*" />
            <col width="110" />
            <col width="90" />
            <col width="60" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Content</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Hits</th>
            </tr>
          </thead>
          <PostList posts={posts} />
        </table>
        <PostWriteButton>
          <button>
            <FontAwesomeIcon icon={faEdit} /> 글쓰기
          </button>
        </PostWriteButton>
      </div>
    </PostTemplateBlock>
  );
};

export default PostTemplate;