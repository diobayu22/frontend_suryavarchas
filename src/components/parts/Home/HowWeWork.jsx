export default function HowWeWork(){
    return(
        <section>
            <div className="text-center pt-5 pb-5">
                <h1>Cara Kerja</h1>
                <span className="cara-kerja-1">Berikut Adalah Cara Kerja Kami</span>
            </div>
            <div className="container text-center">
                <div className="row how-we-work">
                    <div className="col">
                        <div className="orange-box">
                            <img className="logo-notepb-3" src="/images/global/HowWeWorkOne.svg" />
                            <h5>Pilih Lokasi</h5>
                            <span>
                                Tentukan lokasi penjemputan anda dan drop terlebih dahulu ya
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="orange-box">
                            <img className="logo-note pb-3" src="/images/global/HowWeWorkTwo.svg" />
                            <h5>Pilih Mobil</h5>
                            <span>Tentukan Mobil Yang Anda Sukai</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="orange-box">
                            <img className="logo-note pb-3" src="/images/global/HowWeWorkThree.svg" />
                            <h5>Tanggal Dan Waktu</h5>
                            <span>Tentukan Tanggal Dan Waktu</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="orange-box">
                            <img className="logo-note pb-3" src="/images/global/HowWeWorkFour.svg" />
                            <h5>Pembayaran</h5>
                            <span>Lakukan Pembayaran Pilih Dengan Sistem Cash Atau DP</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}