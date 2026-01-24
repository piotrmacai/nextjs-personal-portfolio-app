"use client"
import React from "react"
import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/80 pt-32 md:pt-40">
            <h1 className="text-4xl md:text-5xl mb-8 text-white">Privacy Policy</h1>
            <p className="mb-8 text-sm text-white/60">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">1. Introduction</h2>
                    <p className="mb-4 leading-relaxed">
                        Welcome to Macailabs ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us.
                    </p>
                    <p className="leading-relaxed">
                        This Privacy Policy applies to all information collected through our website (https://macai.dev), as well as any related services, sales, marketing, or events. By accessing or using our Website, you agree to this Privacy Policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">2. Information We Collect</h2>
                    <div className="mb-6">
                        <h3 className="text-xl mb-2 text-white/90 font-medium">Personal Information You Disclose to Us</h3>
                        <p className="mb-4 leading-relaxed">
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                            <li>Names</li>
                            <li>Email addresses</li>
                            <li>Phone numbers</li>
                            <li>Job titles</li>
                            <li>Contact preferences</li>
                            <li>Billing addresses (if applicable)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl mb-2 text-white/90 font-medium">Information Automatically Collected</h3>
                        <p className="mb-4 leading-relaxed">
                            We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">3. How We Use Your Information</h2>
                    <p className="mb-4 leading-relaxed">
                        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
                        <li>To send administrative information to you, such as product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To request feedback and to contact you about your use of our Website.</li>
                        <li>To protect our Services and for legal reasons.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">4. Cookies and Tracking Technologies</h2>
                    <p className="mb-4 leading-relaxed">
                        We use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        We respect your right to privacy and provide you with the option to manage your cookie preferences. You can choose to accept or reject non-essential cookies through our Cookie Banner settings. We categorize cookies as follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                        <li><strong>Necessary Cookies:</strong> Essential for the website to function properly.</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                        <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">5. How We Share Your Information</h2>
                    <p className="mb-4 leading-relaxed">
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                        <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                        <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                        <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">6. Your Privacy Rights (GDPR/RODO)</h2>
                    <p className="mb-4 leading-relaxed">
                        In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                        <li>To request access and obtain a copy of your personal information.</li>
                        <li>To request rectification or erasure of your personal information.</li>
                        <li>To restrict the processing of your personal information.</li>
                        <li>To data portability (if applicable).</li>
                        <li>To object to the processing of your personal information.</li>
                    </ul>
                    <p className="mb-4 leading-relaxed">
                        To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws. If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">7. Third-Party Websites</h2>
                    <p className="mb-4 leading-relaxed">
                        The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services, or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">8. Data Retention</h2>
                    <p className="mb-4 leading-relaxed">
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">9. Updates to This Policy</h2>
                    <p className="mb-4 leading-relaxed">
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl mb-4 text-white">10. Contact Us</h2>
                    <p className="mb-4 leading-relaxed">
                        If you have questions or comments about this policy, you may email us or contact us by post at:
                    </p>
                    <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-lg">
                        <p className="font-semibold text-white text-lg mb-2">Macailabs</p>
                        <p className="mb-2">Email: <a href="mailto:contact@macailabs.com" className="text-lime-400 hover:text-lime-300 transition-colors">contact@macailabs.com</a></p>
                        <p>
                            <Link href="/contact" className="text-lime-400 hover:text-lime-300 transition-colors underline">
                                Visit our Contact Page
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
