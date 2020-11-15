import styled from "styled-components";
import palette from "../../utils/styles/palette";

const GrayContaier = {
    border: `3px solid ${palette.gray[2]}`,
    paddingTop: '10px',
    margin: '30px',
};

const UserRank = styled.div`
    background: ${palette.yellow[1]};
    text-align: center;
    padding: 10px 0;
    margin: 20px 0 50px;
`;
const SpanRight = styled.span`
    float: right;
    text-align: right;
    
`;
const TextBlue = styled.span`
    color: ${palette.blue[6]};
    font-weight: bold;
`;

const TextRed = styled.span`
    color: red;
    font-weight: bold;
`;
const InformationDiv = styled.div`
    margin-top: 20px;
    padding: 20px 0;
`;
const Header = styled.h3`
    font-weight: bold;
    font-size: 20px;
`;
const BoldText = styled.p`
    font-weight: bold;
`;

export { Header, GrayContaier, UserRank, SpanRight, TextBlue, TextRed, InformationDiv, BoldText };