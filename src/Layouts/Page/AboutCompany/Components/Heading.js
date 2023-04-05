import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between mt-5 me-5 ms-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <SecondaryButton className='me-5'>Закрыть запись</SecondaryButton>
        </div>
    );
}

export default Heading;