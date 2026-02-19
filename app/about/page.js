import AboutData from '@/data/about.json'
import SeoWrapper from '@/components/SeoWrapper/SeoWrapper'

export default function About() {
  return (
    <SeoWrapper pageKey="about">
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-gray-800">{AboutData.title}</h1>
          <div className="bg-gray-50 rounded-2xl p-12 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {AboutData.content}
            </p>
            <div className="flex flex-wrap gap-4 text-2xl font-bold text-blue-600">
              <span>{AboutData.experience}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
              <ul className="space-y-3 text-xl">
                {AboutData.expertise.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </SeoWrapper>
  )
}
