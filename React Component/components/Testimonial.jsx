import { FaQuoteLeft } from "react-icons/fa6"
export default function Testimonial({photo}){
    return(
        <>
            <div className="testi-container">
                <img src={photo} loading="lazy" className='testi-photo' />
                <div className="testi-content">
                    <div class="quote-icon">
                        <FaQuoteLeft/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                    <div className='signature'>
                        <p><strong>May Andersons</strong></p>
                        <p>Workation,CTO</p>
                    </div>
                </div>
            </div>
        </>
    )
}