import { Link } from "react-router-dom";

export default function CarDetail({detail}){
    return (
        <div className="car-detail-container">
            <h1>{detail?.title}</h1>
            <h4>Spesifikasi</h4>
            <div className="specification">
                {detail?.specs?.map((item, index) => {
                    const { icon, title, desc } = item;
                    return (
                        <div key={index} className="spec">
                            <img src={icon} alt="" />
                            <div>
                                <p>{title}</p>
                                <p>{desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h4>Deskripsi</h4>
            <p>{detail?.desc}</p>
            <Link to="/pembelian" className="btn btn-primary rent">Rent Now</Link>
        </div>
    )
}