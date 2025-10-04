import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import './AnimatedThemeToggler.css'

export const AnimatedThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="animated-theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: theme === 'dark' ? '#1a1a1a' : '#e5e5e5',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: theme === 'dark' ? 20 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        >
          {theme === 'light' ? (
            <motion.svg
              key="sun"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          )}
        </motion.div>

        {/* Decorative stars for dark mode */}
        {theme === 'dark' && (
          <>
            <motion.div
              className="star star-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="star star-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.15 }}
            />
            <motion.div
              className="star star-3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </>
        )}

        {/* Decorative clouds for light mode */}
        {theme === 'light' && (
          <>
            <motion.div
              className="cloud cloud-1"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 0.6 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="cloud cloud-2"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ delay: 0.15 }}
            />
          </>
        )}
      </motion.div>
    </button>
  )
}

export default AnimatedThemeToggler
