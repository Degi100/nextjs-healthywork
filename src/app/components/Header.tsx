import Link from "next/link"
import Image from "next/image"

export const Header:React.FC = () => {
return <header className='navbar '>
    <div className="navbar-center"><Image src="/assets/logoComplete.png" alt="logo" height="100" width="400"/></div>

    <div className="navbar-end">
        <button className="px-3 btn btn-ghost "><Link href='/'>Startseite</Link> </button>
        <div className="px-3 btn btn-ghost"><Link href='/unternehmen'>Unternehmen</Link> </div>
        <div className="px-3 btn btn-ghost"><Link href='/leistungen'>Leistungen</Link> </div>
        <div className="px-3 btn btn-ghost"><Link href='/kontakt'>Kontakt</Link> </div>
        <div className="px-3 btn btn-ghost"><Link href='/impressum'>Impressum</Link> 

        </div>
    </div>
</header>
}