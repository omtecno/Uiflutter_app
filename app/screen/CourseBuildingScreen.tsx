interface CourseBuildingScreenProps {
  language: string;
}

export function CourseBuildingScreen({ language }: CourseBuildingScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-8">
          <div className="text-8xl">📚</div>
        </div>
        <h2 className="text-2xl text-gray-800 mb-3">course building…</h2>
        <p className="text-center text-gray-600 max-w-[280px]">
          Get ready to join 7 million people learning {language} with Talk Pro!
        </p>
      </div>
    </div>
  );
}
