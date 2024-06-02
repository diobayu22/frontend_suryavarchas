import { useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();

    const onSearchCar = (e) => {
        e.preventDefault();
        navigate('/pembelian');
    }
    return (
        <section>
            <div className="search-section">
                <div className="container">
                    <form onSubmit={onSearchCar}>
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            name="checkin_checkout"
                                            className="form-control daterange1"
                                            placeholder="Lokasi Penjemputan"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            name="checkin_checkout"
                                            className="form-control daterange1"
                                            placeholder="Tanggal Pengambilan"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            min="1"
                                            max="30"
                                            placeholder="Jam"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            min="1"
                                            max="30"
                                            placeholder="Tanggal Drop Off"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            min="1"
                                            max="30"
                                            placeholder=" Lokasi Dropoff"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}