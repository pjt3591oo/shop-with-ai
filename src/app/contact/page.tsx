import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Online Shopping Mall',
  description: 'Get in touch with our customer service team. We are here to answer your questions and assist you with your needs.',
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 border"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 border"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 border"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 border"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg 
                      className="h-6 w-6 text-indigo-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-lg font-medium">Phone</p>
                    <p>+1 (555) 123-4567</p>
                    <p>Monday - Friday: 9am - 5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg 
                      className="h-6 w-6 text-indigo-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-lg font-medium">Email</p>
                    <p>support@onlineshopmall.com</p>
                    <p>Response time: within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg 
                      className="h-6 w-6 text-indigo-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-lg font-medium">Address</p>
                    <p>123 Shopping Avenue</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Section - This would be replaced with an actual map component in a real implementation */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-500">Map would be displayed here</p>
                {/* In a real implementation, you would add a Google Maps, Mapbox, or other map component here */}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">What are your shipping times?</h3>
                <p className="mt-2 text-gray-600">Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">How can I track my order?</h3>
                <p className="mt-2 text-gray-600">Once your order ships, you&apos;ll receive a tracking number via email that you can use to monitor your delivery status.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">What is your return policy?</h3>
                <p className="mt-2 text-gray-600">We offer a 30-day return policy for most items. Please visit our Returns page for detailed information.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Do you ship internationally?</h3>
                <p className="mt-2 text-gray-600">Yes, we ship to most countries worldwide. International shipping times and fees vary by location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 