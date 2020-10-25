import React from 'react';
import { Row, Carousel, Col } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import mainsmall1 from './img/mainsmall1.gif';
import mainsmall2 from './img/mainsmall2.gif';
import jj1 from './img/jj1.gif';
import jj2 from './img/jj2.gif';
import jj3 from './img/jj3.gif';
import jj4 from './img/jj4.gif';
import bb1 from './img/bb1.gif';
import bb2 from './img/bb2.gif';
import bb3 from './img/bb3.gif';
import bb4 from './img/bb4.gif';

const MainContainer = () => {

  // 메인 레이아웃 설정
  const MainLayout = {
    width: '1200px',
    margin: '0 auto',
  }
  // 제목 폰트 가운데 설정
  const textAlignCenter = {
    textAlign: 'center',
  }
  // 슬라이더 설정
  const contentStyle = {
    height: '420px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  

  // 슬라이드 map함수
  function SnackList({ snackList }) {
    return (
      <Col span={4} style={textAlignCenter}>
        <p>id: {snackList.id}</p>
        <p>품명 : {snackList.title}</p>
        <p>가격 : {snackList.price}</p>
        {/* <button onClick={alert('click')}> */}
          <SearchOutlined  />
        {/* </button> */}
        
      </Col>
    );
  }

  // 임시 데이터 입력
  const snackLists = [
    {
      id: 1,
      title: '국희땅콩샌드',
      price: 4800,
    },
    {
      id: 2,
      title: '빼빼로',
      price: 8090,
    },
    {
      id: 3,
      title: '몽쉘 바나나',
      price: 2700,
    },
    {
      id: 4,
      title: '해바라기 초코볼',
      price: 1690,
    },
    {
      id: 5,
      title: '솜사탕 딸기향',
      price: 700,
    }
  ]

    return (
      <>
        <div style={MainLayout}>
          <Row>
            <Col span={24}>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
          
          <Row style={{margin: '20px 0', height: '280px'}} justify="space-around">
            <Col span={12}>
              <img src={mainsmall1} alt="과자 선물세트 무료배송" />
            </Col>
            
            <Col span={12}>
              <img src={mainsmall2} alt="과자마켓이 준비한 초특가 상품" />
            </Col>
          </Row>
          
          <h3 style={textAlignCenter}>초특가 할인</h3>
          <Row justify="space-around">
            {snackLists.map(snackList => (
              <SnackList snackList={snackList} />
            ))}
          </Row>
          
          <hr />
          <Row>
            <Col span={6}>
              <img src={jj1} alt="칙촉 55%할인" />
            </Col>
            <Col span={6}>
              <img src={jj2} alt="롯데 ABC초콜릿 56%할인" />
            </Col>
            <Col span={6}>
              <img src={jj3} alt="롯데 파인애플 65%할인" />
            </Col>
            <Col span={6}>
              <img src={jj4} alt="가나 초보다 55%할인" />
            </Col>
          </Row>
          <h3 style={textAlignCenter}>베스트 상품</h3>
          <Row justify="space-around">
            {snackLists.map(snackList => (
              <SnackList snackList={snackList} />
            ))}
          </Row>
          <hr />
          <Row>
            <Col span={6}>
              <img src={bb1} alt="세트상품" />
            </Col>
            <Col span={6}>
              <img src={bb2} alt="인기상품" />
            </Col>
            <Col span={6}>
              <img src={bb3} alt="신상품" />
            </Col>
            <Col span={6}>
              <img src={bb4} alt="특가상품" />
            </Col>
          </Row>
          <h3 style={textAlignCenter}>새로운 상품</h3>
          <Row justify="space-around">
            {snackLists.map(snackList => (
              <SnackList snackList={snackList} />
            ))}
          </Row>
          <h3 style={textAlignCenter}>특별상품</h3>
          <Row justify="space-around">
            {snackLists.map(snackList => (
              <SnackList snackList={snackList} />
            ))}
          </Row>
        </div>
      </>
    );
};

export default MainContainer;