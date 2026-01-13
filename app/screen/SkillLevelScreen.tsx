import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { SelectableCard } from '../components/SelectableCard';
import { ButtonPrimary } from '../components/ButtonPrimary';

interface SkillLevelScreenProps {
  onContinue: (level: string) => void;
  progress: number;
  language: string;
}

const skillLevels = [
  { id: 'new', label: 'I am new to', icon: '🌱' },
  { id: 'words', label: 'I know some common words', icon: '📖' },
  { id: 'basic', label: 'I can have some basic conversations', icon: '💬' },
  { id: 'various', label: 'I can talk about various topics', icon: '🗣️' },
  { id: 'detail', label: 'I can discuss most topics in detail', icon: '🎓' },
];

export function SkillLevelScreen({ onContinue, progress, language }: SkillLevelScreenProps) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">How much {language} do you know?</h2>
        
        <div className="space-y-3 pb-6">
          {skillLevels.map((level) => (
            <SelectableCard
              key={level.id}
              selected={selectedLevel === level.id}
              onClick={() => setSelectedLevel(level.id)}
              icon={level.icon}
            >
              {level.label} {level.id === 'new' ? language : ''}
            </SelectableCard>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => selectedLevel && onContinue(selectedLevel)}
          disabled={!selectedLevel}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}