import axios from 'axios';

// Use NEXT_PUBLIC_API_BASE (set on Render or other hosts) if present.
// If not set, fallback to relative `/api` paths so local or hardcoded data can be used.
const apiOrigin = (process.env.NEXT_PUBLIC_API_BASE || '').replace(/\/$/, '');
const getUrl = (path: string) => {
  // path should start with a leading slash, e.g. '/testimonials'
  if (apiOrigin) return `${apiOrigin}/api${path}`;
  return `/api${path}`;
};

export const fetchTestimonials = async () => {
  const res = await axios.get(getUrl('/testimonials'));
  return res.data;
};

export const addTestimonial = async (data: any) => {
  const res = await axios.post(getUrl('/testimonials'), data);
  return res.data;
};

export const fetchEvents = async () => {
  const res = await axios.get(getUrl('/events'));
  return res.data;
};

export const addEvent = async (data: any) => {
  const res = await axios.post(getUrl('/events'), data);
  return res.data;
};

export const fetchGuilds = async () => {
  const res = await axios.get(getUrl('/guilds'));
  return res.data;
};

export const addGuild = async (data: any) => {
  const res = await axios.post(getUrl('/guilds'), data);
  return res.data;
};

export const fetchProjects = async () => {
  const res = await axios.get(getUrl('/projects'));
  return res.data;
};

export const addProject = async (data: any) => {
  const res = await axios.post(getUrl('/projects'), data);
  return res.data;
};

export const fetchSponsors = async () => {
  const res = await axios.get(getUrl('/sponsors'));
  return res.data;
};

export const addSponsor = async (data: any) => {
  const res = await axios.post(getUrl('/sponsors'), data);
  return res.data;
};

export const fetchCoreMembers = async () => {
  const res = await axios.get(getUrl('/coremembers'));
  return res.data;
};

export const addCoreMember = async (data: any) => {
  const res = await axios.post(getUrl('/coremembers'), data);
  return res.data;
};
