export default function LeftBanner() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('/images/login-bg.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/90"></div>

      <div className="relative z-10 flex flex-col justify-between p-12 w-full h-full text-white">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-background-dark font-bold">
              N
            </div>
            <span className="text-xl font-bold tracking-tight">NDA Smart Step</span>
          </div>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
            Shaping bright futures, one step at a time.
          </h2>
          <p className="text-lg text-gray-300">
            Secure access for administrators to manage content, users, and educational
            resources.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          © 2024 NDA Smart Step. All rights reserved.
        </div>
      </div>
    </div>
  );
}
