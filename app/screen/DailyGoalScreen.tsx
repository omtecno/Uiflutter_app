import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { SelectableCard } from '../components/SelectableCard';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface DailyGoalScreenProps {
  onContinue: (goal: number) => void;
  progress: number;
}

const goals = [
  { minutes: 5, icon: '☕' },
  { minutes: 10, icon: '🎯' },
  { minutes: 15, icon: '🔥' },
  { minutes: 20, icon: '💪' },
];

export function DailyGoalScreen({ onContinue, progress }: DailyGoalScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">What's your daily learning goal?</h2>
        
        <div className="space-y-3 pb-6">
          {goals.map((goal) => (
            <SelectableCard
              key={goal.minutes}
              selected={selectedGoal === goal.minutes}
              onClick={() => setSelectedGoal(goal.minutes)}
              icon={goal.icon}
            >
              {goal.minutes} min/day
            </SelectableCard>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => selectedGoal && onContinue(selectedGoal)}
          disabled={!selectedGoal}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}