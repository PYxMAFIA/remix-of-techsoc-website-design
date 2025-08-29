import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchTestimonials = async () => {
  const res = await axios.get(`${BASE_URL}/testimonials`);
  return res.data;
};

export const addTestimonial = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/testimonials`, data);
  return res.data;
};

export const fetchEvents = async () => {
  const res = await axios.get(`${BASE_URL}/events`);
  return res.data;
};

export const addEvent = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/events`, data);
  return res.data;
};

export const fetchGuilds = async () => {
  const res = await axios.get(`${BASE_URL}/guilds`);
  return res.data;
};

export const addGuild = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/guilds`, data);
  return res.data;
};

export const fetchProjects = async () => {
  const res = await axios.get(`${BASE_URL}/projects`);
  return res.data;
};

export const addProject = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/projects`, data);
  return res.data;
};

export const fetchSponsors = async () => {
  const res = await axios.get(`${BASE_URL}/sponsors`);
  return res.data;
};

export const addSponsor = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/sponsors`, data);
  return res.data;
};

export const fetchCoreMembers = async () => {
  const res = await axios.get(`${BASE_URL}/coremembers`);
  return res.data;
};

export const addCoreMember = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/coremembers`, data);
  return res.data;
};
