
const HeroSection = () => {

    const sName = "deba "

    return (
        <section className="hero" id="home">
            <div className="hero-photo-placeholder">
            </div>
            <div className="hero-copy">
                <span className="hero-tag"></span>
                <h1>
                <span className="light">hi, </span><span className="accent">{sName}</span>
                <span className="light">here.</span><span className="cursor"></span>
                </h1>
                <p className="hero-intro">
                    Diploma Computer Engineering student enjoys coding by day and making little projects and Learning web development and Python
                    and art by night.
                </p>
                <div className="hero-actions">
                    <a className="btn btn-outline" href="mailto:dp0000000004@gmail.com">✉ Say hi!</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection