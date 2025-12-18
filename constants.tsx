
import React from 'react';
import { Product } from './types';

export const COLORS = {
  blue: '#1e3a8a', // Deep Blue
  green: '#15803d', // Earth Green
  grey: '#4b5563', // Metallic Grey
};

export const IMPORT_PRODUCTS: Product[] = [
  {
    id: 'm1',
    name: 'Excavator Model X-500',
    category: 'Heavy Machinery',
    description: 'High-performance hydraulic excavator for major construction projects.',
    imageUrl: 'https://images.unsplash.com/photo-1579412691523-662580798e45?auto=format&fit=crop&q=80&w=800',
    specs: { Weight: '25 Tons', Power: '150 kW', Depth: '7.5m' }
  },
  {
    id: 'ev1',
    name: 'EcoDrive Sedan 2024',
    category: 'Electric Vehicles',
    description: 'Cutting-edge electric vehicle with 500km range and rapid charging.',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    specs: { Range: '500km', TopSpeed: '180km/h', Battery: '85kWh' }
  },
  {
    id: 'rm1',
    name: 'Industrial Steel Rebar',
    category: 'Industrial Raw Materials',
    description: 'High-tensile strength steel rebar for infrastructure stability.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  }
];

export const MEDICAL_PRODUCTS: Product[] = [
  {
    id: 'med1',
    name: 'Advanced MRI Scanner',
    category: 'Medical Equipment',
    description: 'High-resolution imaging system for precision diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    specs: { Type: 'Full Body', Field: '3.0 Tesla', Noise: 'Low' }
  },
  {
    id: 'med2',
    name: 'Digital X-Ray System',
    category: 'Medical Equipment',
    description: 'Low-radiation digital radiography for rapid clinical results.',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
  }
];

export const EDIBLE_PRODUCTS: Product[] = [
  {
    id: 'ed1',
    name: 'Organic Sunflower Oil',
    category: 'Edible Products',
    description: 'Refined sunflower oil for healthy cooking and food processing.',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800',
    specs: { Volume: '5 Liters', Type: 'Cold Pressed', Origin: 'Global' }
  },
  {
    id: 'ed2',
    name: 'Premium Basmati Rice',
    category: 'Edible Products',
    description: 'Long-grain aromatic rice sourced from sustainable farms.',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPORT_CATEGORIES = [
  {
    title: 'Specialty Coffee',
    description: 'The finest Arabica beans from Yirgacheffe and Sidamo regions.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Oilseeds & Pulses',
    description: 'High-grade sesame seeds, soy beans, and chickpeas.',
    imageUrl: 'https://images.unsplash.com/photo-1506484334402-40ff22e0d467?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS = [
  {
    title: 'Addis Smart Highway',
    category: 'Civil Works',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Skyline Business Plaza',
    category: 'Commercial Construction',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  }
];

export const PARTNERS = [
  { 
    name: 'Melhek Transit Service', 
    logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200', 
    type: 'Sister Company' 
  },
  { 
    name: 'Liang Manufactory', 
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200', 
    type: 'Sister Company' 
  }
];
