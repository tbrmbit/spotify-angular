export interface Album {
  href: string;
  tracks: Item;
  images: Array<any>;
  label: string;
  name: string;
  artists: Array<Artists>;
}

export interface Item {
  href: string;
  items: Array<Track>;
  limit: number;
  next: number;
  offset: number;
  previous: number;
  total: number;
  images: Array<any>;
}

export interface Artists {
  name: string;
  href: string;
  type: string;
}

export interface Track {
  name: string;
  id: string;
  duration_ms: number;
  href: string;
  track_number: number;
  external_urls: {spotify?: ''};
}
