import styled from 'styled-components';

const Listbox = styled.div`
  width:100%;
  .rowList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 180px;
    margin-bottom: 30px;
  }

`

export default Listbox;