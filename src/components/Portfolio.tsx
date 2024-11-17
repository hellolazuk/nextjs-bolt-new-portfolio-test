import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'TechVenture',
      description: 'AI-powered startup accelerator platform that has helped launch over 50 successful companies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      link: '#',
      stats: ['500+ Startups', '$20M Raised', '90% Success Rate'],
    },
    {
      title: 'EcoInnovate',
      description: 'Sustainable technology marketplace connecting green tech startups with environmentally conscious investors.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      link: '#',
      stats: ['100+ Green Startups', '$15M in Deals', '30K+ Users'],
    },
    {
      title: 'HealthTech Hub',
      description: 'Healthcare innovation platform revolutionizing patient care through AI and IoT solutions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      link: '#',
      stats: ['200+ Hospitals', '1M+ Patients', '15 Patents'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions that have made a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded"
                    >
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}