import { useEffect, useState } from "react";
// import Landscape2 from "../assets/pic2.avif"
import gif from "../assets/svg/beer-67.gif"

const Loader = () => {
    const [none, setNone] = useState(true)

    useEffect(() =>{
        setTimeout(() =>{
            setNone(false)
        }, 4000)
    }, [])
    return ( 
        <section className="loader-section">
            <img src={gif} alt="landscape" className="landscape-door" />
        </section>
     );
}
 
export default Loader;