export default function Footer() {
    return (
        <footer className="footer pb-5 pt-5">
            <div className="container">
                <div className="footer-row row justify-content-center">
                    <div className="col-md-3">
                        <img src="/images/footer/logo-footer.svg" className="footer-logo" />
                        <div className="logo-desc-container">
                            <h5 className="logo-desc">Kepuasan Pelanggan Adalah Tujuan Kami</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-title">Kontak Kami</h4>
                        <p><img src="/images/footer/Group.svg" alt="" /> Jl.Ry Popoh, Tulung Agung</p>
                        <p><img src="/images/footer/Vector-One.svg" alt="" /> +62 5677 8764 789</p>
                        <p><img src="/images/footer/Vector-Two.svg" /> suryavarchas01@gmail.com
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-title">Sosial Media</h4>
                        <div className="social-media-container">
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
