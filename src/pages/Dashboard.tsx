import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, User, Briefcase, Edit2, Save, X } from 'lucide-react';
import { supabase } from '../supabase';

export default function Dashboard() {
  const { userData, currentUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState(userData?.phone || '');
  const [bio, setBio] = useState(userData?.bio || '');
  const [loading, setLoading] = useState(false);

  if (!userData || !currentUser) {
    return (
      <div className="p-8 text-center text-slate-500 font-medium">
        Please log in to view your dashboard.
      </div>
    );
  }

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({ phone, bio })
        .eq('uid', currentUser.id);
        
      if (error) throw error;
      
      setEditing(false);
      // Simple way to refresh data for now
      window.location.reload(); 
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const isSeeker = userData.role === 'seeker';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">User Dashboard</h1>
        {!editing ? (
          <button 
            onClick={() => setEditing(true)}
            className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-3 py-1.5 rounded-lg text-sm transition shadow-sm"
          >
            <Edit2 size={14} /> Edit Profile
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setEditing(false)}
              className="flex items-center gap-1 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-3 py-1.5 rounded-lg text-sm transition"
            >
              <X size={14} /> Cancel
            </button>
            <button 
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-1 bg-emerald-600 text-white hover:bg-emerald-700 font-bold px-3 py-1.5 rounded-lg text-sm transition shadow-sm"
            >
              <Save size={14} /> {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
            {userData.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-1.5 justify-center">
            {userData.name}
            {userData.isBusinessVerified && <Check className="text-emerald-500" size={18} />}
          </h2>
          <p className="text-sm font-medium text-emerald-700 capitalize mt-1 mb-4 flex items-center gap-1">
            {isSeeker ? <User size={14} /> : <Briefcase size={14} />} {userData.role}
          </p>

          <div className="w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
            <div className="mb-2">
              <span className="text-xs text-slate-500 block font-semibold mb-0.5">Email (Verified)</span>
              <span className="text-sm font-bold text-slate-800">{userData.email}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block font-semibold mb-0.5">Phone Number</span>
              {editing ? (
                <input 
                  type="text" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91..."
                  className="w-full px-2 py-1 text-sm border border-emerald-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              ) : (
                <span className="text-sm font-bold text-slate-800">{userData.phone || 'Not provided'}</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Details and Actions */}
        <div className="md:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Account Security & Privacy</h2>
                <p className="text-xs text-slate-500">LinkKaro protects your contact info</p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldAlert size={14} /> Protected
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your phone number and email address are hidden from public view. They are only shared when you explicitly accept a job application or a contact request.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900 mb-1">About {isSeeker ? 'Me' : 'My Business'}</h2>
            {editing ? (
              <textarea 
                value={bio}
                onChange={e => setBio(e.target.value)}
                placeholder="Tell others about your skills and experience..."
                rows={4}
                className="w-full px-3 py-2 text-sm border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-2"
              />
            ) : (
              <p className="text-sm text-slate-600 leading-relaxed mt-2 bg-slate-50 p-4 rounded-xl border border-slate-100 min-h-[100px]">
                {userData.bio || "No description provided yet."}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
