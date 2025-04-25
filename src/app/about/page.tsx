import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Online Shopping Mall',
  description: 'Learn about our company, mission, and the team behind our online shopping experience.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover the story behind our online shopping mall and our commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              Founded in 2010, our online shopping mall began with a simple mission: to provide customers with quality products 
              at competitive prices, all while offering an exceptional shopping experience.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small business with just a handful of products has grown into a comprehensive online 
              marketplace offering thousands of items across dozens of categories.
            </p>
            <p className="text-gray-600">
              Throughout our journey, we&apos;ve remained committed to our core values of customer satisfaction, product quality, 
              and continuous innovation in the e-commerce space.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              We strive to revolutionize the online shopping experience by combining cutting-edge technology with personalized 
              customer service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-indigo-600 text-2xl mb-3">✓</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Products</h3>
                <p className="text-gray-600">We carefully curate our product selection to ensure high quality and value.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-indigo-600 text-2xl mb-3">✓</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Experience</h3>
                <p className="text-gray-600">We prioritize easy navigation, secure transactions, and responsive support.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-indigo-600 text-2xl mb-3">✓</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">We are committed to environmentally responsible business practices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">John Smith</h3>
                <p className="text-indigo-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in retail and e-commerce, John leads our company vision and strategy.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-indigo-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Sarah oversees our day-to-day operations and ensures that we maintain the highest standards of service.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Lee</h3>
                <p className="text-indigo-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Michael leads our tech team, focusing on creating seamless and secure shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 