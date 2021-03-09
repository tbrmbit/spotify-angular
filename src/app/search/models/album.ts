export interface Albums {
  albums: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: null,
    total: number,
    items: Array<AlbumItem>
  };
}

export interface AlbumItem {
  artists: Array<AlbumArtist>;
  images: Array<AlbumImage>;
  external_urls: { spotify: string };
  name: string;
  id: string;
}

export interface AlbumArtist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface AlbumImage {
  height: number;
  url: string;
  width: number;
}
