import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechStart",
    content: "Chidinma is an exceptional administrative professional. Her attention to detail and organizational skills transformed our daily operations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Director, Luxe Salon",
    content: "As a salon manager, she brought a new level of customer service and efficiency to our business. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Marketing Head",
    content: "The graphic designs she created for our campaign were stunning and perfectly captured our brand's essence. A true creative talent.",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Client Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">
            What People <span className="text-gradient">Say</span>
          </h3>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="glass-card p-8 rounded-3xl h-full flex flex-col mt-4 mb-2">
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  
                  <Quote className="text-slate-200 dark:text-slate-700 w-12 h-12 mb-4 rotate-180" />
                  
                  <p className="text-slate-600 dark:text-slate-300 font-body mb-8 flex-1 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h5 className="font-heading font-bold text-slate-800 dark:text-white">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
