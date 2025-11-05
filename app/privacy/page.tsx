import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dermaclinicnearme.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Derma Clinic Near Me',
  description:
    'Privacy Policy for Derma Clinic Near Me. Learn how we collect, use, and protect your personal information when you use our dermatology clinic directory.',
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | Derma Clinic Near Me',
    description: 'Learn how we protect your privacy and handle your personal information.',
    url: `${BASE_URL}/privacy`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Derma Clinic Near Me ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                <a href="https://dermaclinicnearme.com" className="text-blue-600 hover:underline">
                  dermaclinicnearme.com
                </a>{' '}
                and use our dermatology clinic directory services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Submit a clinic to our directory</li>
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter (if applicable)</li>
                <li>Register for an account (if applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Clinic or business information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of your visit</li>
                <li>Geographic location (city/state level)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.3 Third-Party Data Sources
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect publicly available information about dermatology clinics from various sources, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Places API</li>
                <li>CMS (Centers for Medicare & Medicaid Services) Open Data</li>
                <li>Healthcare.gov databases</li>
                <li>Yelp API</li>
                <li>State Medical Boards</li>
                <li>Publicly accessible clinic websites</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide and maintain our dermatology clinic directory service</li>
                <li>To process clinic submissions and updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website usage and trends</li>
                <li>To send administrative information and updates</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
                <li>To display relevant clinic information to users</li>
              </ul>
            </section>

            {/* Analytics and Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Analytics and Cookies
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.1 Google Analytics
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information about your use of our website. This information is transmitted to and stored by Google on servers in the United States.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can opt-out of Google Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.2 Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. How We Share Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> With third-party service providers who perform services on our behalf (e.g., hosting, analytics, email delivery)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly consent to sharing your information
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Data backup and recovery procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Opt-Out:</strong> Opt-out of marketing communications
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a portable format
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:info@dermaclinicnearme.com" className="text-blue-600 hover:underline">
                  info@dermaclinicnearme.com
                </a>
                .
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website contains links to third-party websites (including clinic websites, Google Maps, and social media platforms). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete it.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

            {/* Consent */}
            <section className="mb-8">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Consent
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you do not agree to this policy, please do not use our website.
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
