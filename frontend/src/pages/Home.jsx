
function Home() {
    return (
        <>
            <main>
                <div id="carouse-caps" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouse-caps" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouse-caps" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouse-caps" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1213615970%2Fphoto%2Fgym-background-fitness-weight-equipment-on-empty-dark-floor.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DWyPxLxpfd9Pi6l0BMyWsqrrZIi_SrMmgTtYn8k08qQI%3D&f=1&nofb=1&ipt=ce06098a57535ef903d9add6c5e4c78d7ba9b7781a838fcc6e34b1cae1679d4e" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption d-none top-0 d-md-block car-cap">
                            <h1 className="display-1 fw-bold">First slide label</h1>
                            <p className="mt-4">Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item c-item">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F841130%2Fpexels-photo-841130.jpeg%3Fcs%3Dsrgb%26dl%3Daction-athlete-barbell-841130.jpg%26fm%3Djpg&f=1&nofb=1&ipt=bf020548dea3a1892bd865af0484243b20f0779b763c4b8a115626576d2dbf1b" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption d-none top-0 d-md-block car-cap">
                            <h1 className="display-1 fw-bold">Second slide label</h1>
                            <p className="mt-4">Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item c-item">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F026%2F727%2F090%2Flarge_2x%2Fgym-equipment-illustration-background-landscape-free-photo.jpg&f=1&nofb=1&ipt=3af35d5c4b69827dbf95173c70571577c5371b109e74b7e0cffc910182bfca1d" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption d-none top-0 d-md-block car-cap">
                            <h1 className="display-1 fw-bold">Third slide label</h1>
                            <p className="mt-4">Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouse-caps" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouse-caps" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div>
                    <h1>News & Announcements</h1>
                </div>
            </main>
        </>
    )
}

export default Home