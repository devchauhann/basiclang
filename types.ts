
import React from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Page {
  HOME = 'home',
  COMPONENTS = 'components',
  FEATURES = 'features',
  TEMPLATES = 'templates',
  RELEASES = 'releases',
  GET_STARTED = 'get-started',
  API_REFERENCE = 'api-reference',
  THEMING = 'theming',
  CUSTOMIZATION = 'customization',
  PRIVACY = 'privacy',
  TERMS = 'terms',
  LICENSE = 'license',
  GUIDE = 'guide',
  PACKAGES = 'packages',
  PRICING = 'pricing',
  ABOUT = 'about',
  CONTACT = 'contact',
  SHOWCASE = 'showcase',
  NOT_FOUND = 'not-found',
  NO_CONNECTION = 'no-connection',
}

export type ButtonVariant = 
  | 'gradient' 
  | 'glass' 
  | 'neon' 
  | 'claymorphism' 
  | 'outline' 
  | 'ghost' 
  | 'primary' 
  | 'secondary';

export enum ButtonCategory {
  MODERN = 'Modern',
  MINIMAL = 'Minimal',
  ANIMATED = 'Animated',
  CLAYMORPHIC = 'Claymorphic',
  GRADIENT = 'Gradient',
  GLASS = 'Glass',
  TEXTURE = 'Texture',
  SHADOW = 'Shadow',
  STATE = 'State',
  GLOW = 'Glow',
  NEUMORPHIC = 'Neumorphic',
  NEON = 'Neon',
  RETRO = 'Retro',
  SKEUOMORPHIC = 'Skeuomorphic',
}

export enum CardCategory {
  MINIMAL = 'Minimal',
  GRADIENT = 'Gradient',
  ELEVATED = 'Elevated',
  FLAT = 'Flat',
  BORDERED = 'Bordered',
  GLASS = 'Glass',
}

export enum FormCategory {
  MINIMAL = 'Minimal',
  OUTLINED = 'Outlined',
  FILLED = 'Filled',
  FLOATING_LABEL = 'Floating Label',
  MODERN = 'Modern',
}

export interface ButtonDesign {
  id: string;
  name: string;
  category: string;
  component: React.FC;
  description: string;
  tailwind?: string;
  react?: string;
  html?: string;
  css?: string;
  javascript?: string;
}

export interface CardDesign {
  id: string;
  name: string;
  category: string;
  component: React.FC;
  description: string;
  tailwind?: string;
  react?: string;
  html?: string;
  css?: string;
  javascript?: string;
}

export interface FormDesign {
  id: string;
  name: string;
  category: string;
  component: React.FC;
  description: string;
  tailwind?: string;
  react?: string;
  html?: string;
  css?: string;
  javascript?: string;
}

// Generic component design (for internal use)
export type ComponentDesign = ButtonDesign | CardDesign | FormDesign;

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
