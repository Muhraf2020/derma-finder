import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dermaclinicnearme.com';

export const metadata: Metadata = {
  title: 'Terms of Service | Derma Clinic Near Me',
  description:
    'Terms of Service for Derma Clinic Near Me. Review the terms and conditions for using our dermatology clinic directory service.',
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | Derma Clinic Near Me',
    description: 'Terms and conditions for using Derma Clinic Near Me directory service.',
    url: `${BASE_URL}/terms`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link
            href="/"
            className="text-blue-100 hover:text-white mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Last Updated: November 5, 2025
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
          <div className="prose prose-blue max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Derma Clinic Near Me ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website{' '}
                <a href="https://dermaclinicnearme.com" className="text-blue-600 hover:underline">
                  dermaclinicnearme.com
                </a>{' '}
                (the "Website") and our dermatology clinic directory services (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                <p className="text-gray-900 font-semibold">
                  IMPORTANT: Please read these Terms carefully before using our Services.
                </p>
              </div>
            </section>

            {/* Use of Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Use of Our Services
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.1 Permitted Use
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our Services for lawful purposes only, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Searching for dermatology clinics and healthcare providers</li>
                <li>Viewing clinic information, ratings, and reviews</li>
                <li>Submitting accurate information about your clinic (if you are a provider)</li>
                <li>Accessing publicly available clinic contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.2 Prohibited Use
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to use our Services to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Scrape, harvest, or collect data using automated tools or bots</li>
                <li>Interfere with or disrupt the operation of our Services</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use our Services for spam or unsolicited marketing</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
            </section>

            {/* Directory Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Directory Information and Accuracy
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3.1 Information Sources
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect clinic information from various publicly available sources, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Places API</li>
                <li>CMS (Centers for Medicare & Medicaid Services) open data</li>
                <li>Healthcare.gov databases</li>
                <li>Yelp API</li>
                <li>State Medical Boards</li>
                <li>User-submitted information</li>
                <li>Publicly accessible clinic websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3.2 No Warranty of Accuracy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information, we do not warrant or guarantee:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>The accuracy, completeness, or timeliness of clinic information</li>
                <li>The availability of clinics or services listed</li>
                <li>The credentials or qualifications of healthcare providers</li>
                <li>The quality of care provided by any clinic</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                <p className="text-gray-900 font-semibold mb-2">
                  DISCLAIMER: VERIFY INFORMATION DIRECTLY
                </p>
                <p className="text-gray-700">
                  You should always verify clinic information, credentials, and availability directly with the healthcare provider before making any healthcare decisions.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3.3 User-Submitted Content
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting information about a clinic, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>You have the right to submit such information</li>
                <li>The information is accurate and not misleading</li>
                <li>The information does not violate any laws or third-party rights</li>
                <li>You grant us a non-exclusive, worldwide license to use, display, and distribute the information</li>
              </ul>
            </section>

            {/* Medical Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Medical Disclaimer
              </h2>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mb-4">
                <p className="text-gray-900 font-bold text-lg mb-3">
                  IMPORTANT MEDICAL DISCLAIMER
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Derma Clinic Near Me is a directory service only. We do not:
                </p>
                <ul className="list-disc pl-6 mb-3 text-gray-700">
                  <li>Provide medical advice, diagnosis, or treatment</li>
                  <li>Endorse or recommend any specific clinic or provider</li>
                  <li>Have any affiliation with listed clinics (unless explicitly stated)</li>
                  <li>Prescribe medications or provide healthcare services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Always consult with a qualified healthcare professional</strong> for medical advice, diagnosis, and treatment. Never disregard professional medical advice or delay seeking it because of information found on our Website.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you have a medical emergency, call 911 or your local emergency number immediately.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.1 Our Content
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our Website, including but not limited to text, graphics, logos, icons, images, software, and data compilation, is the property of Derma Clinic Near Me or its content suppliers and is protected by United States and international copyright laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.2 Third-Party Content
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some content on our Website is sourced from third parties (such as Google Places API, Yelp API, etc.). Such content remains the property of the respective third parties and is subject to their terms of service and licenses.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5.3 Trademarks
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Derma Clinic Near Me" and our logo are trademarks of our company. Other trademarks, service marks, and trade names mentioned on our Website are the property of their respective owners.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Third-Party Links and Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Website contains links to third-party websites, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Clinic websites</li>
                <li>Google Maps</li>
                <li>Social media platforms</li>
                <li>Healthcare directories</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for the content, privacy practices, or terms of service of these third-party sites. Your use of third-party websites is at your own risk and subject to their respective terms and conditions.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>No Warranties:</strong> Our Services are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied
                </li>
                <li>
                  <strong>No Liability for Damages:</strong> We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities
                </li>
                <li>
                  <strong>Maximum Liability:</strong> Our total liability to you for any claims arising from your use of our Services shall not exceed $100 USD
                </li>
                <li>
                  <strong>No Liability for Medical Outcomes:</strong> We are not liable for any healthcare decisions, treatments, or outcomes resulting from information found on our Website
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so some of the above limitations may not apply to you.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Derma Clinic Near Me, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your use or misuse of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Information you submit to our Website</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Suspend or terminate your access to our Services at any time, with or without notice</li>
                <li>Remove or edit any content you submit</li>
                <li>Refuse service to anyone for any reason</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our Services is also governed by our{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
                  Privacy Policy
                </Link>
                . Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            {/* DMCA Copyright Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. DMCA Copyright Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe that content on our Website infringes your copyright, please provide us with the following information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Description of the copyrighted work</li>
                <li>Location of the infringing material on our Website</li>
                <li>Your contact information</li>
                <li>A statement of good faith belief</li>
                <li>A statement under penalty of perjury that the information is accurate</li>
                <li>Your physical or electronic signature</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Send DMCA notices to:{' '}
                <a href="mailto:info@dermaclinicnearme.com" className="text-blue-600 hover:underline">
                  info@dermaclinicnearme.com
                </a>
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Dispute Resolution and Arbitration
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                12.1 Informal Resolution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any dispute with us, you agree to first contact us at{' '}
                <a href="mailto:info@dermaclinicnearme.com" className="text-blue-600 hover:underline">
                  info@dermaclinicnearme.com
                </a>{' '}
                and attempt to resolve the dispute informally.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                12.2 Binding Arbitration
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we cannot resolve the dispute informally within 60 days, any legal dispute arising from these Terms or your use of our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                12.3 Class Action Waiver
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as a class action, and you waive your right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in [Your State/County], and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Changes to These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If we make material changes, we will notify you by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                16. Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Derma Clinic Near Me regarding your use of our Services and supersede any prior agreements.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                17. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-900 font-semibold mb-2">Derma Clinic Near Me</p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a href="mailto:info@dermaclinicnearme.com" className="text-blue-600 hover:underline">
                    info@dermaclinicnearme.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Website:{' '}
                  <a href="https://dermaclinicnearme.com" className="text-blue-600 hover:underline">
                    https://dermaclinicnearme.com
                  </a>
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mb-8">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Acknowledgment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Top Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
