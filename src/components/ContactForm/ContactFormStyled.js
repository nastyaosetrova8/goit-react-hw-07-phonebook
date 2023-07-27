import styled from 'styled-components';

export const ContactFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
    }

    label:not(:last-child){
        margin-bottom: 16px;
    }

    input {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        outline: transparent;
        border: none;
        width: 200px;
        height: 22px;
    }

    button {
        padding: 6px 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        transition: box-shadow 100ms linear;
        cursor: pointer;
    }
    
    button:hover,
    button:focus{
        box-shadow: none;
    }
`