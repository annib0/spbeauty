import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import { Col } from "react-bootstrap";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex align-items class="col" m-2 ps-5 gap-5'>
            <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;