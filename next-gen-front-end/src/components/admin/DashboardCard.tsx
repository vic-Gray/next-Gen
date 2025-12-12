import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

export function DashboardCard({ title, value, icon: Icon, change, changeType }: DashboardCardProps) {
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';

  return (
    <Card className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-400 mb-1">{title}</p>
            <p className="text-2xl font-bold text-white mb-2">{value}</p>
            <div className="flex items-center space-x-1">
              {isPositive && <TrendingUp className="h-4 w-4 text-green-500" />}
              {isNegative && <TrendingDown className="h-4 w-4 text-red-500" />}
              <span
                className={cn(
                  'text-sm font-medium',
                  isPositive && 'text-green-500',
                  isNegative && 'text-red-500',
                  changeType === 'neutral' && 'text-neutral-400'
                )}
              >
                {change}
              </span>
            </div>
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}