import { FaCheckCircle,FaExclamationTriangle,FaInfoCircle } from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"
import Badge from './components/Badge'
import Banner from './components/Banner'
import Tooltip from './components/Tooltip'
import icon from './assets/icon.png'
import profilePhoto from './assets/profile-photo.jpeg'
import Testimonial from "./components/Testimonial"
import './style.css'
export default function App(){
    return (
        <>
            <h1>Badges</h1>
            <div className='badges'>
                <Badge shape='square' color='grey' >
                    Badge
                 </Badge>
                <Badge shape='square' color='red'>
                    Badge
                </Badge>
                <Badge shape='square' color='yellow'>
                    Badge
                </Badge>
                <Badge shape='square' color='green'>
                    Badge
                </Badge>
                <Badge shape='square' color='blue'>
                    Badge
                </Badge>
                <Badge shape='square' color='indigo'>
                    Badge
                </Badge>
                <Badge shape='square' color='purple'>
                    Badge
                </Badge>
                <Badge shape='square' color='pink'>
                    Badge
                </Badge>
            </div>
            <div className='badges'>
                <Badge shape='pill' color='grey' >
                    Badge
                </Badge>
                <Badge shape='pill' color='red'>
                    Badge
                </Badge>
                <Badge shape='pill' color='yellow'>
                    Badge
                </Badge>
                <Badge shape='pill' color='green'>
                    Badge
                </Badge>
                <Badge shape='pill' color='blue'>
                    Badge
                </Badge>
                <Badge shape='pill' color='indigo'>
                    Badge
                </Badge>
                <Badge shape='pill' color='purple'>
                    Badge
                </Badge>
                <Badge shape='pill' color='pink'>
                    Badge
                </Badge>
            </div>
            <h1>Banner</h1>
            <Banner bannerType='success' lineType='single'>
                <FaCheckCircle/> Congratuation!
            </Banner>
            <Banner bannerType='warning' lineType='single'>
                <FaExclamationTriangle/> Attention!
            </Banner>
            <Banner bannerType='error' lineType='single'>
                <FaCheckCircle/> There is a problem with your application!
            </Banner>
            <Banner bannerType='neutral' lineType='single'>
                <FaInfoCircle/> Update available
            </Banner>
            <Banner bannerType='success' lineType='multiple'>
                <FaCheckCircle/>
                <div>
                    <p> Congratuation!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </div>
            </Banner>
            <Banner bannerType='warning' lineType='multiple'>
                <FaExclamationTriangle/>
                <div>
                    <p>Attention!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </div>
            </Banner>
            <Banner bannerType='error' lineType='multiple'>
                <FaCheckCircle/> 
                <div>
                    <p>There is a problem with your application!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </div>
            </Banner>
            <Banner bannerType='neutral' lineType='multiple'>
                <FaInfoCircle/>
                <div>
                    <p> Update available</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </div>
            </Banner>

            <h1>Tooltip</h1>
            <div className="section-tooltip">
            <Tooltip color='black' style='bold'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
                
                
            </Tooltip>
            
            <Tooltip color='blue' style='bold'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='pink' style='bold'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='green' style='bold'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='black' style='light'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='blue' style='light'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='pink' style='light'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            <Tooltip color='green' style='light'>
                <div>
                    <img src={icon} alt="icon" />
                </div>
                <div className="content">
                    <p><strong>Archive notes</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
                    <div className='polygon'>
                    </div>
                </div>
                x
            </Tooltip>
            </div>
            <h1>Testimonials</h1>
                <div className='testimoni'>
                <div className='desktop'>
                    <Testimonial photo={profilePhoto}/>  
                </div>
                <div className='mobile'>
                    <Testimonial photo={profilePhoto}/>
                </div>
            </div>
        </>
    )
}