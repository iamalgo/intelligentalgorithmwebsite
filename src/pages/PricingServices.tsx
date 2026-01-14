import { Check, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'

function PricingServices() {
    const pricingTiers = [
        {
            name: "Starter",
            price: "$797",
            type: "one-time",
            description: "Perfect for small businesses establishing their digital presence.",
            features: [
                "Up to 3 pages (Home, About, Contact)",
                "Mobile-responsive design",
                "Basic SEO setup",
                "Contact form",
                "1 round of revisions",
                "Delivery: 5–7 days"
            ]
        },
        {
            name: "Business",
            price: "$1,997",
            type: "one-time",
            description: "Ideal for growing businesses needing more engagement tools.",
            popular: true,
            features: [
                "Up to 4–6 pages",
                "Custom design",
                "Standard SEO",
                "Blog setup",
                "Social media integration",
                "Google Analytics & Search Console",
                "2 rounds of revisions",
                "Delivery: 10–14 days"
            ]
        },
        {
            name: "Pro / Premium",
            price: "$4,997",
            type: "one-time",
            description: "Comprehensive solution for established brands and e-commerce.",
            features: [
                "Up to 8 pages",
                "Full custom UI/UX design",
                "SEO copywriting",
                "Booking systems",
                "E-commerce (up to 25 products)",
                "CRM integrations",
                "Automations",
                "Priority support for 30 days",
                "3 rounds of revisions",
                "Delivery: 3–6 weeks"
            ]
        }
    ]

    const monthlyPlans = [
        {
            name: "Basic Care",
            price: "$49",
            period: "/mo",
            features: [
                "Hosting",
                "Security updates",
                "Uptime monitoring",
                "Backups"
            ]
        },
        {
            name: "Growth",
            price: "$197",
            period: "/mo",
            popular: true,
            features: [
                "Includes Basic Care",
                "1 hour of monthly updates",
                "Speed optimization",
                "Design tweaks",
                "Monthly analytics report"
            ]
        },
        {
            name: "Pro Growth",
            price: "$497",
            period: "/mo+",
            features: [
                "Full website management",
                "Up to 4 hours of updates",
                "New landing pages",
                "Automations",
                "AI chatbot integration",
                "Priority support"
            ]
        }
    ]

    const addOns = [
        { name: "Additional pages", price: "$100–$250" },
        { name: "E-commerce setup", price: "$750–$2,500" },
        { name: "Logo design", price: "$300–$700" },
        { name: "Branding kit", price: "$500–$1,200" },
        { name: "Social media setup", price: "$150–$500" },
        { name: "Google Business Profile", price: "$75" },
        { name: "Copywriting", price: "$75–$150 per page" },
        { name: "Custom automations", price: "$250–$1,500" }
    ]

    const domainServices = [
        { name: "Domain Purchase (client buys direct)", price: "Free guidance" },
        { name: "Domain Setup (DNS, SSL, email)", price: "$75–$150" },
        { name: "Domain Concierge Service", price: "$99" },
        { name: "Domain Management", price: "$25–$50/yr" },
        { name: "Domain Transfer Fee", price: "$50–$75" }
    ]

    const faqs = [
        {
            question: "What do I get monthly?",
            answer: "Growth = routine updates + performance + design refresh. Pro = full managed service + landing pages + automation."
        },
        {
            question: "What counts as an update?",
            answer: "Small changes (text, images, simple edits)."
        },
        {
            question: "What counts as a redesign?",
            answer: "New layouts, new page structures, or full re-styling."
        },
        {
            question: "How fast are updates?",
            answer: "Growth: 3–5 days. Pro: 24–48 hours."
        },
        {
            question: "Do unused hours roll over?",
            answer: "No. This keeps service fast and consistent."
        }
    ]

    return (
        <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                    Pricing & Services
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Transparent pricing for intelligent digital solutions. Choose the plan that fits your growth.
                </p>
            </motion.div>

            {/* Website Packages */}
            <section className="mb-24">
                <h2 className="text-3xl font-light mb-12 text-center">Website Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full bg-white/5 backdrop-blur-sm border-white/10 flex flex-col relative ${tier.popular ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' : ''}`}>
                                {tier.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-white">{tier.name}</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                                        <span className="text-gray-400 ml-2 text-sm">({tier.type})</span>
                                    </div>
                                    <CardDescription className="mt-4 text-gray-400">
                                        {tier.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-4">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white">
                                        Get Started
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Monthly Management Plans */}
            <section className="mb-24">
                <h2 className="text-3xl font-light mb-12 text-center">Monthly Management Plans (New Builds)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {monthlyPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full bg-white/5 backdrop-blur-sm border-white/10 flex flex-col relative ${plan.popular ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' : ''}`}>
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                                        Recommended
                                    </Badge>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-white">{plan.name}</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400 ml-2 text-sm">{plan.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                                        Subscribe
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Services for Existing Websites */}
            <section className="mb-24 pt-12 border-t border-white/10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                        Services for Existing Websites
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Already have a site? We can audit, refresh, or manage it for you.
                    </p>
                </div>

                {/* 1. Website Audit */}
                <div className="mb-16">
                    <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-500/30 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="flex-1">
                                <h3 className="text-3xl font-semibold text-white mb-4">Website Audit</h3>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Before we touch anything, we run a full diagnostic. Get a clear PDF report explaining what's working, what's broken, and what needs to be improved.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
                                    <div className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" /> Speed & Performance</div>
                                    <div className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" /> Mobile Responsiveness</div>
                                    <div className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" /> SEO Health Check</div>
                                    <div className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" /> Security & Code Quality</div>
                                </div>
                            </div>
                            <div className="text-center md:text-right min-w-[200px]">
                                <div className="text-4xl font-bold text-white mb-2">$97</div>
                                <p className="text-gray-400 text-sm mb-6">(Or Free as a lead magnet)</p>
                                <Button className="w-full bg-white text-black hover:bg-gray-200">
                                    Get Audited
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 2. Refresh Packages */}
                <div className="mb-16">
                    <h3 className="text-2xl font-light mb-8 text-center">Website Refresh Packages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Basic Refresh */}
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-white">Basic Refresh</CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">$497</span>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Functional but outdated sites.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Fix broken links</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Update images & text</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Clean layout adjustments</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Minor SEO improvements</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Pro Refresh */}
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10 border-orange-500/30 shadow-lg shadow-orange-500/5">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-white">Pro Refresh</CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">$1,297</span>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Noticeable improvements needed.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Full UI cleanup</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Rework homepage + key sections</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Full mobile optimization</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Strong speed enhancement</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> SEO restructuring</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Full Overhaul */}
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-white">Full Overhaul</CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">$2,497</span>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Technically outdated or broken.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> New homepage design</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Modern redesign of major pages</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Tight mobile-first rebuild</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Deep speed optimization</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Security hardening</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* 3. Monthly Plans for Existing Sites */}
                <div className="mb-16">
                    <h3 className="text-2xl font-light mb-8 text-center">Management for Existing Sites</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Growth (Existing) */}
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-white">Growth (Maintenance)</CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">$197</span>
                                    <span className="text-gray-400 ml-2 text-sm">/mo</span>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Ongoing care for existing sites.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Monthly site health checks</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Routine updates & edits</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Plugin/theme updates</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Minor design tweaks</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Monthly analytics report</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                                    Subscribe
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Pro Growth (Existing) */}
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10 border-orange-500/30">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-white">Pro Growth (Managed)</CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">$497</span>
                                    <span className="text-gray-400 ml-2 text-sm">/mo</span>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Hands-off full management.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Up to 4 hours monthly updates</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> New landing pages & funnels</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Automation setups</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Monthly SEO improvements</li>
                                    <li className="flex items-start"><Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> AI chatbot integration</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white">
                                    Subscribe
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* 4. Platform Guidance */}
                <div className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">Is Your Website Built on a Bad Platform?</h3>
                    <p className="text-gray-300 mb-6">
                        Some platforms (Old Wix, GoDaddy, Weebly, outdated custom code) limit what we can do. In these cases, a rebuild is often more cost-effective than a fix.
                    </p>
                    <p className="text-white font-medium">
                        "A rebuild will give you more flexibility, speed, and long-term savings."
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                {/* Add-Ons */}
                <section>
                    <h2 className="text-3xl font-light mb-8">Add-Ons (A La Carte)</h2>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardContent className="p-6">
                            <ul className="space-y-4">
                                {addOns.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                        <span className="text-gray-300">{item.name}</span>
                                        <span className="text-orange-400 font-medium text-right ml-4">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Domain Services */}
                <section>
                    <h2 className="text-3xl font-light mb-8">Domain Services</h2>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardContent className="p-6">
                            <ul className="space-y-4">
                                {domainServices.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                        <span className="text-gray-300">{item.name}</span>
                                        <span className="text-orange-400 font-medium text-right ml-4">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </div>

            {/* Expanded Feature Breakdown & FAQ */}
            <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-light mb-12 text-center">Feature Breakdown & FAQ</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-orange-400">Growth Plan Features</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-300 text-sm">
                            <div>
                                <strong className="text-white block mb-1">1 Hour Monthly Updates</strong>
                                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                    <li>Content edits & uploading blogs</li>
                                    <li>Updating sections</li>
                                    <li>Fixing links or layout issues</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">Speed Optimization</strong>
                                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                    <li>Image compression</li>
                                    <li>Code cleanup & caching improvements</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">Design Tweaks</strong>
                                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                    <li>Adjust spacing/colors</li>
                                    <li>Clean up mobile layouts</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-orange-400">Pro Growth Features</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-300 text-sm">
                            <div>
                                <strong className="text-white block mb-1">Full Website Management</strong>
                                <p className="text-gray-400">All growth features + priority fixes, security, auditing, and troubleshooting.</p>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">Up to 4 Hours of Updates</strong>
                                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                    <li>New pages & multiple blogs</li>
                                    <li>Light redesigns</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">Advanced Features</strong>
                                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                                    <li>Landing Pages (Ads, events)</li>
                                    <li>Automations (CRM, Booking)</li>
                                    <li>AI Chatbot Integration</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-orange-400 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

        </div>
    )
}

export default PricingServices
