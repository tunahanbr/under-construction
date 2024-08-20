import { Github, Twitter, Instagram } from "lucide-react"

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8">Our website is under construction. We'll be here soon with our new awesome site.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/tunahanbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/devtunahan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://instagram.com/tunahan.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  )
}