import '../styles/Header.css'

function Header() {
    const catchphrase = 'Des sites web et applications mobiles faîtes avec goût axées sur la meilleure expérience utilisateur possible'
    return (
        <div className='gvt-header'>
            
            <h1 className='gvt-catchphrase'>{catchphrase}</h1>
        </div>
    )
}

export default Header