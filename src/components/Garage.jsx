import CarCard from "./CarCard";

const fakeCarStructure = {
    title: "All New Toyota",
    model: "Toyota",
    image: "/images/toyota/all-new-toyota.png",
    stockIcon: "/images/toyota/car.svg",
    stock: "7",
    gasTypeIcon: "/images/toyota/gas-station.svg",
    gasType: "Gasoline",
    carTypeIcon: "/images/toyota/frame.svg",
    carType: "SUV",
  };

const fakeCarsArray = []

for (let i = 0; i < 2; i++) {
    let tempArr = []
    for (let j = 0; j < 4; j++) {
        tempArr.push({ "id": j, ...fakeCarStructure });
    }
    fakeCarsArray.push(tempArr)
}

export default function Garage(){
    return (
        <div className="blog-item pt-5 pb-5">
            <div className="container">
            {fakeCarsArray?.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>  {/* Key on the outer row */}
                    {row?.map((item, itemIndex) => (
                        <CarCard key={itemIndex} item={item} />
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}