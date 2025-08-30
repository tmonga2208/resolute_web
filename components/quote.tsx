export default function InspirationalQuote() {
    return (
      <div className="flex items-center justify-center p-5">
        <section className="max-w-4xl bg-white/90 p-12 md:p-16 relative ">
          <div className="absolute top-4 left-6 text-5xl md:text-7xl text-teal-200/80 font-serif leading-none select-none">
          &quot;
          </div>
          <div className="absolute bottom-4 right-6 text-5xl md:text-7xl text-teal-200/80 font-serif  leading-none select-none transform rotate-180">
          &quot;
          </div>
          <div className="relative z-10 text-center font-mollie">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-700 leading-relaxed tracking-wide">
              Your mind is your{' '} <span className="font-bold text-slate-800">strongest muscle</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              – let&apos;s train it with as much care as your body,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              and as much{' '}
              <span className="font-bold text-slate-800">compassion</span>
              {' '}as your heart.
            </p>
          </div>
        </section>
      </div>
    );
  }