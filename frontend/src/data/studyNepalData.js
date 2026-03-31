export const studyNepalUniversities = [
  {
    id: 'tu',
    name: 'Tribhuvan University (TU)',
    icon: '🏛️',
    type: 'Public',
    location: 'Kirtipur, Kathmandu (and affiliated campuses nationwide)',
    faculties: 'Engineering, Medicine, Management, Humanities, Science, Education',
    url: 'https://tribhuvan-university.edu.np',
    featured: true,
    summary:
      "Nepal's largest university with programs across every major field and a huge affiliated-campus network.",
    admission: [
      'Admission depends on the faculty/college (central departments + affiliated colleges).',
      'Engineering (IOE), Medicine (MECEE-BL), Management (CMAT/college tests) are common entry routes.',
      'Always confirm notices on the official portal of the institute/campus you apply to.',
    ],
    documents: [
      'Nepali citizenship (or legal ID) + passport-size photos',
      'SEE/+2 transcripts, migration/character certificates (as required)',
      'Bachelor transcripts (for Masters) + equivalence if applicable',
      'Entrance admit card/scorecard (where required)',
    ],
    entrancePortals: [
      { name: 'IOE Entrance', url: 'https://ioepc.edu.np' },
      { name: 'MECEE-BL', url: 'https://mecee.edu.np' },
    ],
  },
  {
    id: 'ku',
    name: 'Kathmandu University (KU)',
    icon: '🎓',
    type: 'Public (community-oriented)',
    location: 'Dhulikhel, Kavre',
    faculties: 'Engineering, Management, Science, Arts, Medical Sciences',
    url: 'https://ku.edu.np',
    featured: false,
    summary:
      'Known for strong academic calendar discipline and competitive admissions in engineering and management.',
    admission: [
      'Admissions are program-based; check each school’s notice and eligibility.',
      'Entrance tests/interviews are common depending on the program.',
      'Apply early for popular intakes and scholarship consideration.',
    ],
    documents: [
      'Nepali citizenship + passport-size photos',
      'SEE/+2 transcripts + certificates',
      'Program-specific forms + entrance documents',
    ],
    entrancePortals: [{ name: 'KU Official', url: 'https://ku.edu.np' }],
  },
  {
    id: 'pu',
    name: 'Pokhara University (PU)',
    icon: '🏫',
    type: 'Public',
    location: 'Lekhnath, Pokhara',
    faculties: 'Engineering, Health Science, Management, Humanities',
    url: 'https://pu.edu.np',
    featured: false,
    summary:
      'A major public university with many affiliated colleges and strong demand in management and health programs.',
    admission: [
      'Admissions vary by program and affiliated institution.',
      'Entrance/college tests may apply depending on faculty.',
      'Verify notices and deadlines directly from PU and your chosen college.',
    ],
    documents: [
      'Citizenship + academic documents (SEE/+2 or Bachelor depending on level)',
      'Migration/character certificates (as required)',
      'Entrance scorecard (if required)',
    ],
    entrancePortals: [{ name: 'PU Official', url: 'https://pu.edu.np' }],
  },
  {
    id: 'purbanchal',
    name: 'Purbanchal University',
    icon: '🧭',
    type: 'Public',
    location: 'Biratnagar, Morang',
    faculties: 'Engineering, Medicine, Management, Education, Science',
    url: 'https://pu.edu.np',
    featured: false,
    summary:
      'A key university in eastern Nepal with programs across health, engineering, and management via constituent/affiliated colleges.',
    admission: [
      'Admissions depend on program and the constituent/affiliated campus.',
      'Check official notices for entrance requirements and seat quotas.',
    ],
    documents: [
      'Citizenship + academic documents + photos',
      'Program-specific certificates and entrance requirements',
    ],
    entrancePortals: [{ name: 'University website', url: 'https://pu.edu.np' }],
  },
  {
    id: 'nou',
    name: 'Nepal Open University',
    icon: '💻',
    type: 'Distance/Online',
    location: 'Nepal (online + study centers)',
    faculties: 'Digital learning programs (varies by school)',
    url: 'https://nou.edu.np',
    featured: false,
    summary:
      'Designed for flexible learning—useful if you are working, abroad, or need distance-friendly study options.',
    admission: [
      'Admissions are intake-based; confirm eligibility per program.',
      'Online application + document verification is common.',
    ],
    documents: ['Citizenship + academic documents + photos', 'Program-specific forms'],
    entrancePortals: [{ name: 'NOU Official', url: 'https://nou.edu.np' }],
  },
];

export const entrancePortals = [
  {
    id: 'ioe',
    name: 'IOE Entrance',
    icon: '⚙️',
    desc: 'TU Institute of Engineering',
    date: 'April–May (varies by notice)',
    url: 'https://ioepc.edu.np',
  },
  {
    id: 'mecee',
    name: 'MECEE-BL',
    icon: '⚕️',
    desc: 'Medical & Dental (MBBS/BDS)',
    date: 'June–July (varies by notice)',
    url: 'https://mecee.edu.np',
  },
];

export const getStudyNepalUniversityById = (id) =>
  studyNepalUniversities.find((u) => u.id === id) || null;

