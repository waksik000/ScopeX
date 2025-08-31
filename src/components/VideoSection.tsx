import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const VideoSection: React.FC = () => {
  const { t } = useLanguage();

  // Замени на свой YouTube video ID
  const youtubeVideoId = "7E45OWO4ZHk"; // Пример ID

  return (
    <section className="py-20 bg-cosmic-surface/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            {t('video.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('video.desc')}
          </p>
          
          <Card className="bg-cosmic-surface/80 border-cosmic-border backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300">
            <CardContent className="p-8">
              {/* YouTube Video Embed */}
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title="YouTube video player"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
