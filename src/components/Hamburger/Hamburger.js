import './Hamburger.css'
export default function HamburgerAniIcon({clickState}){
    const [isOpen, setIsOpen] = clickState;
    return (
        <div className={`hamburger-icon ${isOpen ? "hamburger-open" : ""}`}>
                        <span className='strokes'></span>
                        <span className='strokes'></span>
                        <span className='strokes'></span>
        </div>
    )
}