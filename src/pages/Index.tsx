import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { GameIcons } from '@/components/GameIcons';
import { GameSections } from '@/components/GameSection';
import { VideoSection } from '@/components/VideoSection';
import { NewsSection } from '@/components/NewsSection';
import { FutureSection } from '@/components/FutureSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen cosmic-gradient smooth-scroll">
      <Header />
      <main>
        <HeroSection />
        <GameIcons />
        <GameSections />
        <VideoSection />
        <NewsSection />
        <FutureSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
