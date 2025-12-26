import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner';
import CTASection from '@/components/CTASection';
import { Bus, Clock, MapPin, CheckCircle2, Users, Calendar } from 'lucide-react';

export default function Transportation() {
  const benefits = [
    {
      icon: Clock,
      title: '0% Late Arrivals',
      description: 'Our transportation system ensures employees arrive on time, every time. No more delays or missed shifts.'
    },
    {
      icon: MapPin,
      title: 'Door-to-Door Service',
      description: 'We pick up employees from convenient locations and drop them directly at the workplace.'
    },
    {
      icon: Calendar,
      title: '24/7 Availability',
      description: 'Our vehicles and drivers are available around the clock to accommodate any shift schedule.'
    },
    {
      icon: Users,
      title: 'Logistics Services',
      description: 'Full-service logistics and freight transportation with our own fleet of trucks.'
    }
  ];

  const features = [
    'Reliable pickup and drop-off',
    'Professional, trained drivers',
    'Clean, maintained vehicles',
    'Flexible scheduling',
    'Real-time tracking available',
    'Night shift support'
  ];

  return (
    <div>
      <HeroBanner
        subtitle="TRANSPORT"
        title="0% possibility of being late"
        watermarkText="Transport"
        backgroundImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                We Create Opportunities for Candidates & Businesses
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mb-8" />
              
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Stafflinx offers comprehensive transportation and logistics services. With our own 
                fleet of trucks, we provide reliable transportation for our employees to and from 
                the workplace, ensuring 0% possibility of being late and no-shows from work.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Beyond employee transportation, our logistics capabilities extend to freight and 
                delivery services. Our professional drivers and well-maintained vehicles are available 
                24/7 to meet your transportation needs, making us your complete staffing and logistics partner.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                  alt="Transportation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-4xl font-bold text-white">0%</div>
                      <div className="text-white/80 text-sm">Late Arrivals</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">24/7</div>
                      <div className="text-white/80 text-sm">Service</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white">100%</div>
                      <div className="text-white/80 text-sm">Reliable</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center">
                    <Bus className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Free Transport</div>
                    <div className="text-slate-500 text-sm">For all placed employees</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              Why Our Transport Service Matters
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}