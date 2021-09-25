import React from 'react'
import styled, { css } from 'styled-components';

const StyledRow = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
    align-items: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'flex-start'};
    flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'no-wrap'};
    ${({row}) => row && css`
        flex-wrap: wrap;
        align-items: stretch;
        /* margin-right: -15px;
        margin-left: -15px; */
    `};
    ${({bg}) => bg && css`
        background: ${bg};
    `}
    .dotted {
        position: absolute;
    }
`;
const Row = ({className, ...props}) => {
    return (
        <StyledRow className={className ? className : ''} {...props} />
    )
}

export default Row;
