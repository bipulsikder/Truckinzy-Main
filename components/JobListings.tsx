import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, TrendingUp, Building, Calendar, Users, Briefcase } from 'lucide-react';
import { JobModal } from './JobModal';
import { AllJobsModal } from './AllJobsModal';
import { JobDetailsModal } from './JobDetailsModal';

const initialJobs = [
  {
    id: 1,
    title: 'Fleet Maintenance',
    company: 'Leading express transport company',
    location: 'Sahibabad, Uttar Pradesh',
    type: 'Full-time',
    urgent: true,
    salary: '₹25,000 - ₹35,000/month',
    experience: 'Required',
    department: 'Operations',
    postedDate: '2 days ago',
    applicants: 45,
    fleetSize: '150+',
    description: 'We are looking for a Fleet Maintenance Executive to oversee and manage maintenance activities for our fleet. The role involves coordinating with drivers, mechanics, and service centers to ensure smooth fleet operations.',
    overview: 'We are looking for a Fleet Maintenance Executive to oversee and manage maintenance activities for our fleet. The role involves coordinating with drivers, mechanics, and service centers to ensure smooth fleet operations. The ideal candidate should be proactive, detail-oriented, and willing to work in rotational shifts.',
    responsibilities: [
      'Driver Coordination: Communicate with drivers regarding vehicle issues, breakdowns, and maintenance schedules.',
      'Maintenance Management: Coordinate with OEM service centers (Tata Motors, Ashok Leyland, etc.), local mechanics, and other vendors for timely repairs and servicing.',
      'Issue Resolution: Ensure quick resolution of vehicle breakdowns, servicing delays, and mechanical issues.',
      'Vendor Liaison: Maintain relationships with service centers, spare part suppliers, and roadside assistance teams for efficient fleet management.',
      'Reporting & Documentation: Maintain daily records of vehicle repairs, service schedules, expenses, and report to the Maintenance Head.',
      'Supervision: Monitor and supervise repair work to ensure quality and cost efficiency.',
      'Shift Flexibility: Willingness to work in day and night rotational shifts to ensure 24/7 fleet support.'
    ],
    requirements: [
      'Prior experience in fleet maintenance, vehicle service coordination, or a similar role.',
      'Knowledge of commercial vehicle maintenance and repair processes.',
      'Ability to handle emergency breakdown situations and coordinate solutions.',
      'Strong communication and problem-solving skills.',
      'Willing to work in rotational shifts (day & night).',
      'Basic computer skills for record-keeping and reporting.'
    ]
  },
  {
    id: 2,
    title: 'General Manager - Operations',
    company: 'Leading trailer and bus service provider',
    location: 'Aurangabad, Maharashtra',
    type: 'Full-time',
    urgent: true,
    salary: '₹60,000 - ₹1,00,000/month',
    experience: '8+ years',
    department: 'Operations',
    postedDate: '1 week ago',
    applicants: 32,
    fleetSize: '300+',
    description: 'Seeking an experienced General Manager to lead our operations team and drive operational excellence across our fleet of 300+ vehicles.',
    overview: 'We are looking for a dynamic General Manager - Operations to lead and optimize our large-scale fleet operations. The role involves strategic planning, team leadership, and ensuring operational efficiency across our network.',
    responsibilities: [
      'Strategic Planning: Develop and implement operational strategies to optimize fleet utilization and efficiency',
      'Team Leadership: Manage a large team of operations staff, drivers, and support personnel',
      'Performance Management: Set and monitor KPIs for operational excellence',
      'Cost Optimization: Identify and implement cost-saving measures while maintaining service quality',
      'Client Relations: Maintain strong relationships with key clients and handle escalations',
      'Process Improvement: Continuously improve operational processes and implement best practices',
      'Compliance: Ensure all operations comply with regulatory requirements and safety standards'
    ],
    requirements: [
      'Minimum 8 years of experience in transportation/logistics operations',
      'Proven track record of leading large-scale fleet operations',
      'Strong leadership and team management skills',
      'Experience in implementing operational excellence initiatives',
      'Excellent analytical and problem-solving abilities',
      'Knowledge of transportation regulations and safety standards',
      'Strong business acumen and strategic thinking capabilities'
    ]
  },
  {
    id: 3,
    title: 'HR Business Partner',
    company: 'Emerging & fast growing express logistics startup',
    location: 'Udhyog Vihar, Gurugram, Haryana',
    type: 'Full-time',
    urgent: false,
    salary: 'As per industry standards',
    experience: '5+ years',
    department: 'Human Resources',
    postedDate: '3 days ago',
    applicants: 28,
    fleetSize: '150+',
    description: 'Join a rapidly growing logistics startup as an HR Business Partner to drive strategic HR initiatives and talent management.',
    overview: 'We are seeking an experienced HR Business Partner to join our fast-growing logistics startup. The role will be crucial in shaping our HR strategy, driving talent acquisition and development, and building a strong organizational culture.',
    responsibilities: [
      'Strategic HR Planning: Develop and implement HR strategies aligned with business objectives',
      'Talent Management: Lead recruitment, retention, and development initiatives',
      'Employee Relations: Handle employee concerns, grievances, and maintain positive work culture',
      'Performance Management: Design and implement performance evaluation systems',
      'Policy Development: Create and update HR policies and procedures',
      'Training & Development: Identify training needs and organize development programs',
      'Compensation & Benefits: Manage compensation structure and benefits programs'
    ],
    requirements: [
      'Minimum 5 years of experience as an HR Business Partner',
      'Experience in logistics/transportation sector preferred',
      'Strong knowledge of labor laws and HR best practices',
      'Excellent communication and interpersonal skills',
      'Experience in high-growth startup environment',
      'Strategic thinking and problem-solving abilities',
      'MBA/PGDM in HR or relevant qualification'
    ]
  },
{
  id: 4,
  title: 'Operations Executive',
  company: 'Medallion Translinks LLP',
  location: 'Wazirpur, Gurugram, Haryana',
  type: 'Full-time',
  urgent: true,
  salary: '₹21,000 - ₹27,000/month',
  experience: '2-4 years',
  department: 'Operations',
  postedDate: '1 week ago',
  applicants: 35,
  fleetSize: '100+',
  description: 'Join a leading logistics company as an Operations Executive to manage and optimize daily transportation operations.',
  overview: 'We are seeking detail-oriented Operations Executives to strengthen our logistics operations team. This role is crucial for ensuring smooth coordination between drivers, clients, and internal teams while maintaining operational excellence in our transportation services.',
  responsibilities: [
    'Operations Management: Oversee daily transportation operations and fleet movement',
    'Route Optimization: Plan and optimize delivery routes for maximum efficiency',
    'Team Coordination: Coordinate with drivers, clients, and internal departments',
    'Performance Monitoring: Track and report KPIs for operational efficiency',
    'Client Communication: Handle client queries and ensure service quality',
    'Documentation: Maintain accurate records of operations and prepare reports',
    'Issue Resolution: Address and resolve operational challenges promptly'
  ],
  requirements: [
    'Minimum 2 years of experience in logistics/transportation operations',
    'Strong analytical and problem-solving skills',
    'Excellent communication and coordination abilities',
    'Proficiency in MS Office and logistics management tools',
    'Ability to work in shifts when required',
    'Bachelor`s degree in any discipline',
    'Knowledge of local geography and transportation routes'
  ]
},
];

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  urgent: boolean;
  salary: string;
  experience: string;
  department: string;
  postedDate: string;
  applicants: number;
  description: string;
  requirements: string[];
  fleetSize: string;
  overview: string;
  responsibilities: string[];
}

export const JobListings = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [viewingJob, setViewingJob] = useState<Job | null>(null);

  const handleApplicationSubmit = (jobId: number) => {
    setJobs(prevJobs =>
      prevJobs.map(job =>
        job.id === jobId
          ? { ...job, applicants: job.applicants + 1 }
          : job
      )
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="job-listings" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Latest Job Openings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting opportunities in logistics and transportation. Join India's leading companies and drive your career forward.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredJob(index)}
              onHoverEnd={() => setHoveredJob(null)}
              className={`bg-white rounded-xl p-6 transition-all duration-300 ${
                hoveredJob === index 
                  ? 'shadow-2xl scale-[1.02] border-2 border-blue-500' 
                  : 'shadow-lg hover:shadow-xl border-2 border-transparent'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Building className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            Urgent Hiring
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        {/* <span className="text-gray-600">{job.company}</span> */}
                        <span className="text-gray-600">Job Category</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{job.department}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-blue-500 font-semibold">{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                    onClick={() => setViewingJob(job)}
                  >
                    Job Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setShowAllJobs(true)}
          >
            View All Jobs
          </motion.button>
        </motion.div>
      </div>

      {selectedJob && (
        <JobModal
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          jobTitle={selectedJob.title}
          location={selectedJob.location}
          onSubmit={() => {
            handleApplicationSubmit(selectedJob.id);
            setSelectedJob(null);
          }}
        />
      )}

      <JobDetailsModal
        isOpen={!!viewingJob}
        onClose={() => setViewingJob(null)}
        job={viewingJob}
        onApply={() => {
          setSelectedJob(viewingJob);
          setViewingJob(null);
        }}
      />

      <AllJobsModal
        isOpen={showAllJobs}
        onClose={() => setShowAllJobs(false)}
        onJobSelect={(title) => {
          const job = jobs.find(j => j.title === title);
          setSelectedJob(job || null);
        }}
      />
    </section>
  );
}