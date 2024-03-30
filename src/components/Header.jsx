import '../styles/Header.css'

function Header() {
    const catchphrase = 'Votre vision, notre créativité : Des sites web qui marquent les esprits.'
    return (
        <div className='gvt-header'>
            <h1 border="300px inset #ccc" p="40" borderRadius="md" className='gvt-catchphrase'>{catchphrase}</h1>
        </div>
    )
}

export default Header