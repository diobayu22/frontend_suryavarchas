export default function AboutUs() {
    return (
        <section id="about-me ">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="hehe">
                        <h1>Tentang Kami</h1>
                    </div>
                    <div className="col-md-6 wow fadeInLeft">
                        <img src="/images/global/cars.png" className="img-fluid" />
                    </div>
                    <div className="col-md-6 wow fadeInDown">
                        <div className="about-box">
                            <div className="about-left">
                                <img src="/images/global/serviceOne.svg" alt="" />
                            </div>
                            <div className="about-right">
                                <h4>Menyediakan Supir</h4>
                                <p>
                                    Menyediakan pengemudi berpengalaman menjadikan perjalanan anda lebih nyaman dan aman
                                </p>
                            </div>
                        </div>

                        <div className="about-box">
                            <div className="about-left">
                                <img src="/images/global/serviceTwo.svg" alt="" />
                            </div>
                            <div className="about-right">
                                <h4>Lepas Kunci</h4>
                                <p>

                                    Kami menyediakan banyak pilihan armada dengan beberapa kategori, mulai dari  bus, minibus, elf dan kendaraan komersial.
                                </p>
                            </div>
                        </div>

                        <div className="about-box">
                            <div className="about-left">
                                <img src="/images/global/serviceThree.svg" alt="" />
                            </div>
                            <div className="about-right">
                                <h4>Flexible Time</h4>
                                <p>
                                    Selain menyediakan pengemudi kami juga melayani rental lepas kunci. Membuat perjalanan anda lebih nyaman.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}