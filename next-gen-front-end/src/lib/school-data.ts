// Local storage-based school data management
// Each school has completely isolated data in localStorage

export interface SchoolData {
  // Basic school info
  id: string;
  subdomain: string;
  name: string;
  tagline?: string;
  logo?: string;
  description: string;

  // Branding
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
  };

  // Website content
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    ctaText?: string;
    ctaLink?: string;
  };

  about: {
    title: string;
    content: string;
    image?: string;
  };

  academics: {
    title: string;
    content: string;
    programs: Array<{
      name: string;
      description: string;
      duration?: string;
    }>;
  };

  admissions: {
    title: string;
    content: string;
    requirements?: string[];
    process?: string;
  };

  contact: {
    address: string;
    phone: string;
    email: string;
    hours?: string;
  };

  // School data
  teachers: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    phone?: string;
  }>;

  students: Array<{
    id: string;
    rollNumber: string;
    name: string;
    email: string;
    class: string;
    status: 'Active' | 'Inactive';
  }>;

  classes: Array<{
    id: string;
    name: string;
    teacher: string;
    students: number;
    subjects: string[];
  }>;

  // Stats (calculated from data)
  stats: {
    students: number;
    teachers: number;
    classes: number;
  };
}

// Default school template
const DEFAULT_SCHOOL_DATA: Omit<SchoolData, 'id' | 'subdomain' | 'name'> = {
  tagline: 'Excellence in Education',
  logo: '/logos/default-school.png',
  description: 'A premier educational institution committed to academic excellence.',

  colors: {
    primary: '#E50914',
    secondary: '#0A0A0A',
    accent: '#E50914',
  },

  hero: {
    title: 'Welcome to Our School',
    subtitle: 'Where excellence meets opportunity',
    backgroundImage: '/images/default-hero.jpg',
    ctaText: 'Learn More',
    ctaLink: '/about',
  },

  about: {
    title: 'About Our School',
    content: 'We are committed to providing quality education that prepares students for success in life. Our dedicated faculty and modern facilities create an environment conducive to learning and growth.',
    image: '/images/default-about.jpg',
  },

  academics: {
    title: 'Academic Programs',
    content: 'Our comprehensive curriculum covers all essential subjects with a focus on both academic excellence and character development.',
    programs: [
      {
        name: 'Science Program',
        description: 'Comprehensive science education with laboratory facilities',
        duration: '3 years',
      },
      {
        name: 'Arts Program',
        description: 'Creative arts and humanities education',
        duration: '3 years',
      },
      {
        name: 'Commercial Program',
        description: 'Business and commercial studies',
        duration: '3 years',
      },
    ],
  },

  admissions: {
    title: 'Join Our Community',
    content: 'We welcome applications from motivated students ready to embark on a journey of academic excellence.',
    requirements: [
      'Completed application form',
      'Academic transcripts',
      'Birth certificate',
      'Medical certificate',
      'Passport photographs',
    ],
    process: 'Submit your application online or in person. Selected candidates will be invited for entrance examination and interview.',
  },

  contact: {
    address: 'School Address, City, Country',
    phone: '+234 123 456 7890',
    email: 'info@school.edu',
    hours: 'Monday - Friday: 8:00 AM - 4:00 PM',
  },

  teachers: [],
  students: [],
  classes: [],

  stats: {
    students: 0,
    teachers: 0,
    classes: 0,
  },
};

// Local storage utilities
const getStorageKey = (subdomain: string) => `school_${subdomain}`;

const getSchoolFromStorage = (subdomain: string): SchoolData | null => {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(getStorageKey(subdomain));
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const saveSchoolToStorage = (school: SchoolData): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(getStorageKey(school.subdomain), JSON.stringify(school));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Public API functions
export async function getSchoolBySubdomain(subdomain: string): Promise<SchoolData | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return getSchoolFromStorage(subdomain);
}

export async function createSchool(schoolData: {
  subdomain: string;
  name: string;
  tagline?: string;
  description?: string;
  contact?: Partial<SchoolData['contact']>;
  colors?: Partial<SchoolData['colors']>;
}): Promise<SchoolData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Check if school already exists
  const existing = getSchoolFromStorage(schoolData.subdomain);
  if (existing) {
    throw new Error('School with this subdomain already exists');
  }

  const school: SchoolData = {
    ...DEFAULT_SCHOOL_DATA,
    id: Date.now().toString(),
    subdomain: schoolData.subdomain,
    name: schoolData.name,
    tagline: schoolData.tagline || DEFAULT_SCHOOL_DATA.tagline,
    description: schoolData.description || DEFAULT_SCHOOL_DATA.description,
    contact: {
      ...DEFAULT_SCHOOL_DATA.contact,
      ...schoolData.contact,
    },
    colors: {
      ...DEFAULT_SCHOOL_DATA.colors,
      ...schoolData.colors,
    },
  };

  saveSchoolToStorage(school);
  return school;
}

export async function updateSchool(subdomain: string, updates: Partial<SchoolData>): Promise<SchoolData | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const school = getSchoolFromStorage(subdomain);
  if (!school) return null;

  const updatedSchool = { ...school, ...updates };
  saveSchoolToStorage(updatedSchool);

  return updatedSchool;
}

export async function deleteSchool(subdomain: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  try {
    localStorage.removeItem(getStorageKey(subdomain));
    return true;
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
    return false;
  }
}

// CRUD operations for school content
export async function updateSchoolContent(
  subdomain: string,
  section: keyof Pick<SchoolData, 'hero' | 'about' | 'academics' | 'admissions'>,
  content: any
): Promise<SchoolData | null> {
  const school = getSchoolFromStorage(subdomain);
  if (!school) return null;

  const updatedSchool = {
    ...school,
    [section]: { ...school[section], ...content }
  };

  saveSchoolToStorage(updatedSchool);
  return updatedSchool;
}

export async function addTeacher(subdomain: string, teacher: Omit<SchoolData['teachers'][0], 'id'>): Promise<SchoolData | null> {
  const school = getSchoolFromStorage(subdomain);
  if (!school) return null;

  const newTeacher = { ...teacher, id: Date.now().toString() };
  const updatedSchool = {
    ...school,
    teachers: [...school.teachers, newTeacher],
    stats: { ...school.stats, teachers: school.stats.teachers + 1 }
  };

  saveSchoolToStorage(updatedSchool);
  return updatedSchool;
}

export async function addStudent(subdomain: string, student: Omit<SchoolData['students'][0], 'id'>): Promise<SchoolData | null> {
  const school = getSchoolFromStorage(subdomain);
  if (!school) return null;

  const newStudent = { ...student, id: Date.now().toString() };
  const updatedSchool = {
    ...school,
    students: [...school.students, newStudent],
    stats: { ...school.stats, students: school.stats.students + 1 }
  };

  saveSchoolToStorage(updatedSchool);
  return updatedSchool;
}

export async function addClass(subdomain: string, classData: Omit<SchoolData['classes'][0], 'id'>): Promise<SchoolData | null> {
  const school = getSchoolFromStorage(subdomain);
  if (!school) return null;

  const newClass = { ...classData, id: Date.now().toString() };
  const updatedSchool = {
    ...school,
    classes: [...school.classes, newClass],
    stats: { ...school.stats, classes: school.stats.classes + 1 }
  };

  saveSchoolToStorage(updatedSchool);
  return updatedSchool;
}

// Check if subdomain is available
export async function isSubdomainAvailable(subdomain: string): Promise<boolean> {
  if (typeof window === 'undefined') return true;

  try {
    const existingSchool = localStorage.getItem(getStorageKey(subdomain));
    return existingSchool === null;
  } catch (error) {
    console.error('Error checking subdomain availability:', error);
    return true; // Assume available if error
  }
}

// Get all school subdomains (for validation purposes)
export async function getAllSchoolSubdomains(): Promise<string[]> {
  if (typeof window === 'undefined') return [];

  try {
    const keys = Object.keys(localStorage);
    return keys
      .filter(key => key.startsWith('school_'))
      .map(key => key.replace('school_', ''));
  } catch (error) {
    console.error('Error getting school subdomains:', error);
    return [];
  }
}