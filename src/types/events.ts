export type Event = {
  id: string;
  name: string;
  location: Location;
  date: string;
  time: string;
  coverSrc: string;
}

export type Location = {
  placement: string;
  city: string;
}
