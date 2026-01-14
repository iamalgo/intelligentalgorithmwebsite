import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// import Home from './pages/Home'
// import PricingServices from './pages/PricingServices'
// import PhoneSMSMMSDisclosure from './pages/PhoneSMSMMSDisclosure'
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const SMSOptIn = lazy(() => import('./pages/SMSOptIn'))
const HelpSMS = lazy(() => import('./pages/HelpSMS'))
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const PricingServices = lazy(() => import('./pages/PricingServices'))
const PhoneSMSMMSDisclosure = lazy(() => import('./pages/PhoneSMSMMSDisclosure'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<PricingServices />} />
          <Route path="phone-sms-mms-disclosure" element={<PhoneSMSMMSDisclosure />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="sms-opt-in" element={<SMSOptIn />} />
          <Route path="help-sms" element={<HelpSMS />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
