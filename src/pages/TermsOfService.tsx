import { motion } from 'framer-motion'

function TermsOfService() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light mb-8 text-white">Terms & Conditions</h1>
                <p className="mb-8 text-sm text-gray-500">Last updated: December 24, 2025</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed mb-4">
                        By accessing our website and using our services, you agree to comply with and be bound by these Terms & Conditions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">2. SMS Program Terms</h2>
                    <div className="space-y-4">
                        <p className="leading-relaxed"><strong>Program Description:</strong> By opting in, you agree to receive recurring automated and/or marketing text messages from Intelligent Algorithm Management for appointment reminders, account notifications, and updates.</p>
                        <p className="leading-relaxed"><strong>Frequency:</strong> Message frequency varies based on your interactions.</p>
                        <p className="leading-relaxed"><strong>Costs:</strong> Message and data rates may apply.</p>
                        <p className="leading-relaxed"><strong>Opt-Out:</strong> To stop receiving messages, reply STOP at any time. You will receive a final confirmation text.</p>
                        <p className="leading-relaxed"><strong>Help:</strong> For assistance, reply HELP or contact us at <a href="mailto:qruffin@iamalgo.com" className="text-orange-400 hover:underline">qruffin@iamalgo.com</a>.</p>
                        <p className="leading-relaxed"><strong>Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                    <p className="leading-relaxed mb-4">
                        You are responsible for maintaining the accuracy of your contact information and for any charges incurred from your mobile carrier for receiving messages.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
                    <p className="leading-relaxed mb-4">
                        IAM is not liable for delayed or undelivered messages. Services are provided on an "as is" and "as available" basis.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">5. Compliance</h2>
                    <p className="leading-relaxed mb-4">
                        We comply with TCPA, CTIA guidelines, and carrier requirements. You agree not to use our services for prohibited content as outlined in our policies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
                    <p className="leading-relaxed mb-4">
                        <strong>Intelligent Algorithm Management</strong><br />
                        30 N Gould St #48365, Sheridan, WY 82801<br />
                        Email: <a href="mailto:qruffin@iamalgo.com" className="text-orange-400 hover:underline">qruffin@iamalgo.com</a>
                    </p>
                </section>
            </motion.div>
        </div>
    )
}

export default TermsOfService
