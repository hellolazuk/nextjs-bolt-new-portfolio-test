import {
  Code,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Cloud,
  Shield,
} from 'lucide-react';

export default function Expertise() {
  const skills = [
    {
      category: 'Technology',
      items: [
        { icon: Code, label: 'Full-Stack Development' },
        { icon: Database, label: 'Big Data & Analytics' },
        { icon: Cloud, label: 'Cloud Architecture' },
        { icon: Shield, label: 'Cybersecurity' },
      ],
    },
    {
      category: 'Business',
      items: [
        { icon: Briefcase, label: 'Strategic Planning' },
        { icon: TrendingUp, label: 'Growth Hacking' },
        { icon: Users, label: 'Team Leadership' },
        { icon: Globe, label: 'Global Operations' },
      ],
    },
  ];

  const specializations = [
    {
      title: 'AI & Machine Learning',
      description: 'Implementing cutting-edge AI solutions for business automation and optimization.',
    },
    {
      title: 'Blockchain Technology',
      description: 'Developing decentralized applications and smart contract systems.',
    },
    {
      title: 'IoT Solutions',
      description: 'Creating connected device ecosystems for smart cities and industries.',
    },
  ];

  return (
    <section id="expertise" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive skill set spanning technology and business domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skills.map((skillSet, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {skillSet.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skillSet.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Industry Specializations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg"
              >
                <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {spec.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}