import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Shield, Zap, Cpu, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, key: 'free', color: 'text-success' },
    { icon: Zap, key: 'undetected', color: 'text-neon-purple' },
    { icon: Cpu, key: 'multiplatform', color: 'text-neon-blue' },
    { icon: RefreshCw, key: 'lightweight', color: 'text-neon-cyan' },
    { icon: Download, key: 'updates', color: 'text-neon-pink' },
  ];

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient">
            ScopeX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12 animate-scale-in">
          {features.map((Feature, index) => (
            <div
              key={Feature.key}
              className="p-6 rounded-xl bg-cosmic-surface/50 border border-cosmic-border hover:border-neon-purple/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Feature.icon
                className={`w-8 h-8 ${Feature.color} mb-4 mx-auto group-hover:animate-glow-pulse`}
              />
              <h3 className="font-semibold mb-2 text-foreground">
                ✅ {t(`features.${Feature.key}`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`features.${Feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-scale-in space-y-6">
          {/* 🚀 Кнопка теперь ведёт на Limewire-ссылку */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold px-12 py-6 text-xl rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]"
          >
            <a
              href="https://limewire.com/d/JKca4#oRyT7nhW2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-6 h-6 mr-3" />
              {t('download.button')}
            </a>
          </Button>

          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span className="font-mono">{t('download.count')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
