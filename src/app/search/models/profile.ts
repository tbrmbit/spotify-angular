export interface Profile {
  display_name: string;
  external_urls: { spotify: string };
  followers: { href: null, total: number };
  href: string;
  id: string;
  images: [{
    height: null
    url: string
    width: null
  }];
  type: string;
  uri: string;
}
