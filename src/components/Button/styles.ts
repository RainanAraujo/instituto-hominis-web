import styled from 'styled-components';

const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 240px;
    padding: 16px 32px;
    background-color: #215d7f;
    border-radius: 10px;

    color: white;
    transition:background-color .2s;
    &:hover {
        background-color: #2c78a3;
    }
    > p {
        color: white;
    }
`;

export default Container;
