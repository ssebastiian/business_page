'use client';

import { LayoutPrincipal } from '@/layouts/LayoutPincipal';
import { Hero } from './Hero';
import { ServiceCard } from './ServiceCard';
import { ServicesSection } from './ServicesSection';

export const HomeContent = () => {

  return (
    <LayoutPrincipal>
        <Hero/>
        <ServiceCard/>
        <ServicesSection/>
    </LayoutPrincipal>
  );
};