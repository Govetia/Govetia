//import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Header from './Header'

function Banner() {
    const title = 'Govetia'
    return (
        <div className='gvt-banner'>
            
            <h1 className='gvt-title'>{title}</h1>
            <Header></Header>
        </div>
    )
}

export default Banner