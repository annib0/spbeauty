import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='justify-content-between'>
            <div className='col m-4 gap-5'>
            <div className='title m-4'>Адреса заведений</div>
            <div className='col m-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <div className='my-5'><SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Addresses;