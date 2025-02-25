import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Briefcase, TrendingUp, Search, Filter, Building, Calendar, Users } from 'lucide-react';
import { JobDetailsModal } from './JobDetailsModal';

interface AllJobsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobSelect: (jobTitle: string) => void;
}

const allJobs = [
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
{
  id: 5,
  title: 'Executive Parking Administration',
  company: 'Medallion Translinks LLP',
  location: 'Wazirpur, Gurgaon',
  type: 'Full-time',
  urgent: false,
  salary: '₹28,000/month',
  experience: '2-5 years',
  department: 'Administration',
  postedDate: '5 days ago',
  applicants: 25,
  fleetSize: '100+',
  description: 'Seeking an experienced Parking Administration Executive to manage and optimize parking operations for our fleet.',
  overview: 'We are looking for a meticulous Parking Administration Executive to oversee our vehicle parking facilities and optimize space utilization. The role involves managing parking logistics, security coordination, and maintaining parking facility standards.',
  responsibilities: [
    'Parking Management: Oversee daily parking operations and space allocation',
    'Security Coordination: Work with security team to ensure vehicle safety',
    'Space Optimization: Implement efficient parking layouts and systems',
    'Facility Maintenance: Ensure parking facilities are well-maintained',
    'Record Keeping: Maintain detailed records of vehicle movement',
    'Team Supervision: Manage parking attendants and support staff',
    'Safety Compliance: Ensure adherence to safety protocols and guidelines'
  ],
  requirements: [
    'Previous experience in parking management or facility administration',
    'Strong organizational and space management skills',
    'Knowledge of parking management systems',
    'Leadership and team management abilities',
    'Good communication and interpersonal skills',
    'Basic computer proficiency',
    'Ability to work in shifts'
  ]
},
{
  id: 6,
  title: 'Fleet Maintenance Executive',
  company: 'Medallion Translinks LLP',
  location: 'Wazirpur, Gurgaon',
  type: 'Full-time',
  urgent: true,
  salary: '₹20,000 - ₹25,000/month',
  experience: '2-4 years',
  department: 'Maintenance',
  postedDate: '3 days ago',
  applicants: 40,
  fleetSize: '100+',
  description: 'Looking for a Fleet Maintenance Executive to ensure optimal performance and maintenance of our vehicle fleet.',
  overview: 'We require a skilled Fleet Maintenance Executive to oversee the maintenance and repair operations of our diverse vehicle fleet. The role focuses on preventive maintenance, repair coordination, and ensuring vehicle reliability.',
  responsibilities: [
    'Maintenance Planning: Schedule and coordinate regular vehicle maintenance',
    'Vendor Management: Coordinate with service centers and spare parts suppliers',
    'Cost Control: Optimize maintenance costs while ensuring quality',
    'Documentation: Maintain service records and warranty documentation',
    'Quality Assurance: Ensure high standards of maintenance work',
    'Emergency Response: Handle breakdown situations and repairs',
    'Inventory Management: Monitor and manage spare parts inventory'
  ],
  requirements: [
    'Experience in fleet maintenance or automotive service management',
    'Technical knowledge of commercial vehicles',
    'Strong vendor management skills',
    'Problem-solving and decision-making abilities',
    'Good communication and coordination skills',
    'Computer literacy for maintenance management systems',
    'Flexible working hours capability'
  ]
},
{
  id: 7,
  title: 'HR Business Partner',
  company: 'Medallion Translinks LLP',
  location: 'Udhyog Vihar, Gurgaon',
  type: 'Full-time',
  urgent: false,
  salary: 'As per industry standards',
  experience: '4-6 years',
  department: 'Human Resources',
  postedDate: '1 week ago',
  applicants: 30,
  fleetSize: '100+',
  description: 'Seeking an experienced HR Business Partner to drive strategic HR initiatives and employee development.',
  overview: 'We are looking for a strategic HR Business Partner to strengthen our human resources function. The role involves developing and implementing HR strategies, managing talent acquisition, and fostering a positive work culture.',
  responsibilities: [
    'HR Strategy: Develop and implement HR policies and procedures',
    'Talent Management: Lead recruitment and retention initiatives',
    'Employee Relations: Handle employee concerns and maintain work culture',
    'Performance Management: Design and implement evaluation systems',
    'Training: Identify and coordinate training programs',
    'Compliance: Ensure adherence to labor laws and regulations',
    'Change Management: Support organizational change initiatives'
  ],
  requirements: [
    'Minimum 4 years of experience in HR Business Partner role',
    'Strong knowledge of labor laws and HR practices',
    'Excellent communication and interpersonal skills',
    'Experience in transportation/logistics sector preferred',
    'MBA/PGDM in HR or relevant qualification',
    'Strong analytical and problem-solving abilities',
    'Experience with HRMS and HR analytics'
  ]
},
{
  id: 8,
  title: 'General Manager-Operations',
  company: 'Patil Venture Pvt Ltd',
  location: 'Aurangabad, Maharashtra',
  type: 'Full-time',
  urgent: true,
  salary: '₹50,000 - ₹1,00,000/month',
  experience: '8-12 years',
  department: 'Operations',
  postedDate: '2 days ago',
  applicants: 20,
  fleetSize: '200+',
  description: 'Seeking an experienced General Manager to lead operations and drive business growth.',
  overview: 'We are looking for a seasoned General Manager - Operations to provide strategic leadership and drive operational excellence. The role involves managing end-to-end operations, team leadership, and business development initiatives.',
  responsibilities: [
    'Strategic Planning: Develop and implement operational strategies',
    'Business Development: Identify and pursue growth opportunities',
    'Team Leadership: Manage large cross-functional teams',
    'Process Optimization: Improve operational efficiency and productivity',
    'Budget Management: Oversee operational budgets and cost control',
    'Client Management: Maintain key client relationships',
    'Quality Assurance: Ensure high service quality standards'
  ],
  requirements: [
    'Extensive experience in operations management',
    'Proven track record of business growth',
    'Strong leadership and team management skills',
    'Strategic thinking and business acumen',
    'Excellent communication and negotiation abilities',
    'MBA/PGDM from reputed institution',
    'Industry network and market knowledge'
  ]
},
{
  id: 9,
  title: 'HR Associate',
  company: 'Patil Venture Pvt Ltd',
  location: 'Aurangabad, Maharashtra',
  type: 'Full-time',
  urgent: false,
  salary: '₹25,000 - ₹40,000/month',
  experience: '2-4 years',
  department: 'Human Resources',
  postedDate: '4 days ago',
  applicants: 45,
  fleetSize: '200+',
  description: 'Looking for an HR Associate to support various HR functions and employee engagement initiatives.',
  overview: 'We require an HR Associate to handle various aspects of human resources management. The role involves recruitment, employee engagement, HR operations, and maintaining HR documentation.',
  responsibilities: [
    'Recruitment: Support end-to-end recruitment process',
    'Documentation: Maintain employee records and HR documents',
    'Onboarding: Coordinate new employee joining and induction',
    'Employee Engagement: Organize employee events and activities',
    'HR Operations: Handle day-to-day HR activities',
    'Policy Implementation: Ensure HR policy compliance',
    'Reporting: Prepare various HR reports and analytics'
  ],
  requirements: [
    'Prior experience in HR operations',
    'Knowledge of HR processes and best practices',
    'Good communication and interpersonal skills',
    'Proficiency in MS Office and HRMS',
    'Bachelor`s degree in HR or related field',
    'Organizational and multitasking abilities',
    'Team player with positive attitude'
  ]
},
{
  id: 10,
  title: 'Accounts Manager',
  company: 'Patil Venture Pvt Ltd',
  location: 'Aurangabad, Maharashtra',
  type: 'Full-time',
  urgent: true,
  salary: '₹20,000 - ₹30,000/month',
  experience: '3-5 years',
  department: 'Finance',
  postedDate: '1 week ago',
  applicants: 38,
  fleetSize: '200+',
  description: 'Seeking an experienced Accounts Manager to handle financial operations and reporting.',
  overview: 'We are looking for a detail-oriented Accounts Manager to oversee accounting operations and financial reporting. The role involves managing accounts, financial analysis, and ensuring compliance with accounting standards.',
  responsibilities: [
    'Financial Management: Handle day-to-day accounting operations',
    'Reporting: Prepare financial statements and reports',
    'Compliance: Ensure adherence to accounting standards',
    'Budget Control: Monitor and control departmental budgets',
    'Audit Support: Coordinate with internal and external auditors',
    'Tax Management: Handle tax compliance and filing',
    'Team Supervision: Lead and guide accounts team'
  ],
  requirements: [
    'B.Com with relevant accounting certifications',
    'Experience in accounting and financial management',
    'Knowledge of accounting software and tools',
    'Strong analytical and problem-solving skills',
    'Understanding of tax laws and regulations',
    'Team management experience',
    'Excellent attention to detail'
  ]
},

{
  id: 11,
  title: 'Assistant Accounts Executive',
  company: 'Jai Shakti Roadlines',
  location: 'Sahibabad, Uttar Pradesh',
  type: 'Full-time',
  urgent: true,
  salary: '₹20,000 - ₹30,000/month',
  experience: '2-4 years',
  department: 'Finance',
  postedDate: '2 days ago',
  applicants: 25,
  fleetSize: '75+',
  description: 'Join a reputable logistics company as an Assistant Accounts Executive to manage financial operations and reporting.',
  overview: 'We are seeking a detail-oriented Assistant Accounts Executive to join our finance team. This role is vital for maintaining accurate financial records, processing transactions, and supporting the accounting department in daily operations. The ideal candidate will have a strong foundation in accounting principles and experience in transportation/logistics sector.',
  responsibilities: [
    'Financial Records: Maintain accurate books of accounts and financial records',
    'Transaction Processing: Handle accounts payable, receivable, and bank reconciliations',
    'Billing Management: Process customer invoices and manage billing cycles',
    'Compliance: Ensure adherence to accounting standards and tax regulations',
    'Report Generation: Prepare monthly financial reports and statements',
    'Vendor Management: Process vendor payments and maintain vendor relationships',
    'Documentation: Maintain organized financial documentation and filing systems',
    'Audit Support: Assist in internal and external audit processes'
  ],
  requirements: [
    'B.Com degree with 2-4 years of accounting experience',
    'Proficiency in accounting software and MS Excel',
    'Knowledge of GST and taxation procedures',
    'Strong attention to detail and analytical skills',
    'Experience in transportation/logistics sector preferred',
    'Excellent communication and organizational abilities',
    'Ability to work under pressure and meet deadlines'
  ]
},
{
  id: 12,
  title: 'Traffic Incharge',
  company: 'Jai Shakti Roadlines',
  location: 'Sahibabad, Uttar Pradesh',
  type: 'Full-time',
  urgent: true,
  salary: '₹15,000 - ₹25,000/month',
  experience: '2-3 years',
  department: 'Operations',
  postedDate: '3 days ago',
  applicants: 40,
  fleetSize: '75+',
  description: 'Seeking experienced Traffic Incharge to manage vehicle movement and coordinate transportation operations.',
  overview: 'We are looking for dynamic Traffic Incharge professionals to oversee our transportation operations. This role is crucial for ensuring efficient vehicle movement, route optimization, and timely delivery of goods. The position requires excellent coordination skills and the ability to handle multiple priorities in a fast-paced environment.',
  responsibilities: [
    'Fleet Coordination: Manage daily vehicle movement and route planning',
    'Schedule Management: Create and optimize delivery schedules',
    'Driver Management: Coordinate with drivers for assignments and routes',
    'Route Optimization: Plan efficient routes to minimize costs and delivery time',
    'Issue Resolution: Handle transportation-related issues and delays',
    'Communication: Maintain regular contact with clients and team members',
    'Documentation: Maintain records of vehicle movements and deliveries',
    'Safety Compliance: Ensure adherence to safety protocols and regulations'
  ],
  requirements: [
    'Minimum 2 years experience in traffic management or logistics',
    'Strong knowledge of local routes and transportation networks',
    'Excellent coordination and communication skills',
    'Ability to work in shifts and handle pressure',
    'Basic computer knowledge for documentation',
    'Problem-solving and decision-making abilities',
    'Familiarity with transportation management systems'
  ]
},
{
  id: 13,
  title: 'Driver Coordinator',
  company: 'Jai Shakti Roadlines',
  location: 'Sahibabad, Uttar Pradesh',
  type: 'Full-time',
  urgent: false,
  salary: '₹15,000 - ₹25,000/month',
  experience: '1-3 years',
  department: 'Operations',
  postedDate: '4 days ago',
  applicants: 35,
  fleetSize: '75+',
  description: 'Looking for a Driver Coordinator to manage driver operations and ensure smooth fleet management.',
  overview: 'We require an experienced Driver Coordinator to manage our driver fleet and ensure efficient transportation operations. This role focuses on driver management, schedule coordination, and maintaining high service standards. The ideal candidate will have strong people management skills and experience in transportation operations.',
  responsibilities: [
    'Driver Management: Coordinate with drivers for daily assignments and schedules',
    'Performance Monitoring: Track driver performance and adherence to schedules',
    'Documentation: Maintain driver records, licenses, and compliance documents',
    'Training Coordination: Organize driver training and safety programs',
    'Issue Resolution: Handle driver-related concerns and operational issues',
    'Schedule Management: Create and manage driver duty rosters',
    'Communication: Maintain clear communication between drivers and management',
    'Safety Compliance: Ensure drivers follow safety protocols and regulations'
  ],
  requirements: [
    'Previous experience in driver coordination or fleet management',
    'Strong communication and interpersonal skills',
    'Knowledge of transportation regulations and safety standards',
    'Ability to handle multiple tasks and priorities',
    'Basic computer skills for documentation',
    'Problem-solving and conflict resolution abilities',
    'Flexibility to work in shifts when required'
  ]
},
{
  id: 14,
  title: 'Sales & Booking Manager',
  company: 'New Ventions India',
  location: 'Noida Sector-10, Uttar Pradesh',
  type: 'Full-time',
  urgent: true,
  salary: '₹20,000 - ₹25,000/month',
  experience: '3-5 years',
  department: 'Sales',
  postedDate: '1 week ago',
  applicants: 30,
  fleetSize: '50+',
  description: 'Seeking an experienced Sales & Booking Manager to drive business growth and manage client relationships.',
  overview: 'We are looking for a dynamic Sales & Booking Manager to lead our sales initiatives and manage booking operations. This role combines sales strategy with operational excellence to drive business growth. The ideal candidate will have a proven track record in logistics sales and excellent client relationship management skills.',
  responsibilities: [
    'Sales Strategy: Develop and implement sales strategies to achieve targets',
    'Client Management: Build and maintain strong relationships with key clients',
    'Booking Operations: Oversee end-to-end booking process and optimization',
    'Team Leadership: Lead and motivate the sales and booking team',
    'Market Analysis: Monitor market trends and competitor analysis',
    'Performance Tracking: Monitor KPIs and prepare sales reports',
    'Process Improvement: Optimize booking processes for efficiency',
    'Revenue Growth: Identify opportunities for revenue enhancement'
  ],
  requirements: [
    'Minimum 3 years experience in logistics sales',
    'Proven track record of achieving sales targets',
    'Strong client relationship management skills',
    'Experience in team leadership and management',
    'Excellent communication and negotiation abilities',
    'Knowledge of logistics industry and market trends',
    'Proficiency in CRM software and MS Office'
  ]
},
{
  id: 15,
  title: 'Fleet Manager',
  company: 'New Ventions India',
  location: 'Noida Sector-10, Uttar Pradesh',
  type: 'Full-time',
  urgent: true,
  salary: '₹20,000 - ₹25,000/month',
  experience: '3-5 years',
  department: 'Operations',
  postedDate: '5 days ago',
  applicants: 28,
  fleetSize: '50+',
  description: 'Looking for an experienced Fleet Manager to optimize fleet operations and maintain operational excellence.',
  overview: 'We are seeking a skilled Fleet Manager to oversee our growing vehicle fleet and optimize operations. This role is crucial for maintaining operational efficiency, cost management, and ensuring high service standards. The position requires strong leadership skills and comprehensive knowledge of fleet management practices.',
  responsibilities: [
    'Fleet Operations: Manage daily fleet operations and vehicle allocation',
    'Maintenance Planning: Develop and implement fleet maintenance schedules',
    'Cost Management: Monitor and optimize fleet-related costs',
    'Performance Analysis: Track and analyze fleet performance metrics',
    'Compliance Management: Ensure adherence to regulatory requirements',
    'Team Leadership: Manage fleet operations team and drivers',
    'Resource Optimization: Maximize fleet utilization and efficiency',
    'Safety Standards: Implement and maintain fleet safety protocols'
  ],
  requirements: [
    'Minimum 3 years experience in fleet management',
    'Strong knowledge of vehicle maintenance and operations',
    'Experience in team leadership and management',
    'Analytical skills for performance monitoring',
    'Knowledge of transportation regulations and compliance',
    'Excellent problem-solving abilities',
    'Proficiency in fleet management software'
  ]
},
{
  id: 16,
  title: 'Accounts Manager',
  company: 'Turanth Logistics',
  location: 'Mulund West, Mumbai, Maharashtra',
  type: 'Full-time',
  urgent: true,
  salary: '₹40,000 - ₹45,000/month',
  experience: '5-8 years',
  department: 'Finance',
  postedDate: '2 days ago',
  applicants: 22,
  fleetSize: '100+',
  description: 'Join a leading logistics company as Accounts Manager to oversee financial operations and drive financial excellence.',
  overview: 'We are seeking an experienced Accounts Manager to lead our financial operations in Mumbai. This senior role involves managing the complete accounting function, financial reporting, and strategic financial planning. The ideal candidate will bring strong leadership skills and expertise in logistics industry accounting practices.',
  responsibilities: [
    'Financial Leadership: Lead and manage the accounting team and operations',
    'Strategic Planning: Participate in financial strategy and budgeting processes',
    'Compliance Management: Ensure adherence to accounting standards and tax regulations',
    'Financial Analysis: Provide detailed financial analysis and insights for decision making',
    'Risk Management: Identify and mitigate financial risks',
    'Process Optimization: Streamline accounting processes and implement best practices',
    'Stakeholder Management: Coordinate with auditors, tax consultants, and banking partners',
    'Team Development: Mentor and develop the accounting team'
  ],
  requirements: [
    'CA/ICWA/MBA Finance with 5-8 years of experience',
    'Strong knowledge of Indian accounting standards and tax laws',
    'Experience in logistics/transportation industry preferred',
    'Excellent analytical and problem-solving skills',
    'Leadership experience in managing accounting teams',
    'Proficiency in accounting software and advanced Excel',
    'Strong communication and presentation abilities'
  ]
},
{
  id: 17,
  title: 'Operations Executive-FTL & PTL',
  company: 'Turanth Logistics',
  location: 'Mulund West, Mumbai, Maharashtra',
  type: 'Full-time',
  urgent: true,
  salary: '₹18,000 - ₹25,000/month',
  experience: '2-4 years',
  department: 'Operations',
  postedDate: '3 days ago',
  applicants: 45,
  fleetSize: '100+',
  description: 'Seeking an Operations Executive to manage Full Truck Load (FTL) and Part Truck Load (PTL) operations.',
  overview: 'We are looking for a dynamic Operations Executive to handle our FTL and PTL operations. This role is crucial for ensuring efficient transportation services, optimizing vehicle utilization, and maintaining high customer satisfaction levels. The position requires excellent coordination skills and deep understanding of logistics operations.',
  responsibilities: [
    'Operations Management: Handle end-to-end FTL and PTL operations',
    'Load Planning: Optimize vehicle loading and route planning',
    'Customer Coordination: Manage client communications and service delivery',
    'Vehicle Tracking: Monitor vehicle movements and ensure timely deliveries',
    'Documentation: Maintain operational records and prepare reports',
    'Team Coordination: Work with drivers, vendors, and support teams',
    'Issue Resolution: Handle operational challenges and escalations',
    'Performance Monitoring: Track and report operational KPIs'
  ],
  requirements: [
    'Minimum 2 years experience in FTL/PTL operations',
    'Strong knowledge of Mumbai and surrounding logistics networks',
    'Excellent coordination and communication skills',
    'Experience in route planning and optimization',
    'Proficiency in logistics management software',
    'Problem-solving and decision-making abilities',
    'Ability to work in shifts when required'
  ]
},
{
  id: 18,
  title: 'Accounts Manager',
  company: 'Swayam Traders',
  location: 'Baddi Bypass, Aurangabad, Maharashtra',
  type: 'Full-time',
  urgent: false,
  salary: '₹20,000/month',
  experience: '3-5 years',
  department: 'Finance',
  postedDate: '1 week ago',
  applicants: 28,
  fleetSize: '50+',
  description: 'Looking for an experienced Accounts Manager to handle financial operations and reporting.',
  overview: 'We require a skilled Accounts Manager to oversee our financial operations in Aurangabad. The role involves managing daily accounting operations, financial reporting, and ensuring compliance with accounting standards. The ideal candidate will have strong accounting knowledge and experience in the logistics sector.',
  responsibilities: [
    'Financial Operations: Manage day-to-day accounting activities',
    'Reporting: Prepare financial statements and management reports',
    'Tax Compliance: Handle GST and other tax-related matters',
    'Banking: Manage banking operations and reconciliations',
    'Vendor Management: Handle vendor payments and relationships',
    'Internal Controls: Implement and maintain financial control systems',
    'Budget Management: Assist in budget preparation and monitoring',
    'Audit Support: Coordinate with internal and external auditors'
  ],
  requirements: [
    'B.Com with 3-5 years of accounting experience',
    'Strong knowledge of accounting principles and tax laws',
    'Experience in logistics industry preferred',
    'Proficiency in accounting software and MS Excel',
    'Good communication and analytical skills',
    'Attention to detail and accuracy',
    'Ability to work independently'
  ]
},
{
  id: 19,
  title: 'Operations Supervisor - Goa',
  company: 'Swayam Traders',
  location: 'Goa',
  type: 'Full-time',
  urgent: true,
  salary: '₹18,000/month',
  experience: '2-4 years',
  department: 'Operations',
  postedDate: '4 days ago',
  applicants: 32,
  fleetSize: '50+',
  description: 'Seeking an Operations Supervisor to manage logistics operations in Goa region.',
  overview: 'We are looking for an experienced Operations Supervisor to manage our logistics operations in Goa. This role involves overseeing daily operations, team management, and ensuring service quality. The ideal candidate will have strong operational knowledge and familiarity with the Goa region.',
  responsibilities: [
    'Operations Management: Supervise daily logistics operations',
    'Team Leadership: Manage and guide operations team',
    'Route Planning: Optimize delivery routes and schedules',
    'Quality Control: Ensure high service quality standards',
    'Client Coordination: Handle client communications and requirements',
    'Performance Monitoring: Track operational metrics and KPIs',
    'Resource Management: Optimize resource utilization',
    'Safety Compliance: Ensure adherence to safety protocols'
  ],
  requirements: [
    'Minimum 2 years experience in logistics operations',
    'Strong knowledge of Goa geography and routes',
    'Team management experience',
    'Excellent communication skills in English and local languages',
    'Problem-solving and decision-making abilities',
    'Computer literacy for documentation',
    'Ability to work in flexible hours'
  ]
},
{
  id: 20,
  title: 'Operations Supervisor - Surat',
  company: 'Swayam Traders',
  location: 'Surat',
  type: 'Full-time',
  urgent: true,
  salary: '₹18,000/month',
  experience: '2-4 years',
  department: 'Operations',
  postedDate: '4 days ago',
  applicants: 35,
  fleetSize: '50+',
  description: 'Looking for an Operations Supervisor to manage logistics operations in Surat region.',
  overview: 'We require a skilled Operations Supervisor to oversee our logistics operations in Surat. The role focuses on managing daily operations, team supervision, and maintaining operational excellence. The ideal candidate will have strong operational experience and knowledge of the Surat market.',
  responsibilities: [
    'Operations Oversight: Manage daily logistics and transportation operations',
    'Team Management: Lead and mentor operations team members',
    'Service Quality: Maintain high standards of service delivery',
    'Client Relations: Handle client requirements and communications',
    'Process Improvement: Identify and implement operational improvements',
    'Documentation: Ensure proper maintenance of operational records',
    'Cost Control: Monitor and optimize operational costs',
    'Compliance: Ensure adherence to company policies and regulations'
  ],
  requirements: [
    'Minimum 2 years experience in logistics operations',
    'Thorough knowledge of Surat and surrounding areas',
    'Leadership and team management skills',
    'Strong communication abilities in English and Gujarati',
    'Experience in handling operational challenges',
    'Basic computer knowledge',
    'Willingness to work in flexible shifts'
  ]
},
];

export const AllJobsModal = ({ isOpen, onClose, onJobSelect }: AllJobsModalProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('All');
  const [viewingJob, setViewingJob] = React.useState<(typeof allJobs)[0] | null>(null);
  const [hoveredJob, setHoveredJob] = React.useState<number | null>(null);

 const departments = [
  'All',
  'Operations',
  'Administration',
  'Human Resources',
  'Finance',
  'Sales',
  'Maintenance'
];

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">All Available Positions</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredJobs.map((job, index) => (
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
                          onClick={() => {
                            onJobSelect(job.title);
                            onClose();
                          }}
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filteredJobs.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No jobs found matching your criteria
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <JobDetailsModal
        isOpen={!!viewingJob}
        onClose={() => setViewingJob(null)}
        job={viewingJob}
        onApply={() => {
          onJobSelect(viewingJob?.title || '');
          setViewingJob(null);
          onClose();
        }}
      />
    </AnimatePresence>
  );
};