import React, { useState } from "react";

const testimonialsData = [
  { id: 1, text: "Bathed in dawn's hues, nature's silent symphony whispers tales of growth, painting a tranquil canvas that tells the story of the world's tender rebirth.", name: "AA" },
  { id: 2, text: "The city unfolds at twilight—a mosaic of dreams. Neon signs and bustling streets create an urban rhythm where stories of ambition and progress intertwine.", name: "BB" },
  { id: 3, text: "Sunsets cast a golden spell over ancient ruins, stones preserving tales of forgotten empires, and the silent passage of time etched in their weathered facade.", name: "CC" },
  { id: 4, text: "In the quiet library, the scent of knowledge hangs in the air—a mesmerizing symphony of turning pages and whispered wisdom, a sanctuary of enlightenment.", name: "DD" },
  { id: 5, text: "Salty breezes dance with seagulls as waves kiss the shore—a coastal serenade echoing tales of tides, maritime adventures, and the secrets of the sea", name: "EE" },
  { id: 6, text: "Skyscrapers stand tall, embracing stories of innovation and ambition high above. Their steel frames witness the city's heartbeat, pulsating with dreams and aspirations.", name: "FF" },
  { id: 7, text: "Within the artist's studio, colors blend on the canvas—a dance of expression capturing emotions and narratives waiting to be unveiled in every stroke.", name: "GG" },
  { id: 8, text: "At the mountain's summit, breathtaking vistas unfold—a realm where crisp air intertwines with echoes of conquering peaks.", name: "HH" },
  // Add more testimonials as needed
];

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(1);
  
    const handleSelectTestimonial = (id) => {
      setCurrentTestimonial(id);
    };
  
    return (
        <div className="flex flex-col  md:flex-row justify-center items-center h-screen bg-gradient-to-br from-blue-300 to-indigo-600">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <img
              src="https://media.istockphoto.com/id/1461631485/photo/group-of-young-students-checking-exam-results-or-waiting-for-project-approval-on-laptop-at.jpg?s=1024x1024&w=is&k=20&c=Q3JJ_BHFwSkIHIaZ0AOE_Me2E4QS-BUEgEcNuJKgcrI="
              alt="Student sitting around studying"
              className="w-full h-auto rounded-lg"
            />
          </div>
    
          {/* Testimonials Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <div className="border border-yellow-500 rounded-lg text-sm  h-78 md:h-80 overflow-hidden relative">
              {/* Testimonial Display */}
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full h-full transition-transform transform ${
                    currentTestimonial === testimonial.id ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <p className="text-white text-lg p-4">{testimonial.text}</p>
                  <p className="text-gray-300 text-sm sm:pt-0 pl-4">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
    
              <div className="relative flex justify-center sm:pb-2 mt-[17rem] md:mt-[14rem]">
                {testimonialsData.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleSelectTestimonial(testimonial.id)}
                    className={`bg-yellow-300 text-blue-500 rounded-full w-6 h-6 mx-2 focus:outline-none ${
                      currentTestimonial === testimonial.id && 'bg-yellow-500'
                    }`}
                  >
                    &bull;
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Testimonials;
    