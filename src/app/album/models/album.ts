export interface Album {
  href: string;
  items: Array<Track>;
  limit: number;
  next: number;
  offset: number;
  previous: number;
  total: number;
}

export interface Track {
  name: string;
  id: string;
  duration_ms: number;
  href: string;
  track_number: number;
}
