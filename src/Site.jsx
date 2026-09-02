import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './Site.css'
import { useState, useEffect } from "react";

function Site() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);


    return (

        <div className="sitecon">
            <div className="navbar">

                <div className="logo">
                    <motion.p className="logotxt"
                    >
                        Code<span style={{ color: '#ffffff' }}>X</span>
                    </motion.p>
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)} >
                    <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} />
                    <motion.span animate={{ opacity: isOpen ? 0 : 1 }} />
                    <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} />
                </div>



                <AnimatePresence>
                    {isOpen && (

                        <motion.div
                            className="menu-bar"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 1 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >


                            <ul>
                                <li
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        setIsOpen(false);
                                    }}
                                >Pocetna</li>
                                <li>Operativni Sistemi</li>
                                <li>Linux</li>
                                <li>Windows</li>
                                <li>MacOS</li>
                            </ul>

                        </motion.div>
                    )}

                </AnimatePresence>



            </div>
            <div className="all">

                <div className="head">
                    <motion.p
                        className="title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        'Ucenje je <span className="mjk"> majka </span> <br /> <span style={{ fontSize: '2.3rem' }}>ponavljanja</span>'
                    </motion.p>

                    <motion.p
                        className="subtxt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    > Sve što ti treba za početak je malo Radoznalosti, strpljenja i dobra volja. </motion.p>

                    <Link to='/pocetak' style={{ textDecoration: 'none', zIndex: 1 }} >
                        <motion.button
                            className="btn"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                            whileTap={{ scale: 0.9 }}
                        >Pocetak</motion.button>

                    </Link>


                </div>

                <div className="mid">
                    <motion.p
                        className="mt"
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}

                    >Da li je tesko? </motion.p>

                    <motion.span
                        className="line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    <div className="boxw">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'ease', type: 'spring' }}

                            viewport={{ once: true, margin: '100px' }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>

                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Ne.</span> <br />
                                </div>





                                Programiranje nije rezervisano za „talentovane“,
                                već za one koji su spremni da se potrude.
                                Uzmite vreme da savladate osnove — može biti i
                                zabavno i edukativno, a sve posle ide lako!
                            </p>
                        </motion.div>

                        <motion.p
                            className="mt"
                            style={{ textAlign: 'center' }}
                            initial={{ opacity: 0, filter: 'blur(5px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}

                        > Sta je potrebno <br /> za programiranje? </motion.p>

                        <motion.span
                            className="line"
                            style={{ marginTop: '-15px' }}
                            className="line"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />


                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'ease', type: 'spring' }}

                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Ne toliko toga.</span> <br />

                                </div>



                                Sem necega na cemu bi radio, bio to laptop ili kompjuter, potrebno ti je samo strpljenje i paznja.
                                Jedan deo programiranja zahteva logicko razmisljanje, a dok drugi deo zahteva samo bubanje napamet.

                            </p>
                        </motion.div>


                        <motion.p
                            className="mt"
                            style={{ textAlign: 'center' }}
                            initial={{ opacity: 0, filter: 'blur(5px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >Sta se uci <br /> kod programiranja? </motion.p>
                        <motion.span
                            className="line"
                            style={{ marginTop: '-15px' }}
                            style={{ marginTop: '-15px' }}
                            className="line"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />


                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'ease', type: 'spring' }}

                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Razne stvari ;) </span> <br />

                                </div>


                                Programiranje je jedna ogromna oblast , i mnogo je vazno da izaberes ono sto ti lezi i ono sto volis. Bio to WebDev ili GameDev ili cak
                                ML ( Machine Learning ) za programiranje masina, dok ova oblast pokriva jezik koji direktno komunicira sa hardverom masine.

                            </p>
                        </motion.div>

                        <motion.p
                            className="mt"
                            style={{ textAlign: 'center' }}
                            initial={{ opacity: 0, filter: 'blur(5px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >Sta da radim <br /> jednom kada sam izabrao?</motion.p>
                        <motion.span
                            className="line"
                            style={{ marginTop: '-15px' }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />


                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'ease', type: 'spring' }}

                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Raspitaj se.. </span> <br />

                                </div>

                                Jednom kada izaberes sta hoces da radis, vrlo je bitno da znas sta da krenes da ucis prvo.
                                Recimo, ako krenes da ucis WebDev krenuces od HTML-a i CSS-a ( nista strasno, veruj mi ).
                                A, ako si izabrao GameDev, verovatno ces se prvo raspitati koji engine ili softver prvo da koristis.




                            </p>
                        </motion.div>

                    </div>
                </div>

                <div className="end">
                    <motion.span
                        className="line"
                        style={{ marginTop: '-15px' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    <motion.p
                        className="et"
                        style={{ color: '#ffffff', marginBottom: '100px', fontSize: '1.2rem', fontWeight: '600' }}
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Pa, ovo bi bilo <span className="etspan"> prvo upoznavanje </span> i uvod u prakticno sve ostalo :)
                    </motion.p>
                </div>

                <footer className="foot">

                    <div className="txtonew">
                        <p className="foottit">CodeX</p>
                        <p className="fstxt">Aplikacija napravljena u edukativne svrhe. Za osnovno i napredno znanje u programiranju</p>

                    </div>

                    <div className="linksw">
                        <p className="ltit">Navigacija</p>
                        <ul>
                            <li
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setIsOpen(false);
                                }}
                            >Pocetna</li>
                            <li>O Sajtu</li>
                            <li>Operativni Sistemi</li>
                        </ul>
                    </div>


                    <div className="linew">
                        <motion.span className="linef" />

                    </div>

                    <div className="ulinew">

                        <p className="uline">
                            © {new Date().getFullYear()} CodeX. Sva prava zadrzana.
                        </p>

                    </div>





                </footer>

            </div>
        </div>

    )


}

export default Site