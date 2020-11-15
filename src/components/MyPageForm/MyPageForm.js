import React from "react";
import { Row, Col, Table } from "antd";

import { RightOutlined } from '@ant-design/icons';
import { MainLayout } from "../Main.style";
import { Header, GrayContaier, UserRank, SpanRight, TextBlue, TextRed, InformationDiv, BoldText } from "./MyPage.style";

const MyPageForm = () => {

    const columns = [
        {
          title: '주문일자',
          dataIndex: 'data',
        },
        {
          title: '상품명',
          dataIndex: 'product',
        },
        {
          title: '결제금액',
          dataIndex: 'price',
        },
       
      ];

    const dataSource = [
        {
          key: '1',
          data: 'Mike',
          product: 32,
          price: '10 Downing Street',
          
        },
        {
          key: '2',
          data: 'John',
          product: 42,
          price: '10 Downing Street',
          
        },
      ];
      
      
      
    return (
        <>
            <MainLayout>
                <Header>MYPAGE</Header>
                <hr />
                <Row gutter={[32, 8]} justify="space-around">
                    <Col span={14} style={GrayContaier}>
                        <p>정미옥[nh@5fa94]님
                            <button>수정</button>
                            <button>회원탈퇴</button>
                        </p>
                        <p>전  화:</p>
                        <p>이메일: j-narin@naver.com</p>
                        <p>주  소:</p>
                    </Col>
                    <Col span={7} style={GrayContaier}>
                        <p>총 주문금액: <SpanRight>0원</SpanRight></p>
                        <p>적립금: <SpanRight>0원</SpanRight></p>
                        <p>쿠  폰: <SpanRight>1개</SpanRight></p>
                    </Col>
                </Row>
                <UserRank>
                    <p>정미옥님은 <TextBlue>[일반고객]</TextBlue>회원입니다.</p>
                    <p>0원 이상 구매시, 구매금액의 1%를 <TextRed>추가 적립</TextRed>해 드립니다.</p>
                </UserRank>

                
                <InformationDiv>
                    <BoldText>최근 주문 정보<SpanRight><button>전체보기<RightOutlined /></button></SpanRight></BoldText>
                    
                    <Table dataSource={dataSource} columns={columns} />
                </InformationDiv>
                <InformationDiv>
                  <BoldText>최근 등록 게시글<SpanRight><button>전체보기<RightOutlined /></button></SpanRight></BoldText>
                    
                    <Table dataSource={dataSource} columns={columns} />
                </InformationDiv>
                <div>
                    <h3>관심 상품 정보</h3>
                    <button>상품보기<RightOutlined /></button>
                    <hr />
                </div>
                
            </MainLayout>
        </>
    );
};

export default MyPageForm;