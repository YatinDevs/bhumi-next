import SeoWrapper from '@/components/SeoWrapper/SeoWrapper'

export default function Contact() {
  return (
    <SeoWrapper pageKey="contact">
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">
            Get Free Consultation
          </h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Milind Rajhans</h2>
            <p className="text-xl mb-8">Owner - FI-ACC Bhumi Industrial Consultant</p>
            <div className="space-y-4 mb-12">
              <p className="text-2xl">📧 info@bhumiindustrial.com</p>
              <p className="text-2xl">📞 +91-XXXXXXXXXX</p>
            </div>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl text-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl text-lg" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-xl text-lg"></textarea>
              <button className="w-full bg-white text-blue-600 py-4 px-8 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </SeoWrapper>
  )
}
