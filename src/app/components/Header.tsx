import Link from "next/link"

export const Header:React.FC = () => {
return <header className='navbar bg-base-100'>
    <div className="navbar-start">LOGO</div>

    <div className="navbar-end">
        <div className="px-3"><Link href='/'>Startseite</Link> </div>
        <div className="px-3"><Link href='/unternehmen'>Unternehmen</Link> </div>
        <div className="px-3"><Link href='/leistungen'>Leistungen</Link> </div>
        <div className="px-3"><Link href='/kontakt'>Kontakt</Link> </div>
        <div className="px-3"><Link href='/impressum'>Impressum</Link> 
        </div>
    </div>
</header>
}