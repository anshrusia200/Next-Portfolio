import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, DarkModeButton, Link, NavButton } from '../components';
import { fadeIn, slideIn } from '../animations';
import { author, navbarSection } from '../utils/portfolio';
import { getBreakpointsWidth, getId } from '../utils/helper';
import useWindowWidth from '../hooks/use-window-width';

/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */

const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 100,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      let curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = '0';
      prevScrollPos = curScrollPos;
    }
  };
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
  return (
    <motion.li
      className="group"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <Link
        href={href || `/#${children}`}
        className="p-2 hover:text-accent duration-500 block"
        onClick={onClick}
        withPadding
      >
        {children}
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="px-8 md:px-6 xl:px-12 py-4 fixed inset-x-0 top-0 right-0 flex justify-between items-end z-50 duration-500 backdrop-blur-lg"
    >
      <h1 className="font-signature text-accent capitalize text-2xl relative group top-1">
        <a href="/#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </a>
      </h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav
          className={`capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto`}
        >
          <ul
            className={`list-style-none flex flex-col gap-3 lg:gap-5 xl:gap-6 md:flex-row items-stretch md:items-center`}
          >
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}

            <div className="flex justify-between gap-5 xl:gap-6 items-center">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
