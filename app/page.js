import HomeData from '@/data/home.json'
import SeoWrapper from '@/components/SeoWrapper/SeoWrapper'

export default function Home() {
  return (
    <SeoWrapper pageKey="home">
      <main className="min-h-screen">
        <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {HomeData.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8">
              {HomeData.hero.subtitle}
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto">
              {HomeData.hero.description}
            </p>
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {HomeData.services.map((service, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-all">
                  <h3 className="text-2xl font-bold">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  )
}
