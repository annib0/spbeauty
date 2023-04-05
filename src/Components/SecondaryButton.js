import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        min-width: 217px;
        border-radius: 24px;
        color: #64748B;
        &:hover {
            background: #FFFFFF;
            opacity: 0.8;
        }
        &:active {
            background: #DFDFDF;
            opacity: 0.8;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;