import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GameIconProps {
  gameId: string;
  name: string;
  onClick: () => void;
  isActive?: boolean;
}

const GameIcon: React.FC<GameIconProps> = ({ gameId, name, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative group cursor-pointer transition-all duration-300 
        hover:scale-110 hover:z-10
        ${isActive ? 'scale-110 ring-2 ring-neon-purple' : ''}
      `}
    >
      <div className="w-24 h-24 rounded-xl bg-cosmic-surface border-2 border-cosmic-border group-hover:border-neon-purple/70 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for game icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-neon-purple">
            {gameId === 'cs2' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
            {gameId === 'valorant' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
            {gameId === 'fortnite' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
            {gameId === 'dota2' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
            {gameId === 'gta5' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
            {gameId === 'roblox' && <img src={`/images/${gameId}-icon.png`} alt={name} className="w-16 h-16 object-contain" />}
          </span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Game name */}
      <p className="text-sm font-medium text-center mt-2 text-muted-foreground group-hover:text-neon-purple transition-colors duration-300">
        {name}
      </p>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-purple rounded-full animate-glow-pulse"></div>
      )}
    </div>
  );
};

export const GameIcons: React.FC = () => {
  const { t } = useLanguage();
  const [activeGame, setActiveGame] = React.useState<string | null>(null);

  const games = [
    { id: 'cs2', name: t('cs2.title') },
    { id: 'valorant', name: t('valorant.title') },
    { id: 'fortnite', name: t('fortnite.title') },
    { id: 'dota2', name: t('dota2.title') },
    { id: 'gta5', name: t('gta5.title') },
    { id: 'roblox', name: t('roblox.title') },
  ];

  const scrollToGame = (gameId: string) => {
    setActiveGame(gameId);
    const element = document.getElementById(`game-${gameId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-cosmic-surface/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          {t('games.title')}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <div 
              key={game.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GameIcon 
                gameId={game.id}
                name={game.name}
                onClick={() => scrollToGame(game.id)}
                isActive={activeGame === game.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};