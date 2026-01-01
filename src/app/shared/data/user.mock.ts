import { User } from '@/shared/models/user';

export const USERS_MOCK: User[] = [
  {
    id: '1',
    name: 'Muichiro Tokito',
    image: 'cropped-2560-1440-13170191.png',
    tasks: [
      {
        id: '1-1',
        title: 'Complete Mist Breathing Training',
        summary: 'Practice advanced mist breathing techniques',
        dueDate: '2024-05-15',
      },
      {
        id: '1-2',
        title: 'Patrol Upper District',
        summary: 'Check for demon activity in the northern region',
        dueDate: '2024-05-18',
      },
      {
        id: '1-3',
        title: 'Sword Maintenance',
        summary: 'Sharpen and clean Nichirin blade',
        dueDate: '2024-05-20',
      },
      {
        id: '1-4',
        title: 'Train New Recruits',
        summary: 'Teach basic sword techniques to trainees',
        dueDate: '2024-05-22',
      },
      {
        id: '1-5',
        title: 'Monthly Report',
        summary: 'Submit mission report to headquarters',
        dueDate: '2024-05-25',
      },
    ],
  },
  {
    id: '2',
    name: 'Chihiro Ogino',
    image: 'cropped-2560-1440-968167.png',
    tasks: [
      {
        id: '2-1',
        title: 'Clean the Bathhouse',
        summary: 'Deep clean all floors and bathing areas',
        dueDate: '2024-05-16',
      },
      {
        id: '2-2',
        title: 'Serve the Guests',
        summary: 'Attend to the needs of spirit guests',
        dueDate: '2024-05-17',
      },
      {
        id: '2-3',
        title: 'Learn Name Magic',
        summary: 'Practice remembering true names',
        dueDate: '2024-05-19',
      },
      {
        id: '2-4',
        title: 'Help Haku',
        summary: 'Assist with special tasks around the bathhouse',
        dueDate: '2024-05-21',
      },
      {
        id: '2-5',
        title: 'Find Parents',
        summary: 'Continue search for transformed parents',
        dueDate: '2024-05-24',
      },
    ],
  },
  {
    id: '3',
    name: 'Torii Gate',
    image: 'wallpaperflare.jpg',
    tasks: [
      {
        id: '3-1',
        title: 'Morning Blessing',
        summary: 'Perform sunrise purification ritual',
        dueDate: '2024-05-15',
      },
      {
        id: '3-2',
        title: 'Repair Structure',
        summary: 'Fix weathered sections of the gate',
        dueDate: '2024-05-18',
      },
      {
        id: '3-3',
        title: 'Welcome Visitors',
        summary: 'Greet and guide shrine visitors',
        dueDate: '2024-05-20',
      },
      {
        id: '3-4',
        title: 'Festival Preparation',
        summary: 'Decorate for upcoming shrine festival',
        dueDate: '2024-05-23',
      },
      {
        id: '3-5',
        title: 'Evening Prayer',
        summary: 'Conduct sunset meditation ceremony',
        dueDate: '2024-05-26',
      },
    ],
  },
];
