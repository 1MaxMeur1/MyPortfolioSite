import React, {useRef, useEffect, useState} from 'react'
import './header.css'
import {Container} from 'reactstrap'

interface Link {
    display: string,
    url: string
}

const NavLinks:Array<Link> = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Portfolio',
        url: '#portfolio'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]


const Header: React.FC = () => {


    const [isMobile, setIsMobile] = useState(false)

    const headerRef = useRef() as React.MutableRefObject<HTMLHeadElement>

    const toggleMenu = ():void => {
        if (isMobile === false) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        const _observeTopScroll = () => {
            window.addEventListener("scroll", () => {
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    headerRef.current.classList.add('header__shrink')
                } else {
                    headerRef.current.classList.remove('header__shrink')
                }
            })
        }
        _observeTopScroll()
        return () => {
            window.removeEventListener('scroll', _observeTopScroll)
        }
    }, [])


    const handleClick = (e: React.ChangeEvent<string | number | any>) => {
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 70
        })
    }

  return (
      <>
        <header className="header" ref={headerRef}>
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h5>MaxMeur</h5>
                    </div>
                    {
                        isMobile 
                        ? 
                        <div className="m__menu" onClick={toggleMenu}>
                            <ul className='mobile__list'>
                                {
                                    NavLinks.map((item:Link, index: number) => 
                                    <li key={index} className="mobile__item">
                                        <a href={item.url} onClick={handleClick}>{item.display}</a>
                                    </li>)
                                }
                            </ul>
                        </div> 
                        :
                        <div className="nav__menu">
                            <ul className="nav__list">
                            {
                                NavLinks.map((item:Link, index: number) => 
                                <li key={index} className="nav__item">
                                    <a href={item.url} onClick={handleClick}>{item.display}</a>
                                </li>)
                            }
                        </ul>
                    </div>
                    }
                    <div className="nav__right d-flex align-items-center gap gap-4">
                        <button className="nav__right-btn"><a href='https://t.me/kytek1'>Let's talk</a></button>
                    <span className="mobile__menu">
                        <i className="ri-menu-3-fill" onClick={toggleMenu}></i>
                    </span>
                </div>
                </div>
            </Container>
        </header>
      </>
  )
}

export default Header