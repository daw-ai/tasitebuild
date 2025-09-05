import React from 'react';
import { Link } from './Router';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            TechAscension
          </Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="mb-4"><strong>Effective Date: September 5, 2025</strong></p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using the website <a href="https://www.techascension.com" class="text-blue-600 hover:underline">www.techascension.com</a> and our services, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use our website or services.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
        <p className="mb-4">TechAscension provides coaching and mentorship services aimed at helping individuals secure high-paying tech roles. Our services include, but are not limited to, strategic positioning, interview mastery, and salary negotiation guidance.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
        <p className="mb-4">As a user of our website and services, you agree to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Provide accurate and complete information when requested.</li>
          <li>Use the services only for lawful purposes and in accordance with these Terms.</li>
          <li>Maintain the confidentiality of any account credentials.</li>
          <li>Not engage in any activity that interferes with or disrupts the website or services.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Refunds</h2>
        <p className="mb-4">Details regarding payment for our services, including pricing, billing cycles, and accepted payment methods, will be provided separately or during the consultation process. Our refund policy, including any money-back guarantees, will be clearly communicated to you before enrollment in any program.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
        <p className="mb-4">All content on this website, including text, graphics, logos, images, and software, is the property of TechAscension or its content suppliers and protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers and Limitation of Liability</h2>
        <p className="mb-4">Our website and services are provided on an "as is" and "as available" basis. TechAscension makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p className="mb-4">In no event shall TechAscension or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption ) arising out of the use or inability to use the materials on our website, even if TechAscension or a TechAscension authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
        <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to These Terms</h2>
        <p className="mb-4">We reserve the right to revise these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
        <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>By email: [Your Contact Email]</li>
          <li>By visiting this page on our website: <a href="https://www.techascension.com/contact" class="text-blue-600 hover:underline">www.techascension.com/contact</a></li>
        </ul>
      </div>
    </div>
   );
}

export default TermsOfService;
