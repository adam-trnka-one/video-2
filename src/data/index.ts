import data from './data.json';
import { Project, Testimonial, Translations } from '../types';

export const projects: Project[] = data.projects;
export const testimonials: Testimonial[] = data.testimonials;
export const translations: Translations = data.languages;