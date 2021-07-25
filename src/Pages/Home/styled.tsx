import styled from "styled-components";

export const Main = styled.main`
    min-height: 100%;
    display: block;
`;

export const Container = styled.div`
    min-height: 100%;
    width: 80%;
    height: 100%;
    margin: 0 auto 0 auto;
    background-color: rgba(0,0,0,0.6);
    padding: 15px;
    display: flex;
    padding-bottom: 100px;

`;

export const Section = styled.section`
    min-height: 100%;
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;

    .product {
        display: grid;
        padding: 10px;
        justify-content: center;
        text-align: center;
        background-color: #fff; 
        width: 300px;
        border-radius: 12px;
        height: 500px;
        margin-bottom: 15px;
    }
`;
