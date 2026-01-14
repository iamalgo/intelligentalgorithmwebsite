import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav-bar')
            if (window.scrollY > 50) {
                nav?.classList.add('nav-scrolled')
            } else {
                nav?.classList.remove('nav-scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } })
        } else {
            const element = document.getElementById(sectionId)
            element?.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    // Handle scroll from other pages
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                // Clear state so it doesn't scroll on refresh
                window.history.replaceState({}, document.title)
            } else {
                // If element not found immediately (e.g. loading), try a small timeout
                setTimeout(() => {
                    const el = document.getElementById(location.state.scrollTo)
                    el?.scrollIntoView({ behavior: 'smooth' })
                    window.history.replaceState({}, document.title)
                }, 100)
            }
        }
    }, [location])


    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Navigation */}
            <nav className="nav-bar fixed top-0 w-full z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="text-xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                            Intelligent Algorithm Management
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                                Solutions
                            </button>
                            <button
                                onClick={() => scrollToSection('ecosystem')}
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                                Companies
                            </button>
                            <Link
                                to="/pricing"
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                                Pricing
                            </Link>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
                    >
                        <div className="px-4 py-4 space-y-4">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 w-full text-left"
                            >
                                Solutions
                            </button>
                            <button
                                onClick={() => scrollToSection('ecosystem')}
                                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 w-full text-left"
                            >
                                Companies
                            </button>
                            <Link
                                to="/pricing"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 w-full text-left"
                            >
                                Pricing
                            </Link>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 w-full text-left"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            <Outlet />

            {/* Footer */}
            <footer className="bg-black/50 border-t border-white/10 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-8">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('ecosystem')}
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Companies
                            </button>
                            <Link
                                to="/pricing"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Pricing
                            </Link>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Contact
                            </button>
                            <a
                                href="mailto:contact@iamalgo.com"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Email
                            </a>
                            <Link
                                to="/phone-sms-mms-disclosure"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Phone, SMS & MMS Disclosure
                            </Link>
                            <Link
                                to="/privacy-policy"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms-of-service"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/sms-opt-in"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                SMS Opt-In
                            </Link>
                            <Link
                                to="/help-sms"
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                            >
                                Help & Keywords
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-gray-400">
                            © 2025 Intelligent Algorithm Management. All rights reserved.
                        </p>
                        <p className="text-gray-500 mt-2">
                            Intelligence that scales business and transforms communities.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
