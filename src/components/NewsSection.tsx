import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const NewsSection: React.FC = () => {
  const { t } = useLanguage();

  const news = [
    {
      title: t('news.1.title'),
      description: t('news.1.desc'),
      date: '13 августа 2025',
      type: 'update',
      color: 'bg-success/20 text-success border-success/30'
    },
    {
      title: t('news.2.title'),
      description: t('news.2.desc'),
      date: '10 августа 2025',
      type: 'coming-soon',
      color: 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'
    },
    {
      title: t('news.3.title'),
      description: t('news.3.desc'),
      date: '8 августа 2025',
      type: 'feature',
      color: 'bg-neon-purple/20 text-neon-purple border-neon-purple/30'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          {t('news.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card 
              key={index}
              className="bg-cosmic-surface/80 border-cosmic-border backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={item.color}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    {item.type === 'update' && 'Обновление'}
                    {item.type === 'coming-soon' && 'Скоро'}
                    {item.type === 'feature' && 'Новая функция'}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};