import styled from 'styled-components';

export const ContactForm = styled.form`
    padding: 30px 25px;
    width: 100%;
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 10px ${props => props.theme.colors.lightGrey};
    border-radius: 10px;
    @media (max-width: 767px) {
        padding: 25px 20px;
    }
`;

export const ContactFormTitle = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 767px) {
        font-size: 18px;
    }
`;

export const ContactFormField = styled.div`
    margin-bottom: 15px;
`;

export const ContactFormError = styled.p`
    font-size: 12px;
    color: ${props => props.theme.colors.red};
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${props => (props.hasError ? props.theme.colors.red : props.theme.colors.lightGrey)};
    height: 48px;
    font-size: 14px;
    border-radius: 5px;
    padding: 0 15px;
    margin-bottom: 5px;
    @media (max-width: 767px) {
        height: 42px;
    }
`;

export const Button = styled.input`
    width: 100%;
    height: 48px;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primaryBrand};
    font-size: 15px;
    text-transform: uppercase;
    border-radius: 5px;
    @media (max-width: 767px) {
        height: 42px;
    }
`;