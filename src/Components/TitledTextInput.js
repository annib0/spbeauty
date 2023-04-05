import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 16px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div ></div>) : 
        (<div>{title}</div>);
    return (
        <div className= 'd-flex flex-column gap-1'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;