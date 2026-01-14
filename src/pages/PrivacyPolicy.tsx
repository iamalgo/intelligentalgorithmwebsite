import { motion } from 'framer-motion'

function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light mb-8 text-white">Privacy Policy</h1>
                <p className="mb-8 text-sm text-gray-500">Last updated: December 24, 2025</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                    <p className="leading-relaxed mb-4">
                        Intelligent Algorithm Management ("we", "us", "IAM") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (iamalgo.com) and use our services.
                    </p>
                </section>

                <section className="mb-8 p-6 bg-white/5 rounded-lg border border-orange-500/20">
                    <h2 className="text-xl font-semibold text-white mb-4">2. SMS & Mobile Information (Crucial)</h2>
                    <p className="leading-relaxed mb-4 text-white font-medium">
                        SMS Privacy Policy: No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                    </p>
                    <p className="leading-relaxed mb-4 italic">
                        We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages. Under no circumstances will we share SMS consent or phone numbers with third parties for their own marketing purposes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">3. Information Collection</h2>
                    <p className="leading-relaxed mb-4">
                        We collect information you provide directly to us, such as when you create an account, fill out a form (including SMS opt-in forms), or communicate with us. This may include your name, email address, phone number, and company details.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">4. SMS Communications</h2>
                    <p className="leading-relaxed mb-4">
                        If you opt-in to receive SMS from us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Opt-In:</strong> You provide consent via web forms by checking the appropriate box.</li>
                        <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to the short code or phone number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.</li>
                        <li><strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at <a href="mailto:support@iamalgo.com" className="text-orange-400">support@iamalgo.com</a>.</li>
                        <li><strong>Frequency:</strong> Message frequency varies based on your interactions.</li>
                        <li><strong>Rates:</strong> Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for any messages sent to you from us and to us from you.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">5. Data Retention</h2>
                    <p className="leading-relaxed mb-4">
                        We retain your personal data and SMS consent records for as long as necessary to provide services and comply with legal obligations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">6. Contact Information</h2>
                    <p className="leading-relaxed mb-4">
                        For questions about this Privacy Policy, please contact us at:<br />
                        <strong>Intelligent Algorithm Management</strong><br />
                        30 N Gould St #48365, Sheridan, WY 82801<br />
                        Email: <a href="mailto:qruffin@iamalgo.com" className="text-orange-400 hover:underline">qruffin@iamalgo.com</a>
                    </p>
                </section>
            </motion.div>
        </div>
    )
}

export default PrivacyPolicy
