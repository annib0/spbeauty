import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='ms-4 me-4 d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-4 me-4 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="mb-1">Салон красоты</div>
                <div className="mb-1">Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;