import styled from "styled-components";

export const Header = styled.header`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    background: #212529;
    text-align: left;
    color: #FFF;
    display: block;

    .header-content {       
        width: 80%;
        margin: auto;
        display: flex;

        .header-content-brand {
            display: inline-block;
            padding-top: .3225rem;
            padding-bottom: .3225rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap;
        }
    }
`;
