import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                John Doe
                <span className="block text-blue-600 dark:text-blue-400">Entrepreneur & Innovator</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transforming ideas into successful ventures. Specializing in tech startups and digital innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Let's Connect
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}