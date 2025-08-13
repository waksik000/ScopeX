import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header
    'header.title': 'ScopeX',
    'header.subtitle': 'Бесплатный мультиплатформенный чит',
    
    // Features
    'features.free': 'Бесплатный',
    'features.free.desc': 'никакой подписки и скрытых платежей',
    'features.undetected': 'Не детектится',
    'features.undetected.desc': 'обход VAC, EAC, BattlEye, Vanguard',
    'features.multiplatform': 'Мультиплатформенный',
    'features.multiplatform.desc': 'поддержка Windows (возможно Android)',
    'features.lightweight': 'Лёгкий и быстрый',
    'features.lightweight.desc': 'минимальное влияние на FPS',
    'features.updates': 'Регулярные обновления',
    'features.updates.desc': 'защита от новых патчей',
    
    // Download
    'download.button': 'Скачать ScopeX',
    'download.count': 'Уже 1M+ загрузок!',
    
    // Games
    'games.title': 'Поддерживаемые игры',
    
    // CS2
    'cs2.title': 'CS2',
    'cs2.aimbot': 'Aimbot (умный, с настройкой FOV, плавности, приоритет по HP)',
    'cs2.wallhack': 'Wallhack (боксы, подсветка врагов, оружия, гранат)',
    'cs2.triggerbot': 'Triggerbot (авто-огонь при наведении)',
    'cs2.bhop': 'Bunny Hop (автопрыжки с настройкой)',
    'cs2.legit': 'Legit-режим (максимально скрытный)',
    'cs2.noflash': 'No Flash / No Smoke (убирает эффекты)',
    
    // Valorant
    'valorant.title': 'Valorant',
    'valorant.aimbot': 'Aimbot (настройка под разные оружия)',
    'valorant.esp': 'ESP (боксы, линии, расстояние, HP)',
    'valorant.radar': 'Radar Hack (враги на миникарте)',
    'valorant.norecoil': 'No Recoil (нулевая отдача)',
    'valorant.antiafk': 'Anti-AFK (авто-движение)',
    'valorant.stealth': 'Скрытный режим (Low FOV, Humanizer)',
    
    // Fortnite
    'fortnite.title': 'Fortnite',
    'fortnite.softaim': 'Soft Aim (естественный аим)',
    'fortnite.esp': 'ESP (игроки, луты, сундуки, транспорт)',
    'fortnite.aimbot': 'Aimbot (подстройка под разные оружия)',
    'fortnite.nospread': 'No Spread (идеальная точность)',
    'fortnite.edit': 'Instant Edit (мгновенное редактирование)',
    'fortnite.farm': 'Auto Loot Farm (авто-сбор ресурсов)',
    
    // Dota 2
    'dota2.title': 'Dota 2',
    'dota2.maphack': 'Map Hack (видимость всей карты)',
    'dota2.lasthit': 'Auto Last Hit (авто-добивание крипов)',
    'dota2.scripts': 'Скрипты на героев (авто-комбо, армлет-абуз)',
    'dota2.zoom': 'Zoom Hack (увеличение обзора)',
    'dota2.dodge': 'Auto Dodge (уворот от способностей)',
    'dota2.info': 'Информационные хаки (КД, мануальные подсказки)',
    
    // GTA 5
    'gta5.title': 'GTA 5',
    'gta5.money': 'Money Drop (раздача денег)',
    'gta5.god': 'God Mode (бессмертие)',
    'gta5.noclip': 'No Clip (полёт и проход сквозь стены)',
    'gta5.teleport': 'Teleport (мгновенное перемещение)',
    'gta5.unlock': 'Unlock All (открытие всего контента)',
    'gta5.spawner': 'Vehicle Spawner (любые машины)',
    
    // Roblox
    'roblox.title': 'Roblox',
    'roblox.injector': 'Мощный инжектор для Roblox',
    'roblox.unc': '98% UNC совместимость',
    'roblox.sunc': '96% sUNC поддержка',
    'roblox.stable': 'Стабильная работа на всех играх',
    'roblox.scripts': 'Поддержка всех популярных скриптов',
    'roblox.auto': 'Автоматическое обновление',
    
    // News
    'news.title': 'Новости',
    'news.1.title': 'Обновление v2.1 – новый анти-детект!',
    'news.1.desc': 'Мы улучшили защиту от Vanguard и BattlEye. Теперь ScopeX ещё стабильнее!',
    'news.2.title': 'Скоро: поддержка GTA 5 RP (RAGE MP, AltV)',
    'news.2.desc': 'Работаем над читом для ролевых серверов – следите за обновлениями!',
    'news.3.title': 'Новая функция в CS2 – Auto Peek!',
    'news.3.desc': 'Теперь можно настраивать авто-выход из-за угла.',
    
    // Future
    'future.title': 'Планы на будущее',
    'future.rematch': 'Чит на Rematch (новый анти-чит, в разработке)',
    'future.rp': 'GTA 5 RP (RAGE MP, AltV, FiveM – скоро!)',
    'future.mobile': 'Mobile-версия (для PUBG Mobile, COD Mobile)',
    'future.ai': 'Расширенный AI-аим (адаптация под стиль игры)',
    'future.launcher': 'Собственный лаунчер (авто-обновления, статистика)',
    
    // Video
    'video.title': 'Демонстрация возможностей',
    'video.desc': 'Посмотрите как работает ScopeX в действии',
    
    // Theme
    'theme.light': 'Светлая тема',
    'theme.dark': 'Тёмная тема',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Безопасен ли ScopeX для использования?',
    'faq.a1': 'Да, ScopeX использует передовые технологии защиты от обнаружения. Наш чит обходит VAC, EAC, BattlEye и Vanguard благодаря постоянным обновлениям.',
    'faq.q2': 'Какие системные требования?',
    'faq.a2': 'Windows 10/11 (64-bit), минимум 4 GB RAM, DirectX 11. Поддержка процессоров Intel и AMD.',
    'faq.q3': 'Как часто выходят обновления?',
    'faq.a3': 'Мы выпускаем обновления еженедельно или при необходимости (патчи игр, новые защиты). Все обновления бесплатные.',
    'faq.q4': 'Могу ли я использовать ScopeX на нескольких аккаунтах?',
    'faq.a4': 'Да, но мы рекомендуем использовать разные настройки для каждого аккаунта и соблюдать осторожность.',
    'faq.q5': 'Что делать если чит не запускается?',
    'faq.a5': 'Отключите антивирус, запустите от имени администратора, проверьте целостность файлов игры. Если проблема остается - обратитесь в поддержку.',
    'faq.q6': 'Есть ли техническая поддержка?',
    'faq.a6': 'Да, у нас есть активное сообщество в Discord и служба поддержки, которая поможет решить любые вопросы.',
    
    // Footer
    'footer.description': 'Лучший бесплатный мультиплатформенный чит для популярных игр. Не детектируется, легкий и быстрый.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.games': 'Игры',
    'footer.news': 'Новости',
    'footer.faq': 'FAQ',
    'footer.download': 'Скачать',
    'footer.version': 'Версия 2.1 • Windows • 15.2 MB',
    'footer.rights': 'Все права защищены.',
    'footer.madeWith': 'Сделано с',
    'footer.forGamers': 'для геймеров',
  },
  en: {
    // Header
    'header.title': 'ScopeX',
    'header.subtitle': 'Free Multiplatform Cheat',
    
    // Features
    'features.free': 'Free',
    'features.free.desc': 'no subscription and hidden payments',
    'features.undetected': 'Undetected',
    'features.undetected.desc': 'bypass VAC, EAC, BattlEye, Vanguard',
    'features.multiplatform': 'Multiplatform',
    'features.multiplatform.desc': 'Windows support (Android possible)',
    'features.lightweight': 'Lightweight & Fast',
    'features.lightweight.desc': 'minimal FPS impact',
    'features.updates': 'Regular Updates',
    'features.updates.desc': 'protection from new patches',
    
    // Download
    'download.button': 'Download ScopeX',
    'download.count': 'Already 1M+ downloads!',
    
    // Games
    'games.title': 'Supported Games',
    
    // CS2
    'cs2.title': 'CS2',
    'cs2.aimbot': 'Aimbot (smart, with FOV settings, smoothness, HP priority)',
    'cs2.wallhack': 'Wallhack (boxes, enemy highlighting, weapons, grenades)',
    'cs2.triggerbot': 'Triggerbot (auto-fire on aim)',
    'cs2.bhop': 'Bunny Hop (auto-jump with settings)',
    'cs2.legit': 'Legit mode (maximum stealth)',
    'cs2.noflash': 'No Flash / No Smoke (removes effects)',
    
    // Valorant
    'valorant.title': 'Valorant',
    'valorant.aimbot': 'Aimbot (settings for different weapons)',
    'valorant.esp': 'ESP (boxes, lines, distance, HP)',
    'valorant.radar': 'Radar Hack (enemies on minimap)',
    'valorant.norecoil': 'No Recoil (zero recoil)',
    'valorant.antiafk': 'Anti-AFK (auto-movement)',
    'valorant.stealth': 'Stealth mode (Low FOV, Humanizer)',
    
    // Fortnite
    'fortnite.title': 'Fortnite',
    'fortnite.softaim': 'Soft Aim (natural aim)',
    'fortnite.esp': 'ESP (players, loot, chests, vehicles)',
    'fortnite.aimbot': 'Aimbot (adjustment for different weapons)',
    'fortnite.nospread': 'No Spread (perfect accuracy)',
    'fortnite.edit': 'Instant Edit (instant editing)',
    'fortnite.farm': 'Auto Loot Farm (auto-resource collection)',
    
    // Dota 2
    'dota2.title': 'Dota 2',
    'dota2.maphack': 'Map Hack (full map visibility)',
    'dota2.lasthit': 'Auto Last Hit (auto-creep killing)',
    'dota2.scripts': 'Hero scripts (auto-combo, armlet-abuse)',
    'dota2.zoom': 'Zoom Hack (zoom increase)',
    'dota2.dodge': 'Auto Dodge (dodge abilities)',
    'dota2.info': 'Information hacks (CD, manual hints)',
    
    // GTA 5
    'gta5.title': 'GTA 5',
    'gta5.money': 'Money Drop (money distribution)',
    'gta5.god': 'God Mode (immortality)',
    'gta5.noclip': 'No Clip (flight and wall pass-through)',
    'gta5.teleport': 'Teleport (instant movement)',
    'gta5.unlock': 'Unlock All (unlock all content)',
    'gta5.spawner': 'Vehicle Spawner (any vehicles)',
    
    // Roblox
    'roblox.title': 'Roblox',
    'roblox.injector': 'Powerful Roblox injector',
    'roblox.unc': '98% UNC compatibility',
    'roblox.sunc': '96% sUNC support',
    'roblox.stable': 'Stable work on all games',
    'roblox.scripts': 'Support for all popular scripts',
    'roblox.auto': 'Automatic updates',
    
    // News
    'news.title': 'News',
    'news.1.title': 'Update v2.1 – new anti-detect!',
    'news.1.desc': 'We improved protection from Vanguard and BattlEye. Now ScopeX is even more stable!',
    'news.2.title': 'Coming soon: GTA 5 RP support (RAGE MP, AltV)',
    'news.2.desc': 'Working on cheat for roleplay servers – stay tuned for updates!',
    'news.3.title': 'New CS2 feature – Auto Peek!',
    'news.3.desc': 'Now you can configure auto-peek from corners.',
    
    // Future
    'future.title': 'Future Plans',
    'future.rematch': 'Rematch cheat (new anti-cheat, in development)',
    'future.rp': 'GTA 5 RP (RAGE MP, AltV, FiveM – coming soon!)',
    'future.mobile': 'Mobile version (for PUBG Mobile, COD Mobile)',
    'future.ai': 'Advanced AI-aim (adaptation to playstyle)',
    'future.launcher': 'Own launcher (auto-updates, statistics)',
    
    // Video
    'video.title': 'Feature Demonstration',
    'video.desc': 'Watch how ScopeX works in action',
    
    // Theme
    'theme.light': 'Light Theme',
    'theme.dark': 'Dark Theme',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is ScopeX safe to use?',
    'faq.a1': 'Yes, ScopeX uses advanced anti-detection technologies. Our cheat bypasses VAC, EAC, BattlEye and Vanguard thanks to constant updates.',
    'faq.q2': 'What are the system requirements?',
    'faq.a2': 'Windows 10/11 (64-bit), minimum 4 GB RAM, DirectX 11. Supports Intel and AMD processors.',
    'faq.q3': 'How often are updates released?',
    'faq.a3': 'We release updates weekly or as needed (game patches, new protections). All updates are free.',
    'faq.q4': 'Can I use ScopeX on multiple accounts?',
    'faq.a4': 'Yes, but we recommend using different settings for each account and being cautious.',
    'faq.q5': 'What to do if the cheat doesn\'t start?',
    'faq.a5': 'Disable antivirus, run as administrator, verify game file integrity. If the problem persists - contact support.',
    'faq.q6': 'Is there technical support?',
    'faq.a6': 'Yes, we have an active Discord community and support service that will help solve any issues.',
    
    // Footer
    'footer.description': 'The best free multiplatform cheat for popular games. Undetected, lightweight and fast.',
    'footer.quickLinks': 'Quick Links',
    'footer.games': 'Games',
    'footer.news': 'News',
    'footer.faq': 'FAQ',
    'footer.download': 'Download',
    'footer.version': 'Version 2.1 • Windows • 15.2 MB',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forGamers': 'for gamers',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};