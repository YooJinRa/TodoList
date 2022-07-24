import styled from 'styled-components';

const Headerbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    align-items: flex-end;
	border-bottom: 7px dashed var(--line-color);
    padding: 15px 0;
    margin-bottom: 20px;

    h1, p {
        display: inline-block;
        width: auto;
    }
    h1 {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 36px;
        font-weight: 500;
    }
    p {
        background-color: var(--line-color);
        border-radius: 10px;
        padding: 5px 15px;
    }

    
`

export default Headerbox;