import React from 'react';
import { FooterInfoBlock, FooterInfo } from './FooterInfoList.style';
import Study from '../../utils/img/study.gif';

const FooterInfoList = () => {

  return (
    <FooterInfoBlock>
      <FooterInfo>
        <ul>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
          <li>
            <a href="#"><img src={Study} /></a>
          </li>
        </ul>
      </FooterInfo>
    </FooterInfoBlock>
  );
};

export default FooterInfoList;
