import { Trophy, Users, TrendingUp } from 'lucide-react';

export default function Achievements() {
  const metrics = [
    {
      icon: Trophy,
      value: '$50M+',
      label: 'Revenue Generated',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Startups Mentored',
    },
    {
      icon: TrendingUp,
      value: '5',
      label: 'Successful Exits',
    },
  ];

  const recognitions = [
    {
      year: '2023',
      title: 'Tech Innovator of the Year',
      organization: 'TechWorld Awards',
    },
    {
      year: '2022',
      title: 'Forbes 30 Under 30',
      organization: 'Forbes',
    },
    {
      year: '2021',
      title: 'Best New Startup',
      organization: 'Startup Awards',
    },
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A track record of success and recognition in the entrepreneurial world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center"
            >
              <metric.icon className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Industry Recognition
          </h3>
          <div className="space-y-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg"
              >
                <div className="flex-1">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                    {recognition.year}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {recognition.title}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {recognition.organization}
                  </div>
                </div>
                <Trophy className="w-6 h-6 text-yellow-500 mt-4 md:mt-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}