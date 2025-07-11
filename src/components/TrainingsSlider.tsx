
import { Button } from '@/components/ui/button';
import { Calendar, Users, BookOpen, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trainingData } from '../data/trainingData';

const TrainingsSlider = () => {
  const navigate = useNavigate();

  // Get latest 4 trainings sorted by date
  const latestTrainings = [...trainingData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our comprehensive training programs designed to enhance anti-narcotics capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {latestTrainings.map((training, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                training.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                training.status === 'Completed' ? 'bg-green-100 text-green-600' :
                'bg-orange-100 text-orange-600'
              }`}>
                {training.status}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">{training.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{training.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{training.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{training.participants} participants</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/trainings')}
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Trainings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingsSlider;
