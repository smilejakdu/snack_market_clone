import React, {useState} from "react";
import { MainLayout, SliderStyle, ButtonStyle, HrCenter, DivisionLine } from "./Main.style";
import "antd/dist/antd.css";
import { Row, Carousel, Col, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import mainsmall1 from "../utils/img/mainsmall1.gif";
import mainsmall2 from "../utils/img/mainsmall2.gif";
import jj1 from "../utils/img/jj1.gif";
import jj2 from "../utils/img/jj2.gif";
import jj3 from "../utils/img/jj3.gif";
import jj4 from "../utils/img/jj4.gif";
import bb1 from "../utils/img/bb1.gif";
import bb2 from "../utils/img/bb2.gif";
import bb3 from "../utils/img/bb3.gif";
import bb4 from "../utils/img/bb4.gif";

const MainContainer = () => {
  const [visible, setVisible] = useState(false);
  
  // 슬라이드 제목map
  const sliderHeaders = ['Test1', 'Test2', 'Test3'];
  const sliderHeaderList = sliderHeaders.map(sliderHeader => 
    <SliderStyle>
      <h3>{sliderHeader}</h3>
    </SliderStyle>
  );

  // 슬라이드 map함수
  function SnackList({ snackList }) {
    return (
      <Col span={4} style={{textAlign: 'center'}}>
        <p>id: {snackList.id}</p>
        <p>품명 : {snackList.title}</p>
        <p>가격 : {snackList.price}</p>
        <ButtonStyle type="primary" onClick={() => setVisible(true)}>
          <SearchOutlined />
        </ButtonStyle>
        <Modal
          title={snackList.title}
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={500}
          footer={null}
        >
          <p>품명 : {snackList.title}</p>
          <p>가격 : {snackList.price}</p>
        </Modal>

      </Col>
    );
  }

  // 임시 데이터 입력
  const snackLists = [
    {
      id: 1,
      title: "국희땅콩샌드",
      price: 4800,
    },
    {
      id: 2,
      title: "빼빼로",
      price: 8090,
    },
    {
      id: 3,
      title: "몽쉘 바나나",
      price: 2700,
    },
    {
      id: 4,
      title: "해바라기 초코볼",
      price: 1690,
    },
    {
      id: 5,
      title: "솜사탕 딸기향",
      price: 700,
    },
  ];

  return (
    <>
      <MainLayout>
        <Row>
          <Col span={24}>
            <Carousel autoplay>
              {sliderHeaderList}
            </Carousel>
          </Col>
        </Row>

        <Row
          style={{ margin: "20px 0", height: "280px" }}
          justify="space-around"
        >
          <Col span={12}>
            <img src={mainsmall1} alt="과자 선물세트 무료배송" />
          </Col>

          <Col span={12}>
            <img src={mainsmall2} alt="과자마켓이 준비한 초특가 상품" />
          </Col>
        </Row>

        <HrCenter>초특가 할인</HrCenter>
        <Row justify="space-around">
          {snackLists.map((snackList) => (
            <SnackList snackList={snackList} />
          ))}
        </Row>

        <DivisionLine />
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
        <HrCenter>베스트 상품</HrCenter>
        <Row justify="space-around">
          {snackLists.map((snackList) => (
            <SnackList snackList={snackList} />
          ))}
        </Row>
        <DivisionLine />
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
        <HrCenter>새로운 상품</HrCenter>
        <Row justify="space-around">
          {snackLists.map((snackList) => (
            <SnackList snackList={snackList} />
          ))}
        </Row>
        <HrCenter>특별상품</HrCenter>
        <Row justify="space-around">
          {snackLists.map((snackList) => (
            <SnackList snackList={snackList} />
          ))}
        </Row>
      </MainLayout>
    </>
  );
};

export default MainContainer;
