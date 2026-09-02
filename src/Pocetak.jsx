import { AnimatePresence, motion } from "framer-motion";
import './Pocetak.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



function Pocetak() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="psitecontainer">
            <div className="navbar">

                <div className="logo">
                    <Link to='/' >

                    <motion.img whileTap={{ scale: 0.9 }} src="./arrow.svg" alt="" />
                    </Link>
                </div>







            </div>
            <div className="pall">

                <motion.div 
                className="phead"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.8}}
                >

                    <p className="ptitle">
                        Nije toliko tesko kao sto mislis.
                    </p>

                    <p className="psubtxt">
                        Učiš potpuno novi jezik: Kada počneš da učiš japanski ili španski, prirodno je da ti u početku sve zvuči kao šum. Sintaksa koda je isti takav strani jezik. Normalno je da deluje strano prvih nekoliko nedelja.
                        <br /><br />

                        Programiranje nije matematika iz svemira: Većina svakodnevnog programiranja (naročito web development) ne zahteva visoku matematiku već čistu logiku i slaganje kockica.

                    </p>

                </motion.div>

                <motion.div 
                className="pmid"
                    
                >

                    <motion.p 
                        className="ptitletwo"
                        initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.8}}
                    >
                        Kako da ucim programiranje?
                    </motion.p>

                    <motion.p 
                    className="psubtxttwo"
                    style={{ zIndex: 1}}
                   initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.8}}


                    >
                        Učenje programiranja najbrže napreduje kada se ne zaglaviš
                        u takozvanom „tutorial circle-u“ (beskonačnom gledanju tutorijala bez pisanja koda).
                        Ključ je u <strong>30%</strong>  teorije i <strong>70%</strong> praktičnog rada.





                    </motion.p>

                    <div 
                    className="psmer">

                        {/* <p className="psubtit">Izaberi jedan smer br i <br /> drzi ga se</p> */}
                        <motion.p
                            className="psubtxtthree"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true}}
                        >
                            Nemoj pokušavati da učiš sve odjednom (npr. i izradu sajtova i
                            veštačku inteligenciju). Fokusiraj se na
                            jednu oblast prvih nekoliko meseci:
                        </motion.p>

                    </div>


                      
                    </motion.div>


                    <motion.span
                        className="line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />


                    <div className="pend">
                        <p className="ptitlethree">
                            Kako da izaberem?
                        </p>


                        <div className="pboxw">
                        <motion.div
                            className="box"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            viewport={{ once: true, margin: '100px' }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>

                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>WebDev.</span> <br />
                                </div>





                                Kome leži: Ako voliš vizuelne stvari, dizajn, interakciju i želiš brzo da vidiš rezultat svog koda na ekranu.
                                Čime se počinje: HTML, CSS, pa JavaScript (kasnije React).
                                Prednost: Najlakši ulaz u svet kodiranja, ogromna zajednica i izuzetna traženost.

                            </p>
                        </motion.div>

                       


                        <motion.div
                            className="box"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Game Development</span> <br />

                                </div>



                                Kome leži: Ako te pokreće matematika, 2D/3D fizika, logika, animacije i dinamika igara.
                                Čime se počinje: Game engine kao što su Godot (uz GDScript) ili Unity (uz C#).
                                Prednost: Ekstremno zabavno za učenje jer direktno interaguješ sa svetom koji stvaraš.
                            </p>
                        </motion.div>


                       


                        <motion.div
                            className="box"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Python & Automacija / Machine Learning </span> <br />

                                </div>

                                Kome leži: Ako te privlači čista logika, rad sa podacima, skripte koje automatizuju dosadne zadatke ili veštačka inteligencija.
                                Čime se počinje: Python.
                                Prednost: Python ima najjednostavniju i najčitljiviju sintaksu (zvuči skoro kao engleski jezik).
                            </p>
                        </motion.div>

                       


                        <motion.div
                            className="box"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            viewport={{ once: true }}
                        >
                            <p className="boxcont">

                                <div className="subtitbw" style={{ marginBottom: '5px' }}>
                                    <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>Sistemsko & Low-Level Programiranje</span> <br />

                                </div>

                                Kome leži: Ako te zanima kako hardver zapravo funkcioniše, rad sa memorijom, operativni sistemi i mikrokontroleri.
                                Čime se počinje: C ili C++ (kasnije Rust).
                                Prednost: Daje ti duboko razumevanje računara „pod haubom“.

                            </p>
                        </motion.div>

                    </div>
                </div>


                


            </div>
            <footer className="foot">

                    <div className="txtonew">
                        <p className="foottit">CodeX</p>
                        <p className="fstxt">Aolikacija napravljena u edukativne svrhe. Za osnovno i napredno znanje u programiranju</p>

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
    )
}

export default Pocetak