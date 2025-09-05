import React from 'react';
import { Link } from './Router';

function Privacy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="mb-4"><strong>Effective Date: September 5, 2025</strong></p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
        <p className="mb-4">Welcome to TechAscension. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.techascension.com" class="text-blue-600 hover:underline">www.techascension.com</a>, and use our services.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
        <p className="mb-4">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li><strong>Personal Data:</strong> Name, email address, phone number, and any other information you choose to provide.</li>
          <li><strong>Usage Data:</strong> Information about how you access and use the website, such as your IP address, browser type, operating system, referral URLs, pages viewed, and the dates/times of your visits.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect for various purposes, including:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To improve, personalize, and expand our website and services.</li>
          <li>To understand and analyze how you use our website.</li>
          <li>To develop new products, services, features, and functionality.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li>To process your transactions and manage your orders.</li>
          <li>To send you emails.</li>
          <li>To find and prevent fraud.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
        <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, or safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security of Your Information</h2>
        <p className="mb-4">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>The right to access, update, or delete the information we have on you.</li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent.</li>
        </ul>
        <p className="mb-4">To exercise any of these rights, please contact us at [Your Contact Email].</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
        <p className="mb-4">Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>By email: [Your Contact Email]</li>
          <li>By visiting this page on our website: <a href="https://www.techascension.com/contact" class="text-blue-600 hover:underline">www.techascension.com/contact</a></li>
        </ul>
      </div>
    </div>
   );
}

export default Privacy;
