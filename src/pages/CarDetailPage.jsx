import Layout from '../components/Layout'
import CarDetail from '../components/parts/CarDetail/CarDetail'
import ImageGalerry from '../components/parts/CarDetail/ImageGallery'

const carDetail = {
    image: [
        "/images/global/CarImage.svg"
    ],
    title: "Nissan GT-R",
    specs: [
        {
            icon: "/images/car-detail/seat.svg",
            title: "Tempat Duduk",
            desc: "4"
        },
        {
            icon: "/images/car-detail/trunk.svg",
            title: "Bagasi",
            desc: "1"
        },
        {
            icon: "/images/car-detail/steer.svg",
            title: "Transmisi",
            desc: "Otomatis"
        },
        {
            icon: "/images/car-detail/fuel.svg",
            title: "Bahan Bakar",
            desc: "Bensin"
        },
    ],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export default function CarDetailPage (){
    return(
        <Layout>
            <div className="container detail-container">
                <ImageGalerry images={carDetail?.image} />
                <CarDetail detail={carDetail} />
            </div>
        </Layout>
    )
}