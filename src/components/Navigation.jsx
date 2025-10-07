import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Github, Twitter, Linkedin, Zap, Shield, Users, Database, BarChart3, Link, ShoppingCart, Lock, Cpu, Globe } from 'lucide-react'
import { SiTelegram, SiWhatsapp, SiDiscord } from 'react-icons/si'
import { Drawer } from 'vaul'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedThemeToggler from './AnimatedThemeToggler'
import AwardBadge from './AwardBadge'
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuContent, 
  NavigationMenuTrigger,
  NavGridCard,
  NavSmallItem
} from './NavigationMenu'
import './Navigation.css'
import './MegaDropdown.css'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const productsRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        // Check if the clicked element is the dropdown trigger button
        const isDropdownTrigger = event.target.closest('.drawer-link');
        if (!isDropdownTrigger) {
        setIsProductsOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Product links for the new dropdown
  const productLinks = [
    {
      title: 'Website Builder',
      description: 'Create responsive websites with ease',
      icon: Zap,
      href: '#website-builder'
    },
    {
      title: 'Cloud Platform',
      description: 'Deploy and scale apps in the cloud',
      icon: Shield,
      href: '#cloud-platform'
    },
    {
      title: 'Team Collaboration',
      description: 'Tools to help your teams work better together',
      icon: Users,
      href: '#team-collaboration'
    }
  ]

  // Company links for the sidebar
  const companyLinks = [
    {
      title: 'Analytics',
      description: 'Track your performance',
      icon: BarChart3,
      href: '#analytics'
    },
    {
      title: 'Integrations',
      description: 'Connect with other tools',
      icon: Link,
      href: '#integrations'
    },
    {
      title: 'E-Commerce',
      description: 'Sell products online',
      icon: ShoppingCart,
      href: '#ecommerce'
    },
    {
      title: 'Security',
      description: 'Keep your data safe',
      icon: Lock,
      href: '#security'
    },
    {
      title: 'API',
      description: 'Build with our API',
      icon: Cpu,
      href: '#api'
    },
    {
      title: 'Database',
      description: 'Store and manage data',
      icon: Database,
      href: '#database'
    }
  ]

  const products = [
    { 
      name: 'Website Builder', 
      description: 'Create responsive websites with ease',
      icon: '🌐'
    },
    { 
      name: 'Cloud Platform', 
      description: 'Deploy and scale apps in the cloud',
      icon: '☁️'
    },
    { 
      name: 'Team Collaboration', 
      description: 'Tools to help your teams work better together',
      icon: '👥'
    }
  ]

  const sidebarItems = [
    { name: 'Analytics', icon: '📊' },
    { name: 'Integrations', icon: '🔗' },
    { name: 'E-Commerce', icon: '💰' },
    { name: 'Security', icon: '🔒' },
    { name: 'API', icon: '⚡' }
  ]

  const navLinks = [
    { label: 'Rules', href: '#rules', icon: 'flame' },
    { label: 'Setup', href: '#setup', icon: 'video' },
    { label: 'Gallery', href: '#gallery', icon: 'image' },
    { label: 'Courses', href: '#courses', icon: 'book-open' },
    { label: 'Changelog', href: '#changelog', icon: 'arrows-bold-opposite-direction' },
  ]

  return (
    <header className="nav-header">
      <div className="nav-wrapper">
        <div className="nav-card">
          {/* Mobile Drawer */}
          {isMobile && (
            <Drawer.Root direction="left" open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <Drawer.Trigger className="mobile-drawer-trigger">
                <Menu size={20} />
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="drawer-overlay" />
                <Drawer.Content className="drawer-content">
                  <div className={`drawer-inner ${isDarkTheme ? '' : 'white-theme'}`}>
                    <div className="drawer-header">
                      <a href="/" className="logo-link">
                        VNHAX
                      </a>
                      <button className="drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* User Profile - Only show when user is logged in */}
                    {false && (
                      <div className="user-profile">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                          alt="User Avatar" 
                          className="user-avatar"
                        />
                        <div className="user-info">
                          <h3>Alexis Enache</h3>
                          <p>Webpixels</p>
                        </div>
                      </div>
                    )}
                    
                    <nav className={`drawer-nav ${isMobile && isProductsOpen ? 'products-open' : ''}`}>
                      <div className="nav-section">
                        <div className="section-title">MENU</div>
                      {navLinks.map((item) => (
                        <a key={item.href} href={item.href} className="drawer-link">
                            <span className="link-icon">
                              {item.icon === 'flame' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="flame-icon">
                                  <title>flame</title>
                                  <g fill="none">
                                    <path d="M7 16.5C7.00033 14.015 10.3333 9 12 9C13.6667 9 16.9997 14.015 17 16.5C17 18.9853 14.7614 21 12 21C9.23858 21 7 18.9853 7 16.5Z" fill="url(#1752500502786-1158493_flame_existing_0_0jvmarv00)" data-glass="origin" mask="url(#1752500502786-1158493_flame_mask_mvpaiikzi)"></path>
                                    <path d="M7 16.5C7.00033 14.015 10.3333 9 12 9C13.6667 9 16.9997 14.015 17 16.5C17 18.9853 14.7614 21 12 21C9.23858 21 7 18.9853 7 16.5Z" fill="url(#1752500502786-1158493_flame_existing_0_0jvmarv00)" data-glass="clone" filter="url(#1752500502786-1158493_flame_filter_0j9r2im8d)" clip-path="url(#1752500502786-1158493_flame_clipPath_sxszljr6s)"></path>
                                    <path d="M12.3555 1.17975C12.6333 1.22007 12.8835 1.42661 13.3828 1.8399C14.5704 2.8229 15.6975 3.87361 16.7432 5.01569C17.7733 6.14079 18.827 7.46472 19.627 8.88092C20.4224 10.2894 21.0058 11.8567 21.0059 13.4503C21.0058 18.9618 16.2992 22 12.0059 22.0001C7.71247 22.0001 3.00593 18.9618 3.00586 13.4503C3.00601 11.6543 3.31206 9.81195 3.64062 7.99908C3.79551 7.14453 3.87278 6.71677 4.0918 6.49615C4.28495 6.30176 4.54241 6.19717 4.81641 6.20123C5.1273 6.20598 5.47988 6.45692 6.18457 6.95807L8.20117 8.39166L10.9971 2.40631C11.2819 1.79667 11.4252 1.49135 11.6592 1.336C11.8588 1.20356 12.1184 1.1454 12.3555 1.17975ZM12 11.0001C10.8333 11.0001 8.50023 14.7613 8.5 16.6251C8.50004 18.4372 9.98124 19.9144 11.8398 19.9952C11.8929 19.998 11.9463 20.0001 12 20.0001C12.0534 20.0001 12.1065 19.9979 12.1592 19.9952C14.0182 19.9149 15.5 18.4375 15.5 16.6251C15.4998 14.7613 13.1667 11.0001 12 11.0001Z" fill="url(#1752500502786-1158493_flame_existing_1_ifl9pmc10)" data-glass="blur"></path>
                                    <path d="M20.2559 13.4502C20.2558 12.0346 19.7348 10.5978 18.9736 9.24998C18.2113 7.90036 17.1979 6.62288 16.1904 5.52244C15.1713 4.40939 14.0694 3.38232 12.9043 2.41795C12.6434 2.20201 12.4875 2.0739 12.3643 1.99022C12.2508 1.9132 12.2285 1.91902 12.248 1.92186C12.1936 1.91397 12.1202 1.93055 12.0742 1.96092C12.0932 1.94818 12.069 1.95276 11.9951 2.07909C11.9162 2.21411 11.8252 2.40593 11.6768 2.72362L8.5 9.5244L5.75 7.56932C5.38629 7.31066 5.15404 7.14608 4.97461 7.041C4.864 6.97625 4.80992 6.9562 4.79395 6.95116C4.73159 6.95276 4.6774 6.97574 4.63184 7.01854C4.62295 7.03562 4.59824 7.08828 4.56543 7.20799C4.51016 7.40968 4.4589 7.69146 4.37891 8.1328C4.09107 9.72091 3.83039 11.2833 3.76953 12.8017L3.75586 13.4502C3.75586 18.4345 8.00368 21.25 12.0059 21.25V22C7.71243 22 3.00586 18.9618 3.00586 13.4502C3.00601 11.6542 3.31205 9.8119 3.64062 7.99901C3.79555 7.14422 3.87362 6.71664 4.09277 6.49608C4.286 6.30177 4.54336 6.19697 4.81738 6.20116C5.12816 6.20611 5.48024 6.4571 6.18457 6.95799L8.20117 8.39159L10.998 2.40623C11.2474 1.87247 11.3872 1.57205 11.5752 1.40135L11.6592 1.33592C11.8589 1.20346 12.1183 1.14532 12.3555 1.17967C12.6334 1.21995 12.8834 1.42647 13.3828 1.83983C14.5704 2.82285 15.6974 3.87349 16.7432 5.01561C17.7733 6.14074 18.827 7.46459 19.627 8.88084C20.4224 10.2893 21.0058 11.8566 21.0059 13.4502C21.0059 18.9618 16.2993 22 12.0059 22V21.25C16.008 21.25 20.2559 18.4345 20.2559 13.4502Z" fill="url(#1752500502786-1158493_flame_existing_2_08mg3tqyo)"></path>
                                    <defs>
                                      <linearGradient id="1752500502786-1158493_flame_existing_0_0jvmarv00" x1="12" y1="9" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502786-1158493_flame_existing_1_ifl9pmc10" x1="12.006" y1="1.17" x2="12.006" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502786-1158493_flame_existing_2_08mg3tqyo" x1="12.006" y1="1.17" x2="12.006" y2="13.233" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502786-1158493_flame_filter_0j9r2im8d" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502786-1158493_flame_clipPath_sxszljr6s">
                                        <path d="M12.3555 1.17975C12.6333 1.22007 12.8835 1.42661 13.3828 1.8399C14.5704 2.8229 15.6975 3.87361 16.7432 5.01569C17.7733 6.14079 18.827 7.46472 19.627 8.88092C20.4224 10.2894 21.0058 11.8567 21.0059 13.4503C21.0058 18.9618 16.2992 22 12.0059 22.0001C7.71247 22.0001 3.00593 18.9618 3.00586 13.4503C3.00601 11.6543 3.31206 9.81195 3.64062 7.99908C3.79551 7.14453 3.87278 6.71677 4.0918 6.49615C4.28495 6.30176 4.54241 6.19717 4.81641 6.20123C5.1273 6.20598 5.47988 6.45692 6.18457 6.95807L8.20117 8.39166L10.9971 2.40631C11.2819 1.79667 11.4252 1.49135 11.6592 1.336C11.8588 1.20356 12.1184 1.1454 12.3555 1.17975ZM12 11.0001C10.8333 11.0001 8.50023 14.7613 8.5 16.6251C8.50004 18.4372 9.98124 19.9144 11.8398 19.9952C11.8929 19.998 11.9463 20.0001 12 20.0001C12.0534 20.0001 12.1065 19.9979 12.1592 19.9952C14.0182 19.9149 15.5 18.4375 15.5 16.6251C15.4998 14.7613 13.1667 11.0001 12 11.0001Z" fill="url(#1752500502786-1158493_flame_existing_1_ifl9pmc10)"></path>
                                      </clipPath>
                                      <mask id="1752500502786-1158493_flame_mask_mvpaiikzi">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M12.3555 1.17975C12.6333 1.22007 12.8835 1.42661 13.3828 1.8399C14.5704 2.8229 15.6975 3.87361 16.7432 5.01569C17.7733 6.14079 18.827 7.46472 19.627 8.88092C20.4224 10.2894 21.0058 11.8567 21.0059 13.4503C21.0058 18.9618 16.2992 22 12.0059 22.0001C7.71247 22.0001 3.00593 18.9618 3.00586 13.4503C3.00601 11.6543 3.31206 9.81195 3.64062 7.99908C3.79551 7.14453 3.87278 6.71677 4.0918 6.49615C4.28495 6.30176 4.54241 6.19717 4.81641 6.20123C5.1273 6.20598 5.47988 6.45692 6.18457 6.95807L8.20117 8.39166L10.9971 2.40631C11.2819 1.79667 11.4252 1.49135 11.6592 1.336C11.8588 1.20356 12.1184 1.1454 12.3555 1.17975ZM12 11.0001C10.8333 11.0001 8.50023 14.7613 8.5 16.6251C8.50004 18.4372 9.98124 19.9144 11.8398 19.9952C11.8929 19.998 11.9463 20.0001 12 20.0001C12.0534 20.0001 12.1065 19.9979 12.1592 19.9952C14.0182 19.9149 15.5 18.4375 15.5 16.6251C15.4998 14.7613 13.1667 11.0001 12 11.0001Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : item.icon === 'arrows-bold-opposite-direction' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="arrows-bold-opposite-direction-icon">
                                  <title>arrows-bold-opposite-direction</title>
                                  <g fill="none">
                                    <path d="M12 15.1099V12.134H18.5C19.3284 12.134 20 11.4624 20 10.634L20 6.63397C20 5.80555 19.3284 5.13398 18.5 5.13398L12 5.13398V2.15802C12 0.917543 10.58 0.213184 9.59238 0.963774L1.07138 7.43974C0.281546 8.04001 0.281546 9.22795 1.07138 9.82822L9.59238 16.3042C10.58 17.0548 12 16.3504 12 15.1099Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8)" data-glass="origin" mask="url(#1752500502765-1219022_arrows-bold-opposite-direction_mask_m1tbxjjqc)"></path>
                                    <path d="M12 15.1099V12.134H18.5C19.3284 12.134 20 11.4624 20 10.634L20 6.63397C20 5.80555 19.3284 5.13398 18.5 5.13398L12 5.13398V2.15802C12 0.917543 10.58 0.213184 9.59238 0.963774L1.07138 7.43974C0.281546 8.04001 0.281546 9.22795 1.07138 9.82822L9.59238 16.3042C10.58 17.0548 12 16.3504 12 15.1099Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8)" data-glass="clone" filter="url(#1752500502765-1219022_arrows-bold-opposite-direction_filter_fjwlm2igw)" clip-path="url(#1752500502765-1219022_arrows-bold-opposite-direction_clipPath_06b3zrgty)"></path>
                                    <path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh)" data-glass="blur"></path>
                                    <path d="M4 17.4996V13.4996C4.0001 12.6712 4.67165 11.9996 5.5 11.9996H12V9.024C12 7.78361 13.4196 7.07932 14.4072 7.82966L22.9287 14.3052C23.7185 14.9055 23.7184 16.0936 22.9287 16.6939L14.4072 23.1695C13.4505 23.8966 12.0881 23.2588 12.0039 22.0904L12 21.9761V18.9996H5.5V18.2496H12.75V21.9761C12.7503 22.5961 13.4604 22.948 13.9541 22.5728L22.4746 16.0972C22.8695 15.7971 22.8695 15.203 22.4746 14.9029L13.9541 8.42634C13.4603 8.05104 12.75 8.40376 12.75 9.024V12.7496H5.5C5.08586 12.7496 4.7501 13.0855 4.75 13.4996V17.4996C4.75 17.9138 5.08579 18.2496 5.5 18.2496V18.9996L5.34668 18.9918C4.59028 18.915 4 18.2762 4 17.4996Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_2_p9nlanf69)"></path>
                                    <defs>
                                      <linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8" x1="10.239" y1=".655" x2="10.239" y2="16.613" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh" x1="24.5" y1="15.5" x2="4" y2="15.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_2_p9nlanf69" x1="13.761" y1="7.521" x2="13.761" y2="16.762" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502765-1219022_arrows-bold-opposite-direction_filter_fjwlm2igw" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502765-1219022_arrows-bold-opposite-direction_clipPath_06b3zrgty">
                                        <path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh)"></path>
                                      </clipPath>
                                      <mask id="1752500502765-1219022_arrows-bold-opposite-direction_mask_m1tbxjjqc">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : item.icon === 'video' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="video-icon">
                                  <title>video</title>
                                  <g fill="none">
                                    <path d="M21.8291 7.08496C22.8263 6.58642 23.9998 7.31188 24 8.42676V15.5732C23.9998 16.6881 22.8263 17.4136 21.8291 16.915L15.5781 13.7891C14.104 13.052 14.104 10.948 15.5781 10.2109L21.8291 7.08496ZM5.5 6C6.8807 6.00002 8 7.1193 8 8.5C7.99998 9.88068 6.88069 11 5.5 11C4.1193 11 3.00002 9.88069 3 8.5C3 7.11929 4.11929 6 5.5 6Z" fill="url(#1752500502812-5740093_video_existing_0_dbpfea8jj)" data-glass="origin" mask="url(#1752500502812-5740093_video_mask_a931ih6v4)"></path>
                                    <path d="M21.8291 7.08496C22.8263 6.58642 23.9998 7.31188 24 8.42676V15.5732C23.9998 16.6881 22.8263 17.4136 21.8291 16.915L15.5781 13.7891C14.104 13.052 14.104 10.948 15.5781 10.2109L21.8291 7.08496ZM5.5 6C6.8807 6.00002 8 7.1193 8 8.5C7.99998 9.88068 6.88069 11 5.5 11C4.1193 11 3.00002 9.88069 3 8.5C3 7.11929 4.11929 6 5.5 6Z" fill="url(#1752500502812-5740093_video_existing_0_dbpfea8jj)" data-glass="clone" filter="url(#1752500502812-5740093_video_filter_nc41ks8bs)" clip-path="url(#1752500502812-5740093_video_clipPath_vtj9f1llm)"></path>
                                    <path d="M14 4C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H5C2.79086 20 1 18.2091 1 16V8C1 5.79086 2.79086 4 5 4H14ZM5.5 7C4.67157 7 4 7.67157 4 8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5C7 7.67157 6.32843 7 5.5 7Z" fill="url(#1752500502812-5740093_video_existing_1_w4sfz2p1h)" data-glass="blur"></path>
                                    <path d="M14 4C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H5C2.79086 20 1 18.2091 1 16V8C1 5.79086 2.79086 4 5 4H14ZM5 4.75C3.20508 4.75 1.75 6.20508 1.75 8V16L1.75391 16.167C1.84082 17.8843 3.26108 19.25 5 19.25H14L14.167 19.2461C15.829 19.162 17.162 17.829 17.2461 16.167L17.25 16V8L17.2461 7.83301C17.162 6.17099 15.829 4.83802 14.167 4.75391L14 4.75H5Z" fill="url(#1752500502812-5740093_video_existing_2_k425tjp5d)"></path>
                                    <defs>
                                      <linearGradient id="1752500502812-5740093_video_existing_0_dbpfea8jj" x1="13.5" y1="6" x2="13.5" y2="17.075" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502812-5740093_video_existing_1_w4sfz2p1h" x1="9.5" y1="4" x2="9.5" y2="20" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502812-5740093_video_existing_2_k425tjp5d" x1="9.5" y1="4" x2="9.5" y2="13.266" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502812-5740093_video_filter_nc41ks8bs" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502812-5740093_video_clipPath_vtj9f1llm">
                                        <path d="M14 4C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H5C2.79086 20 1 18.2091 1 16V8C1 5.79086 2.79086 4 5 4H14ZM5.5 7C4.67157 7 4 7.67157 4 8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5C7 7.67157 6.32843 7 5.5 7Z" fill="url(#1752500502812-5740093_video_existing_1_w4sfz2p1h)"></path>
                                      </clipPath>
                                      <mask id="1752500502812-5740093_video_mask_a931ih6v4">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M14 4C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H5C2.79086 20 1 18.2091 1 16V8C1 5.79086 2.79086 4 5 4H14ZM5.5 7C4.67157 7 4 7.67157 4 8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5C7 7.67157 6.32843 7 5.5 7Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : item.icon === 'image' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="image-icon">
                                  <title>image</title>
                                  <g fill="none">
                                    <path d="M18 3C20.2091 3 22 4.79086 22 7V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15L2 7C2 4.79086 3.79086 3 6 3L18 3Z" fill="url(#1752500502792-4934513_image_existing_0_javw1hgdp)" data-glass="origin" mask="url(#1752500502792-4934513_image_mask_g3cets1it)"></path>
                                    <path d="M18 3C20.2091 3 22 4.79086 22 7V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15L2 7C2 4.79086 3.79086 3 6 3L18 3Z" fill="url(#1752500502792-4934513_image_existing_0_javw1hgdp)" data-glass="clone" filter="url(#1752500502792-4934513_image_filter_0uoir1e4h)" clip-path="url(#1752500502792-4934513_image_clipPath_m7fya5ytl)"></path>
                                    <path d="M14.2168 7.89746C14.7172 7.68454 15.2828 7.68453 15.7832 7.89746C16.3562 8.1414 16.8052 8.85075 17.7031 10.2686L21.3887 16.0879C22.4031 17.6896 22.9108 18.4908 22.8604 19.1523C22.8163 19.7287 22.525 20.258 22.0615 20.6035C21.5296 21.0001 20.5815 21 18.6855 21H11.3145C9.41854 21 8.47039 21.0001 7.93848 20.6035C7.47504 20.258 7.18368 19.7287 7.13965 19.1523C7.08925 18.4908 7.59692 17.6896 8.61133 16.0879L12.2969 10.2686C13.1948 8.85076 13.6438 8.1414 14.2168 7.89746ZM7 5.5C8.38071 5.5 9.5 6.61929 9.5 8C9.5 9.38071 8.38071 10.5 7 10.5C5.61929 10.5 4.5 9.38071 4.5 8C4.5 6.61929 5.61929 5.5 7 5.5Z" fill="url(#1752500502792-4934513_image_existing_1_bj56bphon)" data-glass="blur"></path>
                                    <path d="M18.6853 20.2497V20.9997H11.3142V20.2497H18.6853ZM14.2166 7.8981C14.7171 7.68501 15.2834 7.68501 15.7839 7.8981C16.3567 8.14225 16.8062 8.85079 17.7039 10.2682L21.3894 16.0876C22.4038 17.6893 22.9105 18.4905 22.8601 19.152L22.8328 19.3659C22.7412 19.8581 22.4669 20.3008 22.0613 20.6032C21.5294 20.9997 20.5812 20.9997 18.6853 20.9997V20.2497C19.6479 20.2497 20.3181 20.2494 20.8162 20.2038C21.3199 20.1576 21.5179 20.0734 21.613 20.0026C21.9027 19.7867 22.0845 19.4556 22.1121 19.0954C22.1211 18.9772 22.0869 18.7648 21.8562 18.3141C21.6283 17.8689 21.2707 17.3023 20.7556 16.4889L17.0701 10.6696C16.6133 9.94839 16.2974 9.45162 16.0271 9.10025C15.7568 8.74889 15.5978 8.63351 15.49 8.58756C15.1772 8.4544 14.8233 8.45444 14.5105 8.58756C14.4027 8.63346 14.2437 8.74887 13.9734 9.10025C13.7031 9.45159 13.3871 9.94848 12.9304 10.6696L9.24488 16.4889C8.72982 17.3022 8.3722 17.8689 8.14429 18.3141C7.91358 18.7648 7.87845 18.9772 7.88746 19.0954C7.91502 19.4556 8.09781 19.7867 8.38746 20.0026C8.48268 20.0734 8.68021 20.1576 9.18336 20.2038C9.68136 20.2494 10.3516 20.2497 11.3142 20.2497V20.9997C9.53729 20.9997 8.59308 21.0001 8.04371 20.6735L7.93922 20.6032C7.53362 20.3008 7.25929 19.8581 7.16773 19.3659L7.14039 19.152C7.08999 18.4905 7.59668 17.6893 8.61109 16.0876L12.2966 10.2682C13.1383 8.93932 13.5855 8.23305 14.1101 7.94889L14.2166 7.8981Z" fill="url(#1752500502792-4934513_image_existing_2_j9i9duif7)"></path>
                                    <path d="M8.75 8C8.75 7.0335 7.9665 6.25 7 6.25C6.0335 6.25 5.25 7.0335 5.25 8C5.25 8.9665 6.0335 9.75 7 9.75V10.5C5.61929 10.5 4.5 9.38071 4.5 8C4.5 6.61929 5.61929 5.5 7 5.5C8.38071 5.5 9.5 6.61929 9.5 8C9.5 9.38071 8.38071 10.5 7 10.5V9.75C7.9665 9.75 8.75 8.9665 8.75 8Z" fill="url(#1752500502792-4934513_image_existing_3_1gmx3q2tv)"></path>
                                    <defs>
                                      <linearGradient id="1752500502792-4934513_image_existing_0_javw1hgdp" x1="12" y1="3" x2="12" y2="19" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502792-4934513_image_existing_1_bj56bphon" x1="13.682" y1="5.5" x2="13.682" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502792-4934513_image_existing_2_j9i9duif7" x1="15" y1="7.738" x2="15" y2="15.418" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502792-4934513_image_existing_3_1gmx3q2tv" x1="7" y1="5.5" x2="7" y2="9" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff" stop-opacity="1"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502792-4934513_image_filter_0uoir1e4h" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502792-4934513_image_clipPath_m7fya5ytl">
                                        <path d="M14.2168 7.89746C14.7172 7.68454 15.2828 7.68453 15.7832 7.89746C16.3562 8.1414 16.8052 8.85075 17.7031 10.2686L21.3887 16.0879C22.4031 17.6896 22.9108 18.4908 22.8604 19.1523C22.8163 19.7287 22.525 20.258 22.0615 20.6035C21.5296 21.0001 20.5815 21 18.6855 21H11.3145C9.41854 21 8.47039 21.0001 7.93848 20.6035C7.47504 20.258 7.18368 19.7287 7.13965 19.1523C7.08925 18.4908 7.59692 17.6896 8.61133 16.0879L12.2969 10.2686C13.1948 8.85076 13.6438 8.1414 14.2168 7.89746ZM7 5.5C8.38071 5.5 9.5 6.61929 9.5 8C9.5 9.38071 8.38071 10.5 7 10.5C5.61929 10.5 4.5 9.38071 4.5 8C4.5 6.61929 5.61929 5.5 7 5.5Z" fill="url(#1752500502792-4934513_image_existing_1_bj56bphon)"></path>
                                      </clipPath>
                                      <mask id="1752500502792-4934513_image_mask_g3cets1it">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M14.2168 7.89746C14.7172 7.68454 15.2828 7.68453 15.7832 7.89746C16.3562 8.1414 16.8052 8.85075 17.7031 10.2686L21.3887 16.0879C22.4031 17.6896 22.9108 18.4908 22.8604 19.1523C22.8163 19.7287 22.525 20.258 22.0615 20.6035C21.5296 21.0001 20.5815 21 18.6855 21H11.3145C9.41854 21 8.47039 21.0001 7.93848 20.6035C7.47504 20.258 7.18368 19.7287 7.13965 19.1523C7.08925 18.4908 7.59692 17.6896 8.61133 16.0879L12.2969 10.2686C13.1948 8.85076 13.6438 8.1414 14.2168 7.89746ZM7 5.5C8.38071 5.5 9.5 6.61929 9.5 8C9.5 9.38071 8.38071 10.5 7 10.5C5.61929 10.5 4.5 9.38071 4.5 8C4.5 6.61929 5.61929 5.5 7 5.5Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : item.icon === 'square-chart-line' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="square-chart-line-icon">
                                  <title>square-chart-line</title>
                                  <g fill="none">
                                    <path d="M3 8.4C3 6.15979 3 5.03968 3.43597 4.18404C3.81947 3.43139 4.43139 2.81947 5.18404 2.43597C6.03968 2 7.15979 2 9.4 2H14.6C16.8402 2 17.9603 2 18.816 2.43597C19.5686 2.81947 20.1805 3.43139 20.564 4.18404C21 5.03968 21 6.15979 21 8.4V11.6C21 13.8402 21 14.9603 20.564 15.816C20.1805 16.5686 19.5686 17.1805 18.816 17.564C17.9603 18 16.8402 18 14.6 18H9.4C7.15979 18 6.03968 18 5.18404 17.564C4.43139 17.1805 3.81947 16.5686 3.43597 15.816C3 14.9603 3 13.8402 3 11.6V8.4Z" fill="url(#1752500502804-9183447_square-chart-line_existing_0_ko3hky3pd)" data-glass="origin" mask="url(#1752500502804-9183447_square-chart-line_mask_66dhv0iub)"></path>
                                    <path d="M3 8.4C3 6.15979 3 5.03968 3.43597 4.18404C3.81947 3.43139 4.43139 2.81947 5.18404 2.43597C6.03968 2 7.15979 2 9.4 2H14.6C16.8402 2 17.9603 2 18.816 2.43597C19.5686 2.81947 20.1805 3.43139 20.564 4.18404C21 5.03968 21 6.15979 21 8.4V11.6C21 13.8402 21 14.9603 20.564 15.816C20.1805 16.5686 19.5686 17.1805 18.816 17.564C17.9603 18 16.8402 18 14.6 18H9.4C7.15979 18 6.03968 18 5.18404 17.564C4.43139 17.1805 3.81947 16.5686 3.43597 15.816C3 14.9603 3 13.8402 3 11.6V8.4Z" fill="url(#1752500502804-9183447_square-chart-line_existing_0_ko3hky3pd)" data-glass="clone" filter="url(#1752500502804-9183447_square-chart-line_filter_kwhh3qkup)" clip-path="url(#1752500502804-9183447_square-chart-line_clipPath_lvme5u893)"></path>
                                    <path d="M9.7666 9.87523C9.48873 9.39536 8.87716 9.21774 8.3916 9.48558L3.55455 12.1452C2.59573 12.6724 2 13.6798 2 14.774V16.5998V16.6031C2 18.8398 2 18.9605 2.43555 19.8157C2.81896 20.5681 3.43117 21.1802 4.18359 21.5637C5.03924 21.9997 6.16018 22.0002 8.40039 22.0002H15.5996C17.8398 22.0002 18.9608 21.9997 19.8164 21.5637C20.5688 21.1802 21.181 20.5681 21.5645 19.8157C22 18.9605 22 17.8408 22 15.6031V15.5998V10.6428C21.9999 9.89353 21.2089 9.41219 20.5488 9.76683C18.0694 11.099 14.7916 12.9434 13.2812 13.7971C12.8177 14.0591 12.2304 13.9141 11.9473 13.4631C11.3884 12.5728 10.4754 11.0997 9.7666 9.87523Z" fill="url(#1752500502804-9183447_square-chart-line_existing_1_vl0j8v33y)" data-glass="blur"></path>
                                    <path d="M15.5996 21.2502V22.0002H8.40039V21.2502H15.5996ZM21.25 15.6028V10.6428C21.2499 10.45 21.0543 10.3468 20.9033 10.428C18.4318 11.7559 15.1607 13.5968 13.6504 14.4504C12.8422 14.9072 11.8113 14.6562 11.3125 13.8616C10.7527 12.9697 9.83302 11.4877 9.11719 10.2512C9.03879 10.1159 8.87324 10.0762 8.75391 10.1418L8.75293 10.1428L3.91602 12.802C3.19701 13.1973 2.75013 13.9532 2.75 14.7737V15.6028C2.75 16.734 2.75039 17.5383 2.80176 18.1672C2.8524 18.7868 2.94873 19.1707 3.10352 19.4748C3.41499 20.0861 3.91297 20.5841 4.52441 20.8957C4.82888 21.0508 5.21342 21.1467 5.83398 21.1975C6.46353 21.249 7.26801 21.2502 8.40039 21.2502V22.0002L6.91699 21.9934C5.72503 21.9745 4.96098 21.9042 4.34766 21.6409L4.18359 21.5637C3.52521 21.2281 2.97417 20.7176 2.58984 20.091L2.43555 19.8157C2 18.9605 2 17.8404 2 15.6028V14.7737C2.00012 13.748 2.5235 12.7983 3.37891 12.2493L3.55469 12.1448L8.3916 9.48558C8.87716 9.21774 9.48873 9.39536 9.7666 9.87523C10.4754 11.0997 11.3884 12.5728 11.9473 13.4631C12.2128 13.8861 12.7457 14.0397 13.1934 13.841L13.2812 13.7971C14.4141 13.1568 16.5412 11.959 18.5801 10.8381L20.5488 9.76683C21.2089 9.41219 21.9999 9.89353 22 10.6428V15.6028C22 17.8404 22 18.9605 21.5645 19.8157L21.4102 20.091C21.0258 20.7176 20.4748 21.2281 19.8164 21.5637L19.6523 21.6409C18.816 22 17.6995 22.0002 15.5996 22.0002V21.2502C16.732 21.2502 17.5365 21.249 18.166 21.1975C18.7866 21.1467 19.1711 21.0508 19.4756 20.8957C20.087 20.5841 20.585 20.0861 20.8965 19.4748C21.0513 19.1707 21.1476 18.7868 21.1982 18.1672C21.2496 17.5383 21.25 16.734 21.25 15.6028Z" fill="url(#1752500502804-9183447_square-chart-line_existing_2_o3c96osrf)"></path>
                                    <defs>
                                      <linearGradient id="1752500502804-9183447_square-chart-line_existing_0_ko3hky3pd" x1="12" y1="2" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502804-9183447_square-chart-line_existing_1_vl0j8v33y" x1="12" y1="9.361" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502804-9183447_square-chart-line_existing_2_o3c96osrf" x1="12" y1="9.361" x2="12" y2="16.68" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502804-9183447_square-chart-line_filter_kwhh3qkup" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502804-9183447_square-chart-line_clipPath_lvme5u893">
                                        <path d="M9.7666 9.87523C9.48873 9.39536 8.87716 9.21774 8.3916 9.48558L3.55455 12.1452C2.59573 12.6724 2 13.6798 2 14.774V16.5998V16.6031C2 18.8398 2 18.9605 2.43555 19.8157C2.81896 20.5681 3.43117 21.1802 4.18359 21.5637C5.03924 21.9997 6.16018 22.0002 8.40039 22.0002H15.5996C17.8398 22.0002 18.9608 21.9997 19.8164 21.5637C20.5688 21.1802 21.181 20.5681 21.5645 19.8157C22 18.9605 22 17.8408 22 15.6031V15.5998V10.6428C21.9999 9.89353 21.2089 9.41219 20.5488 9.76683C18.0694 11.099 14.7916 12.9434 13.2812 13.7971C12.8177 14.0591 12.2304 13.9141 11.9473 13.4631C11.3884 12.5728 10.4754 11.0997 9.7666 9.87523Z" fill="url(#1752500502804-9183447_square-chart-line_existing_1_vl0j8v33y)"></path>
                                      </clipPath>
                                      <mask id="1752500502804-9183447_square-chart-line_mask_66dhv0iub">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M9.7666 9.87523C9.48873 9.39536 8.87716 9.21774 8.3916 9.48558L3.55455 12.1452C2.59573 12.6724 2 13.6798 2 14.774V16.5998V16.6031C2 18.8398 2 18.9605 2.43555 19.8157C2.81896 20.5681 3.43117 21.1802 4.18359 21.5637C5.03924 21.9997 6.16018 22.0002 8.40039 22.0002H15.5996C17.8398 22.0002 18.9608 21.9997 19.8164 21.5637C20.5688 21.1802 21.181 20.5681 21.5645 19.8157C22 18.9605 22 17.8408 22 15.6031V15.5998V10.6428C21.9999 9.89353 21.2089 9.41219 20.5488 9.76683C18.0694 11.099 14.7916 12.9434 13.2812 13.7971C12.8177 14.0591 12.2304 13.9141 11.9473 13.4631C11.3884 12.5728 10.4754 11.0997 9.7666 9.87523Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : item.icon === 'book-open' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="book-open-icon">
                                  <title>book-open</title>
                                  <g fill="none">
                                    <path d="M19.8 7C20.9201 7 21.4802 7 21.908 7.21799C22.2843 7.40973 22.5903 7.7157 22.782 8.09202C23 8.51984 23 9.0799 23 10.2V14.6C23 16.8402 23 17.9603 22.564 18.816C22.1805 19.5686 21.5686 20.1805 20.816 20.564C19.9603 21 18.8402 21 16.6 21C16.0003 21 15.3477 20.9253 14.7546 21.031C14.3513 21.1029 14.0296 21.3136 13.6938 21.5374C13.4363 21.7091 13.1783 21.93 12.8727 21.9845C12.7857 22 12.6956 22 12.5156 22H11.4844C11.3044 22 11.2143 22 11.1273 21.9845C10.8217 21.93 10.5637 21.7091 10.3062 21.5374C9.97044 21.3136 9.64872 21.1029 9.24542 21.031C8.65232 20.9253 7.99966 21 7.4 21C5.15979 21 4.03968 21 3.18404 20.564C2.43139 20.1805 1.81947 19.5686 1.43597 18.816C1 17.9603 1 16.8402 1 14.6L1 10.2C1 9.07989 1 8.51984 1.21799 8.09202C1.40973 7.71569 1.7157 7.40973 2.09202 7.21799C2.51984 7 3.0799 7 4.2 7L19.8 7Z" fill="url(#1752500502767-6164915_book-open_existing_0_icxw9y0nx)" data-glass="origin" mask="url(#1752500502767-6164915_book-open_mask_0lsha4amw)"></path>
                                    <path d="M19.8 7C20.9201 7 21.4802 7 21.908 7.21799C22.2843 7.40973 22.5903 7.7157 22.782 8.09202C23 8.51984 23 9.0799 23 10.2V14.6C23 16.8402 23 17.9603 22.564 18.816C22.1805 19.5686 21.5686 20.1805 20.816 20.564C19.9603 21 18.8402 21 16.6 21C16.0003 21 15.3477 20.9253 14.7546 21.031C14.3513 21.1029 14.0296 21.3136 13.6938 21.5374C13.4363 21.7091 13.1783 21.93 12.8727 21.9845C12.7857 22 12.6956 22 12.5156 22H11.4844C11.3044 22 11.2143 22 11.1273 21.9845C10.8217 21.93 10.5637 21.7091 10.3062 21.5374C9.97044 21.3136 9.64872 21.1029 9.24542 21.031C8.65232 20.9253 7.99966 21 7.4 21C5.15979 21 4.03968 21 3.18404 20.564C2.43139 20.1805 1.81947 19.5686 1.43597 18.816C1 17.9603 1 16.8402 1 14.6L1 10.2C1 9.07989 1 8.51984 1.21799 8.09202C1.40973 7.71569 1.7157 7.40973 2.09202 7.21799C2.51984 7 3.0799 7 4.2 7L19.8 7Z" fill="url(#1752500502767-6164915_book-open_existing_0_icxw9y0nx)" data-glass="clone" filter="url(#1752500502767-6164915_book-open_filter_dric4oey8)" clip-path="url(#1752500502767-6164915_book-open_clipPath_99y0rffwb)"></path>
                                    <path d="M17.1058 2.86537C18.4374 2.56947 19.1032 2.42152 19.6257 2.59361C20.0838 2.74451 20.472 3.05589 20.7187 3.47039C21 3.94312 21 4.62513 21 5.98917L21 14.4331C21 15.349 21 15.807 20.8377 16.1849C20.6945 16.5182 20.4634 16.8063 20.1691 17.0184C19.8354 17.2588 19.3883 17.3582 18.4942 17.5568L12.3471 18.9229C12.2176 18.9517 12.1528 18.966 12.0874 18.9718C12.0292 18.9769 11.9708 18.9769 11.9126 18.9718C11.8472 18.966 11.7824 18.9517 11.6529 18.9229L5.50582 17.5568C4.6117 17.3582 4.16464 17.2588 3.83093 17.0184C3.53658 16.8063 3.30545 16.5182 3.1623 16.1849C3 15.8069 3 15.349 3 14.4331L3 5.98917C3 4.62513 3 3.94312 3.28134 3.47039C3.52803 3.05589 3.9162 2.74451 4.37434 2.59361C4.89684 2.42152 5.56262 2.56947 6.89418 2.86537L11.6529 3.92287C11.7824 3.95165 11.8472 3.96604 11.9126 3.97178C11.9708 3.97688 12.0292 3.97688 12.0874 3.97178C12.1528 3.96604 12.2176 3.95165 12.3471 3.92287L17.1058 2.86537Z" fill="url(#1752500502767-6164915_book-open_existing_1_gwnxwxu1a)" data-glass="blur"></path>
                                    <path d="M20.25 5.98921C20.25 5.29355 20.2494 4.82046 20.2178 4.46088C20.1867 4.10809 20.1309 3.94983 20.0742 3.85443C19.92 3.59536 19.677 3.3999 19.3906 3.3056C19.2852 3.27098 19.1185 3.25158 18.7676 3.29778C18.4097 3.34493 17.9476 3.44668 17.2686 3.59759L12.5098 4.65521C12.3988 4.67988 12.2789 4.70764 12.1533 4.71869C12.0516 4.72761 11.9484 4.72761 11.8467 4.71869C11.7211 4.70764 11.6012 4.67988 11.4902 4.65521L6.73145 3.59759C6.05237 3.44668 5.59029 3.34493 5.23242 3.29778C4.88146 3.25158 4.71479 3.27098 4.60938 3.3056C4.32304 3.3999 4.07996 3.59536 3.92578 3.85443C3.86911 3.94983 3.81326 4.10809 3.78223 4.46088C3.75062 4.82046 3.75 5.29355 3.75 5.98921V14.4336C3.75 14.9022 3.75076 15.2137 3.76855 15.4561C3.78565 15.6887 3.81605 15.8059 3.85156 15.8887C3.94103 16.097 4.08556 16.2776 4.26953 16.4102C4.34261 16.4628 4.45054 16.5178 4.67383 16.585C4.90661 16.6549 5.21124 16.7235 5.66895 16.8252L11.8154 18.1905C11.8836 18.2056 11.9214 18.2141 11.9502 18.2198C11.9732 18.2242 11.9794 18.2247 11.9785 18.2246C11.9928 18.2259 12.0072 18.2259 12.0215 18.2246C12.0206 18.2247 12.0268 18.2242 12.0498 18.2198C12.0786 18.2141 12.1164 18.2056 12.1846 18.1905L18.3311 16.8252C18.7888 16.7235 19.0934 16.6549 19.3262 16.585C19.5495 16.5178 19.6574 16.4628 19.7305 16.4102C19.9144 16.2776 20.059 16.097 20.1484 15.8887C20.1839 15.8059 20.2143 15.6887 20.2314 15.4561C20.2492 15.2137 20.25 14.9022 20.25 14.4336V5.98921ZM21 14.4336L20.9971 15.04C20.9895 15.5728 20.9595 15.9012 20.8379 16.1846L20.7803 16.3076C20.6361 16.5891 20.4266 16.833 20.1689 17.0186L20.0381 17.1026C19.7167 17.2854 19.2765 17.3828 18.4941 17.5567L12.3467 18.9229C12.2174 18.9516 12.1523 18.966 12.0869 18.9717C12.058 18.9742 12.029 18.9756 12 18.9756L11.9131 18.9717C11.8803 18.9688 11.8473 18.964 11.8066 18.9561L11.6533 18.9229L5.50586 17.5567C4.72347 17.3828 4.28327 17.2854 3.96191 17.1026L3.83105 17.0186C3.53671 16.8065 3.30526 16.5179 3.16211 16.1846C3.04052 15.9012 3.01053 15.5728 3.00293 15.04L3 14.4336V5.98921C3 4.71045 2.99965 4.0309 3.23145 3.56146L3.28125 3.47064C3.49715 3.10787 3.82136 2.82349 4.20605 2.65715L4.37402 2.59368C4.89653 2.42158 5.56298 2.56926 6.89453 2.86516L11.6533 3.92279C11.7826 3.95152 11.8477 3.96588 11.9131 3.97162C11.9709 3.97666 12.0291 3.97666 12.0869 3.97162C12.1523 3.96588 12.2174 3.95152 12.3467 3.92279L17.1055 2.86516C18.437 2.56926 19.1035 2.42158 19.626 2.59368C20.084 2.74461 20.4721 3.05623 20.7188 3.47064C21 3.94336 21 4.62538 21 5.98921V14.4336Z" fill="url(#1752500502767-6164915_book-open_existing_2_8znynyepl)"></path>
                                    <defs>
                                      <linearGradient id="1752500502767-6164915_book-open_existing_0_icxw9y0nx" x1="12" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#575757"></stop>
                                        <stop offset="1" stop-color="#151515"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502767-6164915_book-open_existing_1_gwnxwxu1a" x1="21" y1="10.5" x2="3" y2="10.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                        <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                      </linearGradient>
                                      <linearGradient id="1752500502767-6164915_book-open_existing_2_8znynyepl" x1="12" y1="2.52" x2="12" y2="12.05" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                      </linearGradient>
                                      <filter id="1752500502767-6164915_book-open_filter_dric4oey8" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                      </filter>
                                      <clipPath id="1752500502767-6164915_book-open_clipPath_99y0rffwb">
                                        <path d="M17.1058 2.86537C18.4374 2.56947 19.1032 2.42152 19.6257 2.59361C20.0838 2.74451 20.472 3.05589 20.7187 3.47039C21 3.94312 21 4.62513 21 5.98917L21 14.4331C21 15.349 21 15.807 20.8377 16.1849C20.6945 16.5182 20.4634 16.8063 20.1691 17.0184C19.8354 17.2588 19.3883 17.3582 18.4942 17.5568L12.3471 18.9229C12.2176 18.9517 12.1528 18.966 12.0874 18.9718C12.0292 18.9769 11.9708 18.9769 11.9126 18.9718C11.8472 18.966 11.7824 18.9517 11.6529 18.9229L5.50582 17.5568C4.6117 17.3582 4.16464 17.2588 3.83093 17.0184C3.53658 16.8063 3.30545 16.5182 3.1623 16.1849C3 15.8069 3 15.349 3 14.4331L3 5.98917C3 4.62513 3 3.94312 3.28134 3.47039C3.52803 3.05589 3.9162 2.74451 4.37434 2.59361C4.89684 2.42152 5.56262 2.56947 6.89418 2.86537L11.6529 3.92287C11.7824 3.95165 11.8472 3.96604 11.9126 3.97178C11.9708 3.97688 12.0292 3.97688 12.0874 3.97178C12.1528 3.96604 12.2176 3.95165 12.3471 3.92287L17.1058 2.86537Z" fill="url(#1752500502767-6164915_book-open_existing_1_gwnxwxu1a)"></path>
                                      </clipPath>
                                      <mask id="1752500502767-6164915_book-open_mask_0lsha4amw">
                                        <rect width="100%" height="100%" fill="#FFF"></rect>
                                        <path d="M17.1058 2.86537C18.4374 2.56947 19.1032 2.42152 19.6257 2.59361C20.0838 2.74451 20.472 3.05589 20.7187 3.47039C21 3.94312 21 4.62513 21 5.98917L21 14.4331C21 15.349 21 15.807 20.8377 16.1849C20.6945 16.5182 20.4634 16.8063 20.1691 17.0184C19.8354 17.2588 19.3883 17.3582 18.4942 17.5568L12.3471 18.9229C12.2176 18.9517 12.1528 18.966 12.0874 18.9718C12.0292 18.9769 11.9708 18.9769 11.9126 18.9718C11.8472 18.966 11.7824 18.9517 11.6529 18.9229L5.50582 17.5568C4.6117 17.3582 4.16464 17.2588 3.83093 17.0184C3.53658 16.8063 3.30545 16.5182 3.1623 16.1849C3 15.8069 3 15.349 3 14.4331L3 5.98917C3 4.62513 3 3.94312 3.28134 3.47039C3.52803 3.05589 3.9162 2.74451 4.37434 2.59361C4.89684 2.42152 5.56262 2.56947 6.89418 2.86537L11.6529 3.92287C11.7824 3.95165 11.8472 3.96604 11.9126 3.97178C11.9708 3.97688 12.0292 3.97688 12.0874 3.97178C12.1528 3.96604 12.2176 3.95165 12.3471 3.92287L17.1058 2.86537Z" fill="#000"></path>
                                      </mask>
                                    </defs>
                                  </g>
                                </svg>
                              ) : (
                                item.icon
                              )}
                            </span>
                            <span>{item.label}</span>
                        </a>
                      ))}
                      
                      <div className="drawer-dropdown">
                          <a 
                            className="drawer-link"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsProductsOpen(!isProductsOpen);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="laptop-mobile-icon">
                                <title>laptop-mobile</title>
                                <g fill="none">
                                  <path d="M8.84961 5C9.18973 5.00537 9.50411 5.18368 9.68359 5.47266C9.87178 5.78351 10.1785 5.99426 10.5508 6H14.8418C14.9399 6 15.0306 5.94836 15.0811 5.86426C15.2267 5.6215 15.5994 5.72483 15.5996 6.00781V8.75195C15.5996 9.63355 15.6004 10.0747 15.6924 10.4375C15.7157 10.5296 15.7439 10.6196 15.7754 10.708C15.9145 9.88059 16.6331 9.25 17.5 9.25H19.5C20.4665 9.25 21.25 10.0335 21.25 11C21.25 11.8258 20.6776 12.5161 19.9082 12.7002H22V17.4004C22 17.9602 21.9996 18.2402 21.8906 18.4541C21.7948 18.6421 21.6421 18.7948 21.4541 18.8906C21.2402 18.9996 20.9602 19 20.4004 19H3.59961C3.03982 19 2.75976 18.9996 2.5459 18.8906C2.35793 18.7948 2.20522 18.6421 2.10938 18.4541C2.00041 18.2402 2 17.9602 2 17.4004V9.7998C2 8.11978 2.00018 7.27941 2.32715 6.6377C2.61472 6.07347 3.07347 5.61472 3.6377 5.32715C4.27941 5.00018 5.11978 5 6.7998 5H8.84961Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_0_xctbhwd4r)" data-glass="origin" mask="url(#1752500502793-9813140_laptop-mobile_mask_spcj51qt9)"></path>
                                  <path d="M8.84961 5C9.18973 5.00537 9.50411 5.18368 9.68359 5.47266C9.87178 5.78351 10.1785 5.99426 10.5508 6H14.8418C14.9399 6 15.0306 5.94836 15.0811 5.86426C15.2267 5.6215 15.5994 5.72483 15.5996 6.00781V8.75195C15.5996 9.63355 15.6004 10.0747 15.6924 10.4375C15.7157 10.5296 15.7439 10.6196 15.7754 10.708C15.9145 9.88059 16.6331 9.25 17.5 9.25H19.5C20.4665 9.25 21.25 10.0335 21.25 11C21.25 11.8258 20.6776 12.5161 19.9082 12.7002H22V17.4004C22 17.9602 21.9996 18.2402 21.8906 18.4541C21.7948 18.6421 21.6421 18.7948 21.4541 18.8906C21.2402 18.9996 20.9602 19 20.4004 19H3.59961C3.03982 19 2.75976 18.9996 2.5459 18.8906C2.35793 18.7948 2.20522 18.6421 2.10938 18.4541C2.00041 18.2402 2 17.9602 2 17.4004V9.7998C2 8.11978 2.00018 7.27941 2.32715 6.6377C2.61472 6.07347 3.07347 5.61472 3.6377 5.32715C4.27941 5.00018 5.11978 5 6.7998 5H8.84961Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_0_xctbhwd4r)" data-glass="clone" filter="url(#1752500502793-9813140_laptop-mobile_filter_m24rvk5lz)" clip-path="url(#1752500502793-9813140_laptop-mobile_clipPath_0nrvh35va)"></path>
                                  <path d="M6.5 17C6.77612 17 6.98947 17.2373 7.12207 17.4795C7.29187 17.7897 7.62145 18 8 18H16C16.3785 18 16.7081 17.7897 16.8779 17.4795C17.0105 17.2373 17.2239 17 17.5 17H21.5C22.3284 17 23 17.6716 23 18.5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V18.5C1 17.6716 1.67157 17 2.5 17H6.5ZM21 1C22.1046 1 23 1.89543 23 3V12C23 13.1046 22.1046 14 21 14H16C14.8954 14 14 13.1046 14 12V3C14 1.89543 14.8954 1 16 1H21ZM17.5 10C16.9477 10 16.5 10.4477 16.5 11C16.5 11.5523 16.9477 12 17.5 12H19.5C20.0523 12 20.5 11.5523 20.5 11C20.5 10.4477 20.0523 10 19.5 10H17.5Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_1_lwftmod22)" data-glass="blur"></path>
                                  <path d="M21 20.25V21H3V20.25H21ZM22.25 19V18.5C22.25 18.0858 21.9142 17.75 21.5 17.75H17.5947C17.5928 17.7524 17.59 17.7551 17.5879 17.7578C17.571 17.78 17.5526 17.8079 17.5352 17.8398C17.239 18.3805 16.6633 18.75 16 18.75H8C7.33669 18.75 6.76099 18.3805 6.46484 17.8398C6.44736 17.8079 6.42901 17.78 6.41211 17.7578C6.41002 17.7551 6.40722 17.7524 6.40527 17.75H2.5C2.08579 17.75 1.75 18.0858 1.75 18.5V19C1.75 19.6904 2.30964 20.25 3 20.25V21L2.7959 20.9893C1.78722 20.887 1 20.0357 1 19V18.5C1 17.6716 1.67157 17 2.5 17H6.5C6.77612 17 6.98947 17.2373 7.12207 17.4795C7.29187 17.7897 7.62145 18 8 18H16C16.3312 18 16.6247 17.8389 16.8066 17.5908L16.8779 17.4795C17.0105 17.2373 17.2239 17 17.5 17H21.5C22.3284 17 23 17.6716 23 18.5V19C23 20.1046 22.1046 21 21 21V20.25C21.6904 20.25 22.25 19.6904 22.25 19Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_2_rfn2ek3gs)"></path>
                                  <path d="M21 13.25V14H16V13.25H21ZM22.25 12V3C22.25 2.30964 21.6904 1.75 21 1.75H16C15.3096 1.75 14.75 2.30964 14.75 3V12C14.75 12.6904 15.3096 13.25 16 13.25V14C14.8954 14 14 13.1046 14 12V3C14 1.89543 14.8954 1 16 1H21L21.2041 1.01074C22.2128 1.11301 23 1.96435 23 3V12L22.9893 12.2041C22.8938 13.1457 22.1457 13.8938 21.2041 13.9893L21 14V13.25C21.6472 13.25 22.1791 12.7582 22.2432 12.1279L22.25 12Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_3_0u9a3nneu)"></path>
                                  <defs>
                                    <linearGradient id="1752500502793-9813140_laptop-mobile_existing_0_xctbhwd4r" x1="12" y1="5" x2="12" y2="19" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#575757"></stop>
                                      <stop offset="1" stop-color="#151515"></stop>
                                    </linearGradient>
                                    <linearGradient id="1752500502793-9813140_laptop-mobile_existing_1_lwftmod22" x1="12" y1="1" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                                      <stop offset="1" stop-color="#BBBBC0" stop-opacity=".6"></stop>
                                    </linearGradient>
                                    <linearGradient id="1752500502793-9813140_laptop-mobile_existing_2_rfn2ek3gs" x1="12" y1="17" x2="12" y2="19.316" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#fff"></stop>
                                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="1752500502793-9813140_laptop-mobile_existing_3_0u9a3nneu" x1="18.5" y1="1" x2="18.5" y2="8.528" gradientUnits="userSpaceOnUse">
                                      <stop stop-color="#fff"></stop>
                                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                    </linearGradient>
                                    <filter id="1752500502793-9813140_laptop-mobile_filter_m24rvk5lz" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                      <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                    </filter>
                                    <clipPath id="1752500502793-9813140_laptop-mobile_clipPath_0nrvh35va">
                                      <path d="M6.5 17C6.77612 17 6.98947 17.2373 7.12207 17.4795C7.29187 17.7897 7.62145 18 8 18H16C16.3785 18 16.7081 17.7897 16.8779 17.4795C17.0105 17.2373 17.2239 17 17.5 17H21.5C22.3284 17 23 17.6716 23 18.5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V18.5C1 17.6716 1.67157 17 2.5 17H6.5ZM21 1C22.1046 1 23 1.89543 23 3V12C23 13.1046 22.1046 14 21 14H16C14.8954 14 14 13.1046 14 12V3C14 1.89543 14.8954 1 16 1H21ZM17.5 10C16.9477 10 16.5 10.4477 16.5 11C16.5 11.5523 16.9477 12 17.5 12H19.5C20.0523 12 20.5 11.5523 20.5 11C20.5 10.4477 20.0523 10 19.5 10H17.5Z" fill="url(#1752500502793-9813140_laptop-mobile_existing_1_lwftmod22)"></path>
                                    </clipPath>
                                    <mask id="1752500502793-9813140_laptop-mobile_mask_spcj51qt9">
                                      <rect width="100%" height="100%" fill="#FFF"></rect>
                                      <path d="M6.5 17C6.77612 17 6.98947 17.2373 7.12207 17.4795C7.29187 17.7897 7.62145 18 8 18H16C16.3785 18 16.7081 17.7897 16.8779 17.4795C17.0105 17.2373 17.2239 17 17.5 17H21.5C22.3284 17 23 17.6716 23 18.5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V18.5C1 17.6716 1.67157 17 2.5 17H6.5ZM21 1C22.1046 1 23 1.89543 23 3V12C23 13.1046 22.1046 14 21 14H16C14.8954 14 14 13.1046 14 12V3C14 1.89543 14.8954 1 16 1H21ZM17.5 10C16.9477 10 16.5 10.4477 16.5 11C16.5 11.5523 16.9477 12 17.5 12H19.5C20.0523 12 20.5 11.5523 20.5 11C20.5 10.4477 20.0523 10 19.5 10H17.5Z" fill="#000"></path>
                                    </mask>
                                  </defs>
                                </g>
                              </svg>
                          <span>Products</span>
                          <ChevronDown 
                            size={16} 
                            className={`dropdown-icon ${isProductsOpen ? 'open' : ''}`}
                          />
                          </a>
                          
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ 
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                                opacity: { duration: 0.2 }
                              }}
                              className="drawer-dropdown-menu"
                                ref={productsRef}
                            >
                              {productLinks.map((product, index) => (
                                <a
                                  key={index}
                                  href={product.href}
                                  className="drawer-dropdown-item"
                                >
                                  <span className="item-icon">
                                    <product.icon size={20} />
                                  </span>
                                  <div className="item-content">
                                    <span className="item-title">{product.title}</span>
                                    <span className="item-description">{product.description}</span>
                                  </div>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      </div>

                    </nav>
                    

                    {/* Timer Functionality Note:
                        - When user clicks any download button, a default 10-second timer will run
                        - If user is logged in or signs up, the timer will be skipped
                        - This will be implemented in a separate Download page later
                    */}

                    {/* Drawer Footer: fills empty bottom space with CTA and social links */}
                    <div className={`drawer-footer ${isMobile && isProductsOpen ? 'hidden' : ''}`}>
                      <div className="drawer-footer-cta">
                        <div className="drawer-announcement">
                          <AwardBadge type="product-of-the-day" place={1} />
                        </div>
                      </div>
                      <div className="drawer-footer-social">
                        <a href="https://t.me/+5LRmV2wyEpQ5ZWVk" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-link">
                          <SiTelegram size={18} />
                        </a>
                        <a href="https://wa.me/+923355448505" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link">
                          <SiWhatsapp size={18} />
                        </a>
                        <a href="https://discord.gg/PwbEZ7wa3v" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-link">
                          <SiDiscord size={18} />
                        </a>
                        <a href="https://github.com/umarhashmi-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                          <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/umarhashmi-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                          <Linkedin size={18} />
                        </a>
                      </div>
                      <p className="drawer-footer-note">Made with ❤️ by VNHAX</p>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          )}

          {/* Logo */}
          <a href="/" className="logo-link">
            VNHAX
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="desktop-nav">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="nav-item">
                  {item.label}
                </a>
              ))}
              
              {/* Products Mega Dropdown */}
              <div
                className="nav-item-dropdown"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="nav-item dropdown-trigger">
                  Products
                  <ChevronDown size={16} className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mega-dropdown"
                      ref={productsRef}
                    >
                      <div className="dropdown-container">
                        <div className="dropdown-content">
                          <div className="cards-grid">
                            <div className="product-card">
                              <div className="card-icon">
                                <Globe size={24} />
                              </div>
                              <h3 className="card-title">Website Builder</h3>
                              <p className="card-description">Create responsive websites with ease</p>
                            </div>
                            <div className="product-card">
                              <div className="card-icon">
                                <Database size={24} />
                              </div>
                              <h3 className="card-title">Cloud Platform</h3>
                              <p className="card-description">Deploy and scale apps in the cloud</p>
                            </div>
                            <div className="product-card">
                              <div className="card-icon">
                                <Users size={24} />
                              </div>
                              <h3 className="card-title">Team Collaboration</h3>
                              <p className="card-description">Tools to help your teams work better together</p>
                            </div>
                          </div>
                          <div className="company-sidebar">
                            <div className="sidebar-item">
                              <BarChart3 size={16} />
                              <span>Analytics</span>
                            </div>
                            <div className="sidebar-item">
                              <Link size={16} />
                              <span>Integrations</span>
                            </div>
                            <div className="sidebar-item">
                              <ShoppingCart size={16} />
                              <span>E-Commerce</span>
                            </div>
                            <div className="sidebar-item">
                              <Lock size={16} />
                              <span>Security</span>
                            </div>
                            <div className="sidebar-item">
                              <Cpu size={16} />
                              <span>API</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          )}

          {/* Right Actions */}
          <div className="nav-actions">
            <AnimatedThemeToggler />
            
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
          </div>
        </div>
    </header>
  )
}

export default Navigation