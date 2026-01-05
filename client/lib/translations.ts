export type Language = 'en' | 'km' | 'fr';

export interface Translations {
  // Common
  dashboard: string;
  logout: string;
  settings: string;
  loading: string;
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  create: string;
  search: string;
  back: string;
  home: string;
  profile: string;
  notifications: string;
  language: string;
  theme: string;
  darkMode: string;
  lightMode: string;

  // Navigation
  myClasses: string;
  assignments: string;
  grades: string;
  users: string;
  reports: string;
  announcements: string;
  classes: string;

  // Login
  welcomeBack: string;
  loginAs: string;
  emailAddress: string;
  password: string;
  signIn: string;
  rememberMe: string;
  demoCredentials: string;
  admin: string;
  teacher: string;
  student: string;

  // Landing Page
  moderWayToManage: string;
  education: string;
  lmsDescription: string;
  getStarted: string;
  learnMore: string;
  powerfulFeatures: string;
  roleBasedAccess: string;
  roleBasedAccessDesc: string;
  classManagement: string;
  classManagementDesc: string;
  performanceAnalytics: string;
  performanceAnalyticsDesc: string;
  realTimeUpdates: string;
  realTimeUpdatesDesc: string;
  builtForEveryone: string;
  administrators: string;
  administratorsDesc: string;
  teachers: string;
  teachersDesc: string;
  students: string;
  studentsDesc: string;
  readyToTransform: string;
  readyToTransformDesc: string;
  signInNow: string;

  // Dashboard
  hello: string;
  hereIsOverview: string;
  totalStudents: string;
  totalTeachers: string;
  activeClasses: string;
  enrolledClasses: string;
  pendingAssignments: string;
  overallGPA: string;
  lastMonth: string;
  newThisTerm: string;
  pendingReviews: string;
  basedOnLatestGrades: string;
  noClassesEnrolled: string;
  noClassesAssigned: string;
  requestCreateClass: string;
  noUpcomingAssignments: string;

  // Assignments
  assignmentDetails: string;
  dueDate: string;
  points: string;
  status: string;
  submit: string;
  submitted: string;
  graded: string;
  notSubmitted: string;
  uploadFile: string;
  submissionStatus: string;

  // Grades
  myGrades: string;
  subject: string;
  grade: string;
  date: string;
  averageGrade: string;
  highestGrade: string;
  gradeHistory: string;
  noGrades: string;

  // Teachers
  myClassesList: string;
  createClass: string;
  classCode: string;
  description: string;
  schedule: string;
  room: string;
  instructor: string;
  studentCount: string;

  // Admin
  manageSchool: string;
  schoolOverview: string;
  createNewClass: string;
  manageUsers: string;
  generateReports: string;
  systemSettings: string;
  
  // Class Detail
  classDetails: string;
  classInfo: string;
  classAssignments: string;
  classStudents: string;
  classAnnouncements: string;
  addAssignment: string;
  addAnnouncement: string;
  
  // Settings
  accountSettings: string;
  privacy: string;
  preferences: string;
  changePassword: string;
  twoFactorAuth: string;
  
  // Announcements
  recent: string;
  priority: string;
  high: string;
  medium: string;
  low: string;
  content: string;
  
  // Footer
  allRightsReserved: string;
  craftedWith: string;
}

const english: Translations = {
  // Common
  dashboard: 'Dashboard',
  logout: 'Logout',
  settings: 'Settings',
  loading: 'Loading...',
  save: 'Save',
  cancel: 'Cancel',
  delete: 'Delete',
  edit: 'Edit',
  create: 'Create',
  search: 'Search classes, assignments...',
  back: 'Go Back',
  home: 'Go Home',
  profile: 'Profile',
  notifications: 'Notifications',
  language: 'Language',
  theme: 'Theme',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',

  // Navigation
  myClasses: 'My Classes',
  assignments: 'Assignments',
  grades: 'Grades',
  users: 'Users',
  reports: 'Reports',
  announcements: 'Announcements',
  classes: 'Classes',

  // Login
  welcomeBack: 'Welcome Back',
  loginAs: 'Login as:',
  emailAddress: 'Email Address',
  password: 'Password',
  signIn: 'Sign In',
  rememberMe: 'Remember me',
  demoCredentials: 'Demo Credentials:',
  admin: 'Admin',
  teacher: 'Teacher',
  student: 'Student',

  // Landing Page
  moderWayToManage: 'The Modern Way to Manage',
  education: 'Education',
  lmsDescription: 'LearnX is a modern learning management system designed for schools, teachers, and students. Streamline operations, enhance learning, and succeed together.',
  getStarted: 'Get Started',
  learnMore: 'Learn More',
  powerfulFeatures: 'Powerful Features',
  roleBasedAccess: 'Role-Based Access',
  roleBasedAccessDesc: 'Admin, Teacher, and Student dashboards with tailored features',
  classManagement: 'Class Management',
  classManagementDesc: 'Create, manage, and organize classes with ease',
  performanceAnalytics: 'Performance Analytics',
  performanceAnalyticsDesc: 'Track student progress and class performance metrics',
  realTimeUpdates: 'Real-Time Updates',
  realTimeUpdatesDesc: 'Instant notifications and live class announcements',
  builtForEveryone: 'Built for Everyone',
  administrators: 'Administrators',
  administratorsDesc: 'Manage users, classes, and view school-wide analytics',
  teachers: 'Teachers',
  teachersDesc: 'Create classes, manage assignments, and track student progress',
  students: 'Students',
  studentsDesc: 'Access classes, submit assignments, and monitor grades',
  readyToTransform: 'Ready to Transform Education?',
  readyToTransformDesc: 'Start managing your school more efficiently today',
  signInNow: 'Sign In Now',

  // Dashboard
  hello: 'Hello',
  hereIsOverview: "Here's an overview of your school.",
  totalStudents: 'Total Students',
  totalTeachers: 'Total Teachers',
  activeClasses: 'Active Classes',
  enrolledClasses: 'Classes Enrolled',
  pendingAssignments: 'Pending Assignments',
  overallGPA: 'Overall GPA',
  lastMonth: 'from last month',
  newThisTerm: 'new this term',
  pendingReviews: 'pending reviews',
  basedOnLatestGrades: 'Based on latest grades',
  noClassesEnrolled: 'No classes enrolled yet',
  noClassesAssigned: 'No classes assigned yet',
  requestCreateClass: 'Request to create a class',
  noUpcomingAssignments: 'No upcoming assignments',

  // Assignments
  assignmentDetails: 'Assignment Details',
  dueDate: 'Due Date',
  points: 'Points',
  status: 'Status',
  submit: 'Submit',
  submitted: 'Submitted',
  graded: 'Graded',
  notSubmitted: 'Not Submitted',
  uploadFile: 'Upload File',
  submissionStatus: 'Submission Status',

  // Grades
  myGrades: 'My Grades',
  subject: 'Subject',
  grade: 'Grade',
  date: 'Date',
  averageGrade: 'Average Grade',
  highestGrade: 'Highest Grade',
  gradeHistory: 'Grade History',
  noGrades: 'No grades yet',

  // Teachers
  myClassesList: 'My Classes',
  createClass: 'Create Class',
  classCode: 'Class Code',
  description: 'Description',
  schedule: 'Schedule',
  room: 'Room',
  instructor: 'Instructor',
  studentCount: 'Student Count',

  // Admin
  manageSchool: 'Manage School',
  schoolOverview: "Here's an overview of your school.",
  createNewClass: 'Create New Class',
  manageUsers: 'Manage Users',
  generateReports: 'Generate Reports',
  systemSettings: 'System Settings',
  
  // Class Detail
  classDetails: 'Class Details',
  classInfo: 'Class Info',
  classAssignments: 'Assignments',
  classStudents: 'Students',
  classAnnouncements: 'Announcements',
  addAssignment: 'Add Assignment',
  addAnnouncement: 'Add Announcement',
  
  // Settings
  accountSettings: 'Account Settings',
  privacy: 'Privacy',
  preferences: 'Preferences',
  changePassword: 'Change Password',
  twoFactorAuth: 'Two-Factor Authentication',
  
  // Announcements
  recent: 'Recent',
  priority: 'Priority',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  content: 'Content',
  
  // Footer
  allRightsReserved: 'All rights reserved',
  craftedWith: 'Crafted with care for education',
};

const khmer: Translations = {
  // Common
  dashboard: 'ផ្ទាំងគ្រប់គ្រង',
  logout: 'ចាកចេញ',
  settings: 'ការកំណត់',
  loading: 'កំពុងផ្ទុក...',
  save: 'រក្សាទុក',
  cancel: 'បោះបង់',
  delete: 'លុប',
  edit: 'កែប្រែ',
  create: 'បង្កើត',
  search: 'ស្វាងរក ថ្នាក់រៀន ភារកិច្ច...',
  back: 'ត្រឡប់ក្រោយ',
  home: 'ទៃខាងលើ',
  profile: 'ប្រវត្តិរូប',
  notifications: 'ការជូនដំណឹង',
  language: 'ភាសា',
  theme: 'ស្ទីល',
  darkMode: 'របៀបងងឹត',
  lightMode: 'របៀបលឺក',

  // Navigation
  myClasses: 'ថ្នាក់ឯងឯង',
  assignments: 'ភារកិច្ច',
  grades: 'ពិន្ទុ',
  users: 'អ្នកប្រើប្រាស់',
  reports: 'របាយការណ៍',
  announcements: 'ប្រកាសផ្សាយ',
  classes: 'ថ្នាក់រៀន',

  // Login
  welcomeBack: 'ស្វាគមន៍ត្រលប់មកវិញ',
  loginAs: 'ចូលក្នុងប្រព័ន្ធថា:',
  emailAddress: 'អាសយដ្ឋានអ៊ីមែល',
  password: 'ពាក្យសម្ងាត់',
  signIn: 'ចូលប្រព័ន្ធ',
  rememberMe: 'ចងចាំខ្ញុំ',
  demoCredentials: 'ឯកសារបង្ហាញ:',
  admin: 'អ្នកគ្រប់គ្រង',
  teacher: 'គ្រូបង្រៀន',
  student: 'សិស្ស',

  // Landing Page
  moderWayToManage: 'វិធីសាស្រ្តទំនើបក្នុងការគ្រប់គ្រង',
  education: 'ការអប់រំ',
  lmsDescription: 'LearnX គឺជាប្រព័ន្ធគ្រប់គ្រងការរៀនសូត្របង្គប់ក្នុងសម័យទំនើប ដែលរចនាឡើងសម្រាប់សាលា គ្រូបង្រៀន និងសិស្ស។',
  getStarted: 'ចាប់ផ្តើម',
  learnMore: 'ស្វាងយល់ព័ត៌មានលម្អិត',
  powerfulFeatures: 'លក្ខណៈពិសេសដ៏មានអានុភាព',
  roleBasedAccess: 'ការទទួលបានលទ្ធផលតាមតួនាទី',
  roleBasedAccessDesc: 'ផ្ទាំងគ្រប់គ្រងនៃអ្នកគ្រប់គ្រង គ្រូបង្រៀន និងសិស្ស ដែលមានលក្ខណៈពិសេសផ្សេងគ្នា',
  classManagement: 'ការគ្រប់គ្រងថ្នាក់រៀន',
  classManagementDesc: 'បង្កើត គ្រប់គ្រង និងរៀបចំថ្នាក់រៀនយ៉ាងងាយស្រួល',
  performanceAnalytics: 'ការវិភាគលទ្ធផល',
  performanceAnalyticsDesc: 'ឈានដល់ផ្នែកដាច់ឆាប់រហ័សនៃលទ្ធផលរៀនសូត្រ',
  realTimeUpdates: 'ការធ្វើបច្ចុប្បន្នភាពជាលក្ខណៈពិតលក្ខណៈ',
  realTimeUpdatesDesc: 'ការជូនដំណឹងរហ័ស និងប្រកាសផ្សាយថ្នាក់រៀនលើសកម្មភាព',
  builtForEveryone: 'សាងសង់សម្រាប់មនុស្សគ្រប់គ្នា',
  administrators: 'អ្នកគ្រប់គ្រង',
  administratorsDesc: 'គ្រប់គ្រងអ្នកប្រើប្រាស់ ថ្នាក់រៀន និងមើលបង្ហាញក្នុងមាត្របាប់បង្ហាញលក្ខណៈ',
  teachers: 'គ្រូបង្រៀន',
  teachersDesc: 'បង្កើត គ្រប់គ្រងភារកិច្ច និងដាច់ឆាប់ឡើងវិញលទ្ធផលសិស្ស',
  students: 'សិស្ស',
  studentsDesc: 'ទទួលបានលទ្ធភាពថ្នាក់រៀន ដាក់ស្នើលិខិតឧត្តមកថា និងផ្ទៀងផ្ទាត់ពិន្ទុ',
  readyToTransform: 'ត្រៀមខ្លួនដើម្បីធ្វើឱ្យសកម្មភាពលើការអប់រំ?',
  readyToTransformDesc: 'ចាប់ផ្តើមគ្រប់គ្រងសាលារបស់អ្នកដោយមានប្រសិទ្ធភាពបន្ថែមទៀត',
  signInNow: 'ចូលប្រព័ន្ធឥឡូវនេះ',

  // Dashboard
  hello: 'សួស្តី',
  hereIsOverview: 'នេះគឺជាទិដ្ឋភាពទូលំទូលាយនៃសាលារបស់អ្នក។',
  totalStudents: 'សិស្សសរុប',
  totalTeachers: 'គ្រូបង្រៀនសរុប',
  activeClasses: 'ថ្នាក់រៀនសកម្ម',
  enrolledClasses: 'ថ្នាក់រៀនដែលចុះឈ្មោះ',
  pendingAssignments: 'ភារកិច្ចដែលរង់ចាំ',
  overallGPA: 'GPA សរុប',
  lastMonth: 'ពីខែមុន',
  newThisTerm: 'ថ្មីក្នុងលេខកំណត់ថ្ងៃនេះ',
  pendingReviews: 'ការសម្រេចតម្រូវដែលរង់ចាំ',
  basedOnLatestGrades: 'ផ្អែកលើពិន្ទុចុងក្រោយបំផុត',
  noClassesEnrolled: 'មិនមានថ្នាក់រៀនដែលចុះឈ្មោះនៅឡើយ',
  noClassesAssigned: 'មិនមានថ្នាក់រៀនដែលបានផ្តល់ឱ្យនៅឡើយ',
  requestCreateClass: 'សូមស្នើសុំបង្កើតថ្នាក់រៀន',
  noUpcomingAssignments: 'មិនមានភារកិច្ចដែលកំពុងមក',

  // Assignments
  assignmentDetails: 'លម្អិតភារកិច្ច',
  dueDate: 'កាលកំណត់ដែលឈប់',
  points: 'ដង',
  status: 'ស្ថានភាព',
  submit: 'ដាក់ស្នើ',
  submitted: 'ដាក់ស្នើរួចហើយ',
  graded: 'ដែលបានចាត់ថ្នាក់',
  notSubmitted: 'មិនបានដាក់ស្នើ',
  uploadFile: 'ផ្ទុកឯកសារ',
  submissionStatus: 'ស្ថានភាពដាក់ស្នើ',

  // Grades
  myGrades: 'ពិន្ទុរបស់ខ្ញុំ',
  subject: 'វិષយ',
  grade: 'ពិន្ទុ',
  date: 'ថ្ងៃ',
  averageGrade: 'ពិន្ទុមធ្យម',

  // Teachers
  myClassesList: 'ថ្នាក់ឯងឯង',
  createClass: 'បង្កើតថ្នាក់រៀន',
  classCode: 'លេខលេខរៀង',
  description: 'ការពិពណ៌នា',
  schedule: 'កាលវិភាគ',
  room: 'បន្ទប់',
  instructor: 'គ្រូបង្រៀន',
  studentCount: 'ចំនួនសិស្ស',

  // Admin
  manageSchool: 'គ្រប់គ្រងសាលា',
  schoolOverview: 'នេះគឺជាទិដ្ឋភាពទូលំទូលាយនៃសាលារបស់អ្នក។',
  createNewClass: 'បង្កើតថ្នាក់រៀនថ្មី',
  manageUsers: 'គ្រប់គ្រងអ្នកប្រើប្រាស់',
  generateReports: 'បង្កើតរបាយការណ៍',
  systemSettings: 'ការកំណត់ប្រព័ន្ធ',

  // Class Detail
  classDetails: 'លម្អិតថ្នាក់រៀន',
  classInfo: 'ព័ត៌មានថ្នាក់រៀន',
  classAssignments: 'ភារកិច្ច',
  classStudents: 'សិស្ស',
  classAnnouncements: 'ប្រកាសផ្សាយ',
  addAssignment: 'បន្ថែមភារកិច្ច',
  addAnnouncement: 'បន្ថែមប្រកាស',

  // Settings
  accountSettings: 'ការកំណត់គណនេយ្យ',
  privacy: 'ភាពឯកជន',
  preferences: 'ចំណូលចិត្ត',
  changePassword: 'ផ្លាស់ប្តូរលេខសម្ងាត់',
  twoFactorAuth: 'ផ្ទៀងផ្ទាត់ពីរកត្តា',

  // Announcements
  recent: 'ថ្មីក្រោយ',
  priority: 'អগ្រាధិការ',
  high: 'ខ្ពស់',
  medium: 'មធ្យម',
  low: 'ទាប',
  content: 'ខ្លឹមសារ',

  // Footer
  allRightsReserved: 'សិទ្ធិគ្មានដែនកំណត់',
  craftedWith: 'ផលិតដោយមនសិការលម្អិតចំពោះការអប់រំ',
  highestGrade: "",
  gradeHistory: "",
  noGrades: ""
};

const french: Translations = {
  // Common
  dashboard: 'Tableau de bord',
  logout: 'Se déconnecter',
  settings: 'Paramètres',
  loading: 'Chargement...',
  save: 'Enregistrer',
  cancel: 'Annuler',
  delete: 'Supprimer',
  edit: 'Modifier',
  create: 'Créer',
  search: 'Rechercher des classes, des devoirs...',
  back: 'Retour',
  home: 'Accueil',
  profile: 'Profil',
  notifications: 'Notifications',
  language: 'Langue',
  theme: 'Thème',
  darkMode: 'Mode sombre',
  lightMode: 'Mode clair',

  // Navigation
  myClasses: 'Mes classes',
  assignments: 'Devoirs',
  grades: 'Notes',
  users: 'Utilisateurs',
  reports: 'Rapports',
  announcements: 'Annonces',
  classes: 'Classes',

  // Login
  welcomeBack: 'Bienvenue',
  loginAs: 'Connectez-vous en tant que:',
  emailAddress: 'Adresse e-mail',
  password: 'Mot de passe',
  signIn: 'Se connecter',
  rememberMe: 'Se souvenir de moi',
  demoCredentials: 'Identifiants de démonstration:',
  admin: 'Administrateur',
  teacher: 'Enseignant',
  student: 'Étudiant',

  // Landing Page
  moderWayToManage: 'Le moyen moderne de gérer',
  education: 'L\'éducation',
  lmsDescription: 'LearnX est un système de gestion d\'apprentissage moderne conçu pour les écoles, les enseignants et les étudiants.',
  getStarted: 'Commencer',
  learnMore: 'En savoir plus',
  powerfulFeatures: 'Fonctionnalités puissantes',
  roleBasedAccess: 'Accès basé sur les rôles',
  roleBasedAccessDesc: 'Tableaux de bord d\'administrateur, d\'enseignant et d\'étudiant avec des fonctionnalités adaptées',
  classManagement: 'Gestion des classes',
  classManagementDesc: 'Créer, gérer et organiser les classes facilement',
  performanceAnalytics: 'Analyse des performances',
  performanceAnalyticsDesc: 'Suivre les progrès des étudiants et les mesures de rendement des classes',
  realTimeUpdates: 'Mises à jour en temps réel',
  realTimeUpdatesDesc: 'Notifications instantanées et annonces de classe en direct',
  builtForEveryone: 'Construit pour tout le monde',
  administrators: 'Administrateurs',
  administratorsDesc: 'Gérer les utilisateurs, les classes et voir les analyses à l\'échelle de l\'école',
  teachers: 'Enseignants',
  teachersDesc: 'Créer des classes, gérer les devoirs et suivre les progrès des étudiants',
  students: 'Étudiants',
  studentsDesc: 'Accéder aux classes, soumettre des devoirs et surveiller les notes',
  readyToTransform: 'Prêt à transformer l\'éducation?',
  readyToTransformDesc: 'Commencez à gérer votre école plus efficacement dès aujourd\'hui',
  signInNow: 'Se connecter maintenant',

  // Dashboard
  hello: 'Bonjour',
  hereIsOverview: 'Voici un aperçu de votre école.',
  totalStudents: 'Nombre total d\'étudiants',
  totalTeachers: 'Nombre total d\'enseignants',
  activeClasses: 'Classes actives',
  enrolledClasses: 'Classes inscrites',
  pendingAssignments: 'Devoirs en attente',
  overallGPA: 'GPA global',
  lastMonth: 'du mois dernier',
  newThisTerm: 'nouveau ce trimestre',
  pendingReviews: 'examens en attente',
  basedOnLatestGrades: 'Sur la base des notes les plus récentes',
  noClassesEnrolled: 'Aucune classe inscrite pour l\'instant',
  noClassesAssigned: 'Aucune classe attribuée pour l\'instant',
  requestCreateClass: 'Demander de créer une classe',
  noUpcomingAssignments: 'Pas de devoirs à venir',

  // Assignments
  assignmentDetails: 'Détails des devoirs',
  dueDate: 'Date d\'échéance',
  points: 'Points',
  status: 'Statut',
  submit: 'Soumettre',
  submitted: 'Soumis',
  graded: 'Noté',
  notSubmitted: 'Non soumis',
  uploadFile: 'Télécharger un fichier',
  submissionStatus: 'Statut de soumission',

  // Grades
  myGrades: 'Mes notes',
  subject: 'Sujet',
  grade: 'Note',
  date: 'Date',
  averageGrade: 'Note moyenne',
  highestGrade: 'Note la plus élevée',
  gradeHistory: 'Historique des notes',
  noGrades: 'Pas encore de notes',

  // Teachers
  myClassesList: 'Mes classes',
  createClass: 'Créer une classe',
  classCode: 'Code de classe',
  description: 'Description',
  schedule: 'Calendrier',
  room: 'Salle',
  instructor: 'Instructeur',
  studentCount: 'Nombre d\'étudiants',

  // Admin
  manageSchool: 'Gérer l\'école',
  schoolOverview: 'Voici un aperçu de votre école.',
  createNewClass: 'Créer une nouvelle classe',
  manageUsers: 'Gérer les utilisateurs',
  generateReports: 'Générer des rapports',
  systemSettings: 'Paramètres système',
  
  // Class Detail
  classDetails: 'Détails de la classe',
  classInfo: 'Informations de classe',
  classAssignments: 'Devoirs',
  classStudents: 'Étudiants',
  classAnnouncements: 'Annonces',
  addAssignment: 'Ajouter un devoir',
  addAnnouncement: 'Ajouter une annonce',
  
  // Settings
  accountSettings: 'Paramètres du compte',
  privacy: 'Intimité',
  preferences: 'Préférences',
  changePassword: 'Changer le mot de passe',
  twoFactorAuth: 'Authentification à deux facteurs',
  
  // Announcements
  recent: 'Récent',
  priority: 'Priorité',
  high: 'Élevée',
  medium: 'Moyen',
  low: 'Faible',
  content: 'Contenu',
  
  // Footer
  allRightsReserved: 'Tous droits réservés',
  craftedWith: 'Créé avec soin pour l\'éducation',
};

export const translations: Record<Language, Translations> = {
  en: english,
  km: khmer,
  fr: french,
};

export function getTranslations(language: Language): Translations {
  return translations[language] || english;
}
