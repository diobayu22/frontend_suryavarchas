import { Link } from "react-router-dom"

export default function CarCard({item}){
    const {
        title, 
        model, 
        image, 
        stockIcon, 
        stock, 
        gasTypeIcon, 
        gasType, 
        carTypeIcon, 
        carType
    } = item

    return(
        <div className="col-md-3">
            <Link to="/detail" className="car-card">
                <div className="inner">
                    <div className="photo">
                        <h5>{title}</h5>
                        <h6>{model}</h6>
                        <img className="car" src={image} alt="" />
                    </div>
                    <div className="code">
                        <img src={stockIcon} alt="" />
                        <span>{stock}</span>
                        <img src={gasTypeIcon} alt="" />
                        <span>{gasType}</span>
                        <img src={carTypeIcon} alt="" />
                        <span>{carType}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}