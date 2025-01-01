import event2 from '@/assets/img/backgrounds/event2.png?url';
import event3 from '@/assets/img/backgrounds/event3.png?url';
import { Event } from '@/types/events.ts';

export const events: Event[] = [
  {
    id: '1',
    name: 'Lil uzi vert\'s concert',
    location: {
      city: 'Lisbon',
      placement: 'Rolling Loud',
    },
    date: '2025-02-15',
    time: '21:00',
    coverSrc: event2,
  },
  {
    id: '2',
    name: 'Lana Del Rey\'s concert',
    location: {
      city: 'Leeds',
      placement: 'Leeds Festival',
    },
    date: '2025-03-20',
    time: '19:00',
    coverSrc: event3,
  },
];
