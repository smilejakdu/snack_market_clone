import React, { useState } from 'react';
import { FooterBlock, FooterListBlock, PostList } from './FooterList.style';
import { Link } from 'react-router-dom';

const LinkItem = ({ url, title }) => {
  return (
    <li>
      <h4><Link to={url}>{title}</Link></h4>
    </li>
  )
}

const FooterList = ( /** 포스트 프롭 */) => {

  const links = [
    {
      url: "#",
      title: "회사소개",
    },
    {
      url: "#",
      title: "이용약관",
    },
    {
      url: "#",
      title: "개인정보처리방침",
    },
    {
      url: "#",
      title: "Q&A",
    }
  ];

  const posts = [
    {
      id: 1,
      title: '⋅ 리액트 스터티',
    },
    {
      id: 2,
      title: '⋅ 어렵다',
    },
    {
      id: 3,
      title: '⋅ 열심히 고고',
    }
  ];

  const abouts = [
    "주식회사 치킨개발",
    "주소 : 서울특별시 동작구 어쩌구 저쩌구",
    "대표이사: 김치킨 개인정보보호책임자: 김치킨",
    "사업자번호 : 000-00-000000",
    "통신판매 : 제 2020-서울동작-0001호",
    "Copyright (c) 2020 Chicken. All rights reserved.",
  ]

  return (
    <FooterBlock>
      <FooterListBlock>
        <PostList>
          <ul>
            {links.map((link) => {
              return <LinkItem url={link.url} title={link.title} />
            })}
            <li>
              <h4>-</h4>
            </li>
            <li>
              이메일무단수집거부
            </li>
            <li>
              개인정보보호기간 : 탈퇴시까지
            </li>
          </ul>
        </PostList>
        <PostList>
          <ul>
            <li>
              <h4 className="arrow">NOTICE & EVENT</h4>
            </li>
            {posts.map((post) => (
              <li className='content'><a href='#'>{post.title}</a></li>
            ))}
          </ul>
        </PostList>
        <PostList>
          <ul>
            <li>
              <h4 className="arrow">입금계좌안내</h4>
            </li>
            <li>
              국민 000000-000000-0000
            </li>
            <li>
              예금주 : (팀)치킨
            </li>
          </ul>
        </PostList>
        <PostList>
          <ul>
            <li>
              <h4 className="arrow">고객센터</h4>
            </li>
            <li className="number">
              <strong>02-000-0000</strong>
            </li>
            <li className="number">
              <strong>010-0000-0000</strong>
            </li>
            <li>
              이메일 chicken@react.org
            </li>
            <li>
              상담시간 10:00 ~ 18:00
            </li>
            <li>
              점심시간 12:00 ~ 13:00
            </li>
            <li>
              (토, 일, 공휴일 휴무)
            </li>
          </ul>
        </PostList>
        <PostList>
          <ul>
            {abouts.map((about) => {
              return <li>{about}</li>
            })}
          </ul>
        </PostList>
      </FooterListBlock>
    </FooterBlock>
  );
  };

export default FooterList;