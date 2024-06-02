export default function Footer(){
    return(
        <footer className=" footer pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/footer/logo-footer.svg" className="footer-logo" />
                        <p>Kepuasan Pelanggan Adalah Tujuan Kami</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Kontak Kami</h4>
                        <p><img src="/images/footer/Group.svg" alt="" /> Jl.Ry Popoh,Tulung Agung</p>
                        <p><img src="/images/footer/Vector-One.svg" alt="" /> +62 5677 8764 789</p>
                        <p><img src="/images/footer/Vector-Two.svg" /> suryavarchas01@gmail.com
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us on</h4>
                        <div className="footer-logo">
                            <img className="logo-1" src="/images/footer/Subtract-Two.svg" />
                            <img className="logo-1" src="/images/footer/Subtract-Three.svg" />
                            <img className="logo-1" src="/images/footer/Subtract-One.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}