import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, HelpCircle, ShieldAlert } from 'lucide-react'

function HelpSMS() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light mb-4 text-white">SMS Support & Keywords</h1>
                <p className="text-gray-400 mb-12">Information on how to interact with our SMS services and manage your subscription.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6 text-center">
                            <ShieldAlert className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">STOP</h3>
                            <p className="text-sm text-gray-400">Opt-out of all future messages immediately.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6 text-center">
                            <HelpCircle className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">HELP</h3>
                            <p className="text-sm text-gray-400">Receive assistance and contact information.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6 text-center">
                            <MessageSquare className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">INFO</h3>
                            <p className="text-sm text-gray-400">Get more details about the messaging service.</p>
                        </CardContent>
                    </Card>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-medium text-orange-400 mb-2">How do I opt-out?</h4>
                            <p className="leading-relaxed">Simply reply STOP to any message you receive from us. We will send a final confirmation message and you will receive no further messages unless you opt back in.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-orange-400 mb-2">What kind of messages will I receive?</h4>
                            <p className="leading-relaxed">Transactional messages (account updates, notifications) and marketing messages (promotions, news) if you have opted into them specifically.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-orange-400 mb-2">Are there any costs?</h4>
                            <p className="leading-relaxed">We do not charge for our SMS service, but standard message and data rates from your carrier may apply depending on your mobile plan.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">Still Need Help?</h2>
                    <p className="mb-6">Our support team is available to assist you with any questions regarding our communication services.</p>
                    <div className="space-y-2">
                        <p className="text-orange-400 font-medium text-xl">Email: qruffin@iamalgo.com</p>
                        <p className="text-gray-400">Call us: 307-428-1136</p>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default HelpSMS
