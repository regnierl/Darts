import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Header.css'
import { showAboutPopup, showNewGamePopup } from '../../redux/Modals';

interface HeaderProps {
    isDarkMode: boolean;
    onToggleTheme: () => void;
}

function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const handleNewGame = () => { dispatch(showNewGamePopup(true)) }; 
    const handleOpenAbout = () => {
        dispatch(showAboutPopup(true));
        setIsMenuOpen(false);
    };
    const handleToggleTheme = () => {
        onToggleTheme();
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div className='header'>
            <button onClick={handleNewGame}>Nouvelle partie</button>
            <div className='header-menu' ref={menuRef}>
                <button
                    className='menu-button'
                    onClick={() => setIsMenuOpen(currentIsMenuOpen => !currentIsMenuOpen)}
                    aria-label='Ouvrir le menu'
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {isMenuOpen && (
                <div className='header-menu-content'>
                    <label className='theme-option'>
                        <span>{isDarkMode ? 'Mode sombre' : 'Mode clair'}</span>
                        <input
                            type='checkbox'
                            checked={isDarkMode}
                            onChange={handleToggleTheme}
                            aria-label='Activer le mode sombre'
                        />
                        <span className='theme-switch'></span>
                    </label>
                    <button onClick={handleOpenAbout}>A propos</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Header