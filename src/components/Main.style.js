import styled from "styled-components";
import palette from '../utils/styles/palette';

const MainLayout = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const SliderStyle = styled.div`
    height: 420px;
    color: #fff;
    lineHeight: 160px;
    textAlign: center;
    background ${palette.orange[6]};
`;

const ButtonStyle = styled.button`
    background: ${palette.gray[3]};
    border: 1px solid ${palette.gray[3]};
`;

const HrCenter = styled.h3`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    font-size: 20px;
    margin: 70px 0px 30px;
    &:before,
    &:after{
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 30px;
    }
`;

const DivisionLine = styled.hr`
    margin: 50px 0;
`;

export { MainLayout, SliderStyle, ButtonStyle, HrCenter, DivisionLine };