import Navbar from '@/components/Navbar/Navbar.js'
import Footer from '@/components/Footer/Footer.js'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
