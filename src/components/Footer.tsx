import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    // Путь к файлу в папке public
    const fileUrl = '/ScopeX.zip';
    
    // Создаем временную ссылку
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ScopeX.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Можно добавить аналитику (если нужно)
    // window.gtag('event', 'download', {...});
  };

  return (
    <footer className="bg-cosmic-surface/80 border-t border-cosmic-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold text-gradient">ScopeX</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('games')}
                className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm"
              >
                {t('footer.games')}
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm"
              >
                {t('footer.news')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-muted-foreground hover:text-neon-purple transition-colors text-sm"
              >
                {t('footer.faq')}
              </button>
            </div>
          </div>

          {/* Download Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.download')}</h4>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <div className="text-neon-blue font-medium">ScopeX v2.1</div>
                <div>{t('footer.version')}</div>
              </div>
              <Button 
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple/80 hover:to-neon-blue/80 text-white border-0"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('download.button')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cosmic-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ScopeX. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t('footer.forGamers')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};