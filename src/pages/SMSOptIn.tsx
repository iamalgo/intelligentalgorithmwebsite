import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

function SMSOptIn() {
    const [status, setStatus] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        const formData = new FormData(e.target)
        const data = {
            phone: formData.get('phone'),
            transactional: formData.get('transactional_consent') === 'on',
            marketing: formData.get('marketing_consent') === 'on',
            timestamp: new Date().toISOString(),
            ip: 'User IP (Client Side)', // In a real app, this would be captured server-side
            source: window.location.href
        }

        // Mock logging
        console.log('Opt-in recorded:', data)

        // Simulate API call
        setTimeout(() => {
            setSubmitting(false)
            setStatus('success')
        }, 1000)
    }

    if (status === 'success') {
        return (
            <div className="pt-32 pb-12 px-4 max-w-xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <h2 className="text-3xl font-light text-white mb-4">Thank You!</h2>
                    <p className="text-gray-400 mb-8">Your preferences have been updated.</p>
                    <Button onClick={() => window.location.href = '/'} className="bg-orange-500 text-white">Return Home</Button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light mb-4 text-white">SMS Opt-In</h1>
                <p className="text-gray-400 mb-8">Manage your communication preferences with Intelligent Algorithm Management.</p>

                <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8 text-gray-300">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-gray-200">Phone Number (optional)</Label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <Checkbox id="transactional_consent" name="transactional_consent" className="mt-1 border-white/20 data-[state=checked]:bg-orange-500" />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="transactional_consent" className="text-sm text-gray-300 leading-relaxed font-normal">
                                            By checking this box and submitting this form, you consent to receive transactional text messages for appointment reminders, account notifications, and order updates from Intelligent Algorithm Management. Reply STOP to opt out. Reply HELP for help. Standard message and data rates may apply. Message frequency may vary. View our <a href="/terms-of-service" className="text-orange-400 hover:underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-orange-400 hover:underline">Privacy Policy</a>.
                                        </Label>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Checkbox id="marketing_consent" name="marketing_consent" className="mt-1 border-white/20 data-[state=checked]:bg-orange-500" />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="marketing_consent" className="text-sm text-gray-300 leading-relaxed font-normal">
                                            By checking this box and submitting this form, you consent to receive text messages for marketing from Intelligent Algorithm Management. Reply STOP to opt out. Reply HELP for help. Message and data rates may apply. Message frequency may vary. View our <a href="/terms-of-service" className="text-orange-400 hover:underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-orange-400 hover:underline">Privacy Policy</a>.
                                        </Label>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-linear-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-6 text-lg"
                            >
                                {submitting ? 'Submitting...' : 'Update Preferences'}
                            </Button>

                            <p className="text-xs text-gray-500 text-center">
                                SMS consent is separate from email or phone consent. All checkboxes are optional and unchecked by default.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default SMSOptIn
