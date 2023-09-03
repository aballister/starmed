import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.white};
    overflow: ${props => (props.isFixed ? 'hidden' : 'auto')};
`;

export default Container;