import { motion } from 'framer-motion';
import { Briefcase, Users, ShieldCheck, MapPin, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
    out: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-700 to-emerald-800 text-white py-14 px-4 text-center rounded-b-3xl shadow-lg relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.span 
            variants={itemVariants}
            className="inline-block bg-emerald-900/60 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 border border-emerald-500/30"
          >
            Trusted Rural Employment Platform
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4"
          >
            Connecting Local Talent with Local Opportunity
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto mb-8 font-normal"
          >
            LinkKaro bridges the gap between verified workers and small businesses in rural and semi-urban communities across Tamil Nadu and India.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/jobs')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold py-3.5 px-6 rounded-2xl shadow-lg transition text-base flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              Explore Local Jobs
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/workers')}
              className="bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold py-3.5 px-6 rounded-2xl shadow-lg transition text-base flex items-center justify-center gap-2"
            >
              <Users size={20} />
              Hire Local Workers
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl font-bold text-center mb-8 text-slate-900"
        >
          Why Rural Communities Choose LinkKaro
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Verified Contact Privacy", desc: "Personal phone numbers and emails are hidden until worker application or contact request is accepted." },
            { icon: MapPin, title: "District & Village Discovery", desc: "Find jobs and hire workers within your immediate district or nearby taluks to cut down travel expenses." },
            { icon: UserCheck, title: "Atomic Worker Counting", desc: "Job listings automatically update required worker counts as hires occur, preventing over-recruitment." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 text-center transition-all duration-300"
            >
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700 mx-auto mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About LinkKaro Section */}
      <section className="bg-emerald-50 border-y border-emerald-100 py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-3 text-slate-900">About LinkKaro</h2>
          <p className="text-slate-700 leading-relaxed text-base">
            LinkKaro connects rural and semi-urban workers with nearby employers, small businesses, construction leads, and agricultural units. By focusing on verified identities, privacy, and two-way local recruitment, LinkKaro strengthens regional economies and creates reliable local livelihoods.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}
