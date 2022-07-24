import styled from 'styled-components';

const Todobox = styled.div`
  width: 96%;
  background-color: var(--main-color);
  border-radius: 10px;
  box-shadow: var(--main-shadow);
  padding: 20px 15px;
  margin-bottom: 20px;
  h3 {
    font-size: 21px;
    border-bottom: 1px solid var(--line-color);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 300;
    margin-bottom: 20px;
  }
  .buttonDelete {
    background-color: var(--main-color);
    border: 1px solid var(--text-color);
  }
  
`

export default Todobox;