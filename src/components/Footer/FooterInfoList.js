import React from 'react';
import { FooterInfoBlock, FooterInfo } from './FooterInfoList.style';
import Study from '../../utils/img/study.gif';
import { Link } from 'react-router-dom';

const FooterItem = ({ url, image }) => {
  return (
    <li>
      <Link to={url}><img src={image} /></Link>
    </li>
  )
}

const FooterInfoList = () => {

  const images = [
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
    {
      url: "#",
      image: Study,
    },
  ]

  return (
    <FooterInfoBlock>
      <FooterInfo>
        <ul>
          {images.map((image) => {
            return <FooterItem url={image.url} image={image.image} />
          })}
        </ul>
      </FooterInfo>
    </FooterInfoBlock>
  );
};

export default FooterInfoList;
