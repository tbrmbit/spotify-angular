export interface Albums {
  albums: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: null,
    total: number,
    items: Array<AlbumItems>
  };
}

export interface AlbumItems {
  items: Array<AlbumItem>;
}

export interface AlbumItem {
  artists: Array<object>;
  images: Array<AlbumImage>;
  external_urls: { spotify: string };
  name: string;
}

export interface AlbumImage {
  height: number;
  url: string;
  width: number;
}
