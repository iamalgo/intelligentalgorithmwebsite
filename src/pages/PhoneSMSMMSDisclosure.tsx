import { motion } from 'framer-motion'

function PhoneSMSMMSDisclosure() {
    return (
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-gray-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light mb-8 text-white">Phone, SMS & MMS Disclosure and Consent</h1>
                <p className="mb-8 text-sm text-gray-500">Last updated: October 22, 2025</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
                    <p className="leading-relaxed mb-4">
                        Intelligent Algorithm Management ("we", "us", "IAM") may send text messages (SMS and MMS) or place phone calls to the phone number you provide for notifications, marketing, transactional messages, appointment reminders, and other account-related communications. By providing your phone number and/or checking an opt-in box, you consent to receive automated or prerecorded calls and text messages from us and our service providers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Consent & Opt-In</h2>
                    <p className="leading-relaxed mb-4">
                        You consent to receive messages by providing your phone number and affirmatively opting in (for example, by checking a consent box or entering your phone number into a form). Consent includes the use of automated dialing systems or prerecorded messages. You must be the account holder or otherwise authorized to provide the phone number.
                    </p>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-4">
                        <p className="font-mono text-sm text-gray-400">
                            By providing my phone number, I consent to receive recurring automated calls and texts, including marketing messages, from Intelligent Algorithm Management at the number I provide. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out, HELP for help. Terms & Privacy apply.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Message Types & Frequency</h2>
                    <p className="leading-relaxed mb-4">
                        Messages may include promotional offers, service updates, security alerts, and transactional communications related to your account. Frequency varies depending on your interactions and preferences.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">How to Opt-Out (STOP)</h2>
                    <p className="leading-relaxed mb-4">
                        If you no longer wish to receive messages, reply STOP to any text message and we will stop sending messages to that number. You may also contact us at the contact information below to request removal.
                        For help with messages, reply HELP to any text or contact our support team.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Carrier & Message Rates</h2>
                    <p className="leading-relaxed mb-4">
                        Message and data rates may apply when you receive SMS/MMS messages from us. Carriers are not liable for delayed or undelivered messages. If you have questions about message rates, contact your mobile carrier.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Privacy & Use of Data</h2>
                    <p className="leading-relaxed mb-4">
                        We use information you provide (including phone number and message content) in accordance with our <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>. We may share your phone number with service providers (for example, Twilio) to deliver messages and to comply with applicable laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Third-Party Messaging Providers</h2>
                    <p className="leading-relaxed mb-4">
                        We may use third-party vendors (such as Twilio) to manage and deliver phone and text message communications. These vendors may process your phone number and message content on our behalf.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
                    <p className="leading-relaxed mb-4">
                        We take reasonable measures to protect the confidentiality of your information. However, no method of transmission or storage is completely secure. Do not provide sensitive personal information by SMS.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
                    <p className="leading-relaxed mb-4">
                        Questions about this disclosure or mobile messaging practices may be directed to:<br />
                        Intelligent Algorithm Management Email: <a href="mailto:qruffin@iamalgo.com" className="text-orange-400 hover:underline">qruffin@iamalgo.com</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-8">
                        Effective date: October 22, 2025. This disclosure describes SMS/MMS and phone communications only and is not a substitute for our full Privacy Policy.
                    </p>
                </section>
            </motion.div>
        </div>
    )
}

export default PhoneSMSMMSDisclosure
