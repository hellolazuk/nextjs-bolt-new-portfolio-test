import { Target, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Vision-Driven',
      description: 'Committed to creating innovative solutions that drive meaningful change.',
    },
    {
      icon: Heart,
      title: 'People-First',
      description: 'Building businesses that prioritize both customer and employee well-being.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches to solve complex problems.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            With over 15 years of experience in technology and entrepreneurship, I've dedicated my career to building innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Starting as a software developer, I quickly realized my passion for building not just products, but entire businesses. I've since founded multiple successful startups and helped numerous entrepreneurs turn their visions into reality.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My mission is to leverage technology and innovation to create sustainable businesses that solve real-world problems while maintaining the highest standards of ethical entrepreneurship.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">
                  <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}