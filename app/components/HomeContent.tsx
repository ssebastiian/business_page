'use client';

import { LayoutPrincipal } from '@/layouts/LayoutPincipal';
import { Hero } from './Hero';
import { ServiceCard } from './ServiceCard';
import { ServicesSection } from './ServicesSection';
import { ContactComponent } from './ContactComponent';
import { ExpertiseComponent } from './ExpertiseComponent';

export const HomeContent = () => {

  return (
    <LayoutPrincipal>
        <Hero/>
        <ServiceCard/>
        <ServicesSection/>
        <ExpertiseComponent/>
        <ContactComponent/>
    </LayoutPrincipal>
  );
};