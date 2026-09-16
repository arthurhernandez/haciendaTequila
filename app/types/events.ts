export interface Event {
  id: string;
  title: string;
  subheading: string;
  date: string; // ISO format YYYY-MM-DD
  image: string;
  category?: string;
  description?: string;
}
