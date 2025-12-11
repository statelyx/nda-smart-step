"use client";

export default function LoginForm() {
  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-background-light dark:bg-background-dark relative">
      
      {/* Mobile Header */}
      <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-background-dark font-bold">
          N
        </div>
        <span className="text-lg font-bold dark:text-white">NDA Smart Step</span>
      </div>

      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Admin Portal
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        <form className="space-y-6">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium leading-normal text-slate-900 dark:text-slate-200">
              Email address
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="admin@ndasmartstep.com"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors sm:text-sm"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                mail
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium leading-normal text-slate-900 dark:text-slate-200">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••••"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 pr-10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3.5 text-sm font-bold text-[#102219] shadow-sm hover:bg-[#0fd673] transition-all duration-200 active:scale-[0.99]"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Trouble logging in? <a className="font-medium hover:underline">Contact Support</a>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            🔒 Secure SSL Connection
          </div>
        </div>
      </div>
    </div>
  );
}
