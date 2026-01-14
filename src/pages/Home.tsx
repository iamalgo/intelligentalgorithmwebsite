import { Button } from '@/components/ui/button'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
    Globe,
    Cloud,
    Target,
    ShoppingCart,
    Building,
    Home as HomeIcon,
    Phone,
    ChevronDown,
    ArrowRight,
    ExternalLink,
    Star
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Import company logos
import IAMLogo from '../assets/IAMLOGO.png'
import AlgoInsuLogo from '../assets/Algoinsulogojpg.jpg'
import VenturesLogo from '../assets/Gemini_Generated_Image_pze67ppze67ppze6.png'
import IAMediaLogo from '../assets/IAMediaLogo.png'
import LimyeLogo from '../assets/Limye\'Official.png'
import HeroLogo from '../assets/hero-logo.png'
import VoiceLogo from '../assets/VoiceLogo.png'

// Import client logos
import BlessedBitesLogo from '../assets/BlessedBitesLogo.jpg'
import PSGEventsLogo from '../assets/PSGEventsLogo.png'
import RonsBigBitesLogo from '../assets/RonsBigBitesLogo.png'
import PurposeHousingLogo from '../assets/PurposeHousingLogo.png'

// Import Animation Components
import { DecodeText } from '../components/DecodeText'
import { TiltCard } from '../components/TiltCard'
import { ScrollReveal } from '../components/ScrollReveal'

function Home() {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const scale = useTransform(scrollY, [0, 300], [1, 0.8])

    const services = [
        {
            icon: Globe,
            title: "Web Development & Design",
            description: "Custom web applications and responsive designs that convert visitors into customers with intelligent user experiences."
        },
        {
            icon: Cloud,
            title: "Cloud Hosting & CRM Development",
            description: "Integrated cloud infrastructure and customer relationship management systems powered by AI algorithms for optimal performance and engagement."
        },
        {
            icon: Phone,
            title: "AI Phone Systems & Workflows",
            description: "Intelligent phone systems with automated workflows, AI-powered call routing, and smart communication solutions."
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Solutions",
            description: "Smart algorithms for intelligent inventory management, pricing optimization, and automated dropshipping."
        },

        {
            icon: HomeIcon,
            title: "Property Management Technology",
            description: "Digital solutions for property management and housing placement, specializing in veteran and senior services."
        }
    ]

    const companies = [
        {
            logo: IAMLogo,
            name: "Intelligent Algorithm Management",
            description: "Core technology services: web development, hosting, CRM, and e-commerce solutions powered by intelligent algorithms.",
            url: "#",
            isCenter: true
        },
        {
            logo: AlgoInsuLogo,
            name: "AlgoInsu",
            description: "Tailored insurance policies and government contracting solutions powered by AI-driven analytics and optimization.",
            url: "https://algoinsu.com"
        },
        {
            logo: VoiceLogo,
            name: "Voice",
            description: "Advanced voice AI solutions and automated communication workflows for modern businesses.",
            url: "https://voice.iamalgo.com/"
        },
        {
            logo: VenturesLogo,
            name: "20/59 Ventures",
            description: "Dignified housing solutions for veterans and seniors with comprehensive property management and HRA services.",
            url: "https://2059ventures.online"
        },
        {
            logo: IAMediaLogo,
            name: "IAMedia",
            description: "Where algorithm meets narrative. Strategic media and storytelling solutions to amplify impact and drive engagement.",
            url: "https://iamedia.online",
            comingSoon: true
        },
        {
            logo: LimyeLogo,
            name: "Limye Foundation Partnership",
            description: "Supporting disadvantaged communities and combating child domesticity through strategic partnerships and social impact initiatives.",
            url: "https://limyefoundation.org"
        }
    ]

    const clients = [
        {
            logo: BlessedBitesLogo,
            name: "Blessed Bites",
            url: "https://blessedbites.online",
            description: "Culinary excellence meets digital convenience."
        },
        {
            logo: PSGEventsLogo,
            name: "PSG Events",
            url: "https://psgevents.online",
            description: "Premier event security and production services."
        },
        {
            logo: RonsBigBitesLogo,
            name: "Ron's Big Bites",
            url: "https://dejaysbigbite.com",
            description: "Authentic flavors and unforgettable dining experiences."
        },
        {
            logo: PurposeHousingLogo,
            name: "Purpose Housing",
            url: "https://www.purposehousing.online/",
            description: "Safe, affordable housing with dignity and respect."
        }
    ]

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"></div>

                {/* Globe Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-96 h-96 rounded-full bg-linear-to-br from-orange-500/20 to-transparent animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:space-x-16 space-y-8 lg:space-y-0">

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="shrink-0"
                        >
                            <img
                                src={HeroLogo}
                                alt="Intelligent Algorithm Management Logo"
                                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
                                loading="lazy"
                                width="288"
                                height="288"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            style={{ opacity, scale }}
                            className="flex-1 text-center lg:text-left max-w-3xl"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
                            >
                                <DecodeText text="Intelligence." delay={200} />
                                <br />
                                <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                    <DecodeText text="Amplified." delay={800} />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
                            >
                                Intelligence that scales business and transforms communities
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                            >
                                From algorithms to applications, we architect complete digital solutions that drive growth and create meaningful impact.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Button
                                    onClick={() => scrollToSection('ecosystem')}
                                    className="bg-linear-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
                                >
                                    Explore Our Ecosystem
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                        Complete Digital Solutions
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <TiltCard
                            key={index}
                            className="h-full"
                        >
                            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        </TiltCard>
                    ))}
                </div>
            </section>

            {/* Ecosystem Section */}
            <section id="ecosystem" className="py-24 px-4 bg-linear-to-b from-transparent to-orange-500/5">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                            Our Intelligence Ecosystem
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Five interconnected companies working together to solve complex challenges across technology, business, and social impact.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {companies.map((company, index) => (
                            <TiltCard
                                key={index}
                                className={`relative h-full ${company.isCenter ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                            >
                                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full relative overflow-hidden flex flex-col">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        {company.comingSoon && (
                                            <Badge className="absolute top-4 right-4 bg-orange-500 text-white z-10">
                                                Coming Soon
                                            </Badge>
                                        )}
                                        <div className="h-40 w-full mb-6 flex items-center justify-center">
                                            <img
                                                src={company.logo}
                                                alt={`${company.name} logo`}
                                                className="max-w-full max-h-full object-contain"
                                                loading="lazy"
                                                width="160"
                                                height="160"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">{company.name}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-6 grow">{company.description}</p>
                                        <Button
                                            onClick={() => company.url !== '#' && window.open(company.url, '_blank')}
                                            className="bg-linear-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white w-full mt-auto"
                                            disabled={company.url === '#'}
                                        >
                                            {company.isCenter ? 'Learn More' : company.comingSoon ? 'Coming Soon' : 'Visit Website'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </TiltCard>
                        ))
                        }
                    </div>
                </div >
            </section >

            {/* Satisfied Customers Section */}
            < section id="clients" className="py-24 px-4" >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                            Trusted By
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Powering the digital presence of forward-thinking businesses.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TiltCard className="h-full">
                                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                                        <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                            <div className="h-32 w-full mb-6 flex items-center justify-center bg-white/5 rounded-xl p-4">
                                                <img
                                                    src={client.logo}
                                                    alt={`${client.name} logo`}
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                    width="150"
                                                    height="150"
                                                />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-4 text-white">{client.name}</h3>
                                            <p className="text-gray-400 leading-relaxed mb-6 grow">{client.description}</p>
                                            <Button
                                                variant="link"
                                                onClick={() => window.open(client.url, '_blank')}
                                                className="text-orange-400 hover:text-orange-300 p-0 h-auto font-medium mt-auto"
                                            >
                                                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div >
                </div >
            </section >

            {/* Contact Section */}
            < section id="contact" className="py-24 px-4" >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                            Let's Build Something Intelligent
                        </h2>
                        <div className="mt-8 space-y-3">
                            <p className="text-xl text-orange-400 font-medium">
                                <Phone className="inline-block h-5 w-5 mr-2" />
                                Call us 24/7: <a href="tel:+13074281136" className="hover:text-orange-300 transition-colors">307-428-1136</a>
                            </p>
                            <p className="text-lg text-gray-400">
                                AI assistants available to take your request anytime, day or night
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                30 N Gould St #48365, Sheridan, WY 82801
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                            <CardContent className="p-8">
                                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                                            <select name="service" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                                                <option value="">Select a service</option>
                                                <option value="web-development">Web Development & Design</option>
                                                <option value="hosting">Cloud Hosting & Infrastructure</option>
                                                <option value="crm">CRM Development</option>
                                                <option value="ai-phone">AI Phone Systems</option>
                                                <option value="ecommerce">E-commerce Solutions</option>

                                                <option value="property">Property Management</option>
                                                <option value="consulting">Strategic Consulting</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget Range</label>
                                        <select name="budget" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                                            <option value="">Select budget range</option>
                                            <option value="under-10k">Under $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k-50k">$25,000 - $50,000</option>
                                            <option value="50k-100k">$50,000 - $100,000</option>
                                            <option value="100k-plus">$100,000+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                                        <textarea
                                            rows={5}
                                            name="message"
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                                            placeholder="Tell us about your project, goals, and how we can help..."
                                        ></textarea>
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        <div className="flex items-start space-x-3">
                                            <Checkbox id="transactional_consent" name="transactional_consent" className="mt-1 border-white/20 data-[state=checked]:bg-orange-500" />
                                            <Label htmlFor="transactional_consent" className="text-xs text-gray-400 leading-normal font-normal">
                                                By checking this box and submitting this form, you consent to receive transactional text messages for appointment reminders, account notifications, and order updates from Intelligent Algorithm Management. Reply STOP to opt out. Reply HELP for help. Standard message and data rates may apply. Message frequency may vary. View our <a href="/terms-of-service" className="text-orange-400 hover:underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-orange-400 hover:underline">Privacy Policy</a>.
                                            </Label>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Checkbox id="marketing_consent" name="marketing_consent" className="mt-1 border-white/20 data-[state=checked]:bg-orange-500" />
                                            <Label htmlFor="marketing_consent" className="text-xs text-gray-400 leading-normal font-normal">
                                                By checking this box and submitting this form, you consent to receive text messages for marketing from Intelligent Algorithm Management. Reply STOP to opt out. Reply HELP for help. Message and data rates may apply. Message frequency may vary. View our <a href="/terms-of-service" className="text-orange-400 hover:underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-orange-400 hover:underline">Privacy Policy</a>.
                                            </Label>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full bg-linear-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-4 text-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                                        Send Message
                                    </Button>
                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        By providing your phone number, you agree to receive text messages from Intelligent Algorithm Management. Message and data rates may apply. Message frequency varies. <a href="/phone-sms-mms-disclosure" className="text-orange-400 hover:underline">See our Phone, SMS & MMS Disclosure</a>.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section >
        </>
    )
}

export default Home
