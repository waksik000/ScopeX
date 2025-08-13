import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GameSectionProps {
  gameId: string;
  title: string;
  features: string[];
  gradient: string;
}

const GameSection: React.FC<GameSectionProps> = ({ gameId, title, features, gradient }) => {
  return (
    <section id={`game-${gameId}`} className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-cosmic-surface/80 border-cosmic-border backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300">
          <CardHeader className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${gradient} flex items-center justify-center`}>
              <span className="text-3xl">
                {gameId === 'cs2' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
                {gameId === 'valorant' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
                {gameId === 'fortnite' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
                {gameId === 'dota2' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
                {gameId === 'gta5' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
                {gameId === 'roblox' && <img src={`/images/${gameId}-icon.png`} alt={title} className="w-16 h-16 object-contain" />}
              </span>
            </div>
            <CardTitle className="text-3xl font-bold text-gradient">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-cosmic-bg/30 border border-cosmic-border/50 hover:border-neon-purple/30 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export const GameSections: React.FC = () => {
  const { t } = useLanguage();

  const games = [
    {
      id: 'cs2',
      title: t('cs2.title'),
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        t('cs2.aimbot'),
        t('cs2.wallhack'),
        t('cs2.triggerbot'),
        t('cs2.bhop'),
        t('cs2.legit'),
        t('cs2.noflash'),
      ]
    },
    {
      id: 'valorant',
      title: t('valorant.title'),
      gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
      features: [
        t('valorant.aimbot'),
        t('valorant.esp'),
        t('valorant.radar'),
        t('valorant.norecoil'),
        t('valorant.antiafk'),
        t('valorant.stealth'),
      ]
    },
    {
      id: 'fortnite',
      title: t('fortnite.title'),
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
      features: [
        t('fortnite.softaim'),
        t('fortnite.esp'),
        t('fortnite.aimbot'),
        t('fortnite.nospread'),
        t('fortnite.edit'),
        t('fortnite.farm'),
      ]
    },
    {
      id: 'dota2',
      title: t('dota2.title'),
      gradient: 'bg-gradient-to-br from-red-600 to-yellow-500',
      features: [
        t('dota2.maphack'),
        t('dota2.lasthit'),
        t('dota2.scripts'),
        t('dota2.zoom'),
        t('dota2.dodge'),
        t('dota2.info'),
      ]
    },
    {
      id: 'gta5',
      title: t('gta5.title'),
      gradient: 'bg-gradient-to-br from-green-500 to-yellow-600',
      features: [
        t('gta5.money'),
        t('gta5.god'),
        t('gta5.noclip'),
        t('gta5.teleport'),
        t('gta5.unlock'),
        t('gta5.spawner'),
      ]
    },
    {
      id: 'roblox',
      title: t('roblox.title'),
      gradient: 'bg-gradient-to-br from-blue-600 to-red-500',
      features: [
        t('roblox.injector'),
        t('roblox.unc'),
        t('roblox.sunc'),
        t('roblox.stable'),
        t('roblox.scripts'),
        t('roblox.auto'),
      ]
    },
  ];

  return (
    <div className="space-y-0">
      {games.map((game) => (
        <GameSection
          key={game.id}
          gameId={game.id}
          title={game.title}
          features={game.features}
          gradient={game.gradient}
        />
      ))}
    </div>
  );
};