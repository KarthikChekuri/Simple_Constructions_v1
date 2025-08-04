import React, { useState } from 'react';

const projectsData = [
  { id: 1, imageUrl: '/images/pic5.jpg' },
  { id: 2, imageUrl: '/images/pic1.jpg' },
  { id: 3, imageUrl: '/images/pic9.jpg' },
  { id: 4, imageUrl: '/images/project-stairway.jpeg' },
  { id: 5, imageUrl: '/images/project-commercial.jpeg' },
  { id: 6, imageUrl: '/images/project-framing.jpeg' },
  { id: 7, imageUrl: '/images/project-metal-studs.jpeg' },
  { id: 8, imageUrl: '/images/pic2.jpg' },
  { id: 9, imageUrl: '/images/pic3.jpg' },
  { id: 10, imageUrl: '/images/pic4.jpg' },
  { id: 11, imageUrl: '/images/pic6.jpg' },
  { id: 12, imageUrl: '/images/pic7.jpg' },
  { id: 13, imageUrl: '/images/pic8.jpg' },
];

const ProjectCard: React.FC<{ project: typeof projectsData[0]; onClick: () => void }> = ({ project, onClick }) => (
  <div 
    className="group relative overflow-hidden rounded-sm h-64 md:h-80 cursor-pointer"
    onClick={onClick}
  >
    <img 
      src={project.imageUrl} 
      alt="Our Work" 
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://via.placeholder.com/600x320/cccccc/666666?text=Our+Work`;
      }}
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
    
    {/* Expand Icon */}
    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
        </svg>
      </div>
    </div>
  </div>
);

// Image Modal Component
const ImageModal: React.FC<{ isOpen: boolean; imageUrl: string; onClose: () => void }> = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <img 
          src={imageUrl} 
          alt="Our Work" 
          className="w-full h-full object-contain rounded-lg"
        />
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Work</h2>
          <p className="mt-4 font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900">Featured Projects</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 px-4">A selection of projects that showcase our commitment to quality and design excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedImage(project.imageUrl)}
            />
          ))}
        </div>
        
        {!showAll && projectsData.length > 3 && (
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-sm transition-colors duration-300 text-sm md:text-base"
            >
              View More
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <ImageModal 
        isOpen={selectedImage !== null}
        imageUrl={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default Projects;