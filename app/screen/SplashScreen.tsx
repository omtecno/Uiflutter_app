export function SplashScreen() {
  return (
    <div className="h-full bg-[#4A90E2] flex flex-col items-center justify-center px-6">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl">
          <div className="w-36 h-36 rounded-full bg-[#2C3E50] flex items-center justify-center">
            <div className="text-7xl">🦉</div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="text-white text-4xl tracking-wide">TalkPro</h1>
      </div>
    </div>
  );
}
