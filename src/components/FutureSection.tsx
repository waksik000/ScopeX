import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Gamepad2, Smartphone, Brain, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FutureSection: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      icon: Rocket,
      title: t('future.rematch'),
      color: 'text-neon-purple'
    },
    {
      icon: Gamepad2,
      title: t('future.rp'),
      color: 'text-neon-blue'
    },
    {
      icon: Smartphone,
      title: t('future.mobile'),
      color: 'text-neon-cyan'
    },
    {
      icon: Brain,
      title: t('future.ai'),
      color: 'text-neon-pink'
    },
    {
      icon: Package,
      title: t('future.launcher'),
      color: 'text-success'
    }
  ];

  return (
    <section className="py-20 bg-cosmic-surface/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          🚀 {t('future.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="bg-cosmic-surface/80 border-cosmic-border backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <plan.icon className={`w-12 h-12 ${plan.color} mx-auto mb-4 group-hover:animate-float`} />
                <p className="text-foreground font-medium leading-relaxed">
                  {plan.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};