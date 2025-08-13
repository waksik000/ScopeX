import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const VideoSection: React.FC = () => {
  const { t } = useLanguage();

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
              {/* Placeholder for YouTube video */}
              <div className="relative aspect-video bg-cosmic-bg rounded-xl border-2 border-dashed border-cosmic-border/50 flex items-center justify-center group hover:border-neon-purple/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    YouTube Video Placeholder
                  </h3>
                  <p className="text-muted-foreground">
                    Здесь будет видео с демонстрацией ScopeX
                  </p>
                </div>
              </div>
              
              {/* Instructions for adding video */}
              <div className="mt-6 p-4 bg-cosmic-bg/50 rounded-lg border border-cosmic-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Для добавления YouTube видео:</strong><br />
                  Замените этот блок на iframe с вашим YouTube видео
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};