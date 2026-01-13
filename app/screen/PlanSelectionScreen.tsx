import { useState } from 'react';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ProgressBar } from '../components/ProgressBar';

interface PlanSelectionScreenProps {
  onContinue: (plan: 'super' | 'free') => void;
  progress: number;
}

export function PlanSelectionScreen({ onContinue, progress }: PlanSelectionScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState<'super' | 'free' | null>(null);

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 pt-3 pb-4">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <h2 className="text-2xl text-gray-800 mb-6">How do you want to get started?</h2>
        
        <div className="space-y-4 pb-6">
          {/* Super TalkPro */}
          <div
            onClick={() => setSelectedPlan('super')}
            className={`relative rounded-3xl border-4 p-6 cursor-pointer transition-all ${
              selectedPlan === 'super'
                ? 'border-[#4A90E2] bg-gradient-to-br from-blue-50 to-blue-100'
                : 'border-gray-300 bg-white'
            }`}
          >
            <div className="absolute -top-3 left-6 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm">
              Recommended
            </div>
            <div className="mt-2">
              <h3 className="text-2xl text-gray-800 mb-3">Super TalkPro</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-green-600">✓</div>
                  <div className="text-gray-700">No ads</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">✓</div>
                  <div className="text-gray-700">Unlimited hearts</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">✓</div>
                  <div className="text-gray-700">Personalized practice</div>
                </div>
              </div>
              <div className="text-lg text-gray-600">Free for 7 days</div>
            </div>
          </div>

          {/* Free Plan */}
          <div
            onClick={() => setSelectedPlan('free')}
            className={`rounded-3xl border-4 p-6 cursor-pointer transition-all ${
              selectedPlan === 'free'
                ? 'border-[#4A90E2] bg-blue-50'
                : 'border-gray-300 bg-white'
            }`}
          >
            <h3 className="text-2xl text-gray-800 mb-2">Learn for free</h3>
            <p className="text-gray-600">Basic features with ads</p>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-20">
        <ButtonPrimary
          onClick={() => selectedPlan && onContinue(selectedPlan)}
          disabled={!selectedPlan}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}