import styled from 'styled-components';
import PrimaryButton from '../../../../../Components/PrimaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 16px;
    border: solid #152842 0px;
    background-color: #ffffff;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex justify-content-between align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-2 my-2'>{props.children}</Option>
            <EditIcon>Ред.</EditIcon>
            <RemoveIcon></RemoveIcon>
        </div>
    );
}

export default ListElement;