import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { navCollapse, navIgationFadeIn } from '../../lib/animation/navIgationFadeIn'
import { MenuItem } from '../navigation/menuItem'

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Portfolio', link: '/#portfolio' },
  { label: 'Contact', link: '/#id' }
]

const SiteNavigation = ({ collapse }:{collapse:boolean}) => {
  const [hover, setHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return <div className={
      'w-full h-30 z-50 shadow-lg bg-theme-main-bg ' +
      (menuOpen ? 'fixed ' : 'block ')
    }>
    <div className={' h-[60px] w-full flex mt-[10px]'}>
        <Link href="/">
          <a
            className='flex z-50 flex-row ml-6 md:ml-12 lg:ml-20 '
          >
            <div className='h-12 w-12 mt-2 '>
              {/* <Image
                height={42}
                width={70}
                src={ Theme === 'dark' ? '/logo_white.svg' : '/logo_black.svg' }
                alt="logo"
              /> */}
            </div>
            <p
              className={'font-bold text-2xl mt-3 ml-7 ' + (menuOpen ? 'text-theme-text-main ' : 'opacity-80 ')}
            >Nexxt Construction</p>
          </a>

        </Link>
      <div
        style={{ display: (collapse ? 'none' : 'block') }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setMenuOpen(!menuOpen)}
        className={
          'ml-auto mr-6 z-50 sm:mr-20 md:mr-20 mt-2 cursor-pointer'
        }
      >
          <div
            className={
              'h-[3px] mt-2 transition-all transform  shadow-lg ' +
              (hover ? 'w-6 ml-1 mr-1 bg-theme-accent ' : menuOpen ? 'w-8 bg-theme-accent ' : 'w-8 bg-theme-text-main ') +
              (menuOpen ? '-rotate-45 translate-y-[0.6rem]' : 'rotate-0 ')
            }
          />
          <div
            className={
              'h-[3px] mt-2 transition-all transform  shadow-lg ' +
              (hover ? 'w-4 ml-2 mr-2 bg-theme-accent ' : menuOpen ? 'w-8 bg-theme-accent ' : 'w-8 bg-theme-text-main ') +
              (menuOpen ? 'opacity-0 ' : 'opacity-1 ')
            }
          />
          <div
            className={
              'h-[3px] mt-2 transition-all transform  shadow-lg ' +
              (hover ? 'w-6 ml-1 mr-1 bg-theme-accent ' : menuOpen ? 'w-8 bg-theme-accent ' : 'w-8 bg-theme-text-main ') +
              (menuOpen ? 'rotate-45 translate-y-[-0.8rem] ' : 'rotate-0 ')
            }
          />
      </div>
    </div>
    <motion.div
      className='z-40'
      initial='hidden'
      animate={ menuOpen ? 'visible' : 'hidden'}
      variants={ collapse ? navCollapse() : navIgationFadeIn()}
    >
      <div className={
        collapse
          ? 'absolute top-4  mt-2 right-8 md:right-10 lg:right-20 '
          : 'fixed top-0 w-full h-full bg-theme-main-bg '
      }>
        <nav className={
          collapse
            ? ' '
            : 'mt-[8%] flex justify-center text-theme-text-main '
        }>
          <ol className={
            collapse
              ? 'flex flex-row '
              : 'text-center tracking-widest mt-20 font-black '
          }>
            {
              menuItems.map((item, index) => {
                return <MenuItem
                  setMenuOpen={setMenuOpen}
                  collapse={collapse}
                  key={'menuItem' + index}
                  item={item}
                  index={index}
                  menuOpen={menuOpen}
                />
              })
            }
          </ol>
        </nav>
      </div>
    </motion.div>

  </div>
}
export default SiteNavigation
