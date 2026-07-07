export const CompanyInfo = () => {
  return (
    <section className="relative w-full bg-[#0D0D11] py-16">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#16161F] p-10 md:p-12">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/35 uppercase block mb-8">
            Company Information
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">
            <div className="pb-3 border-b border-white/[0.06]">
              <p className="text-[11px] font-mono tracking-wider text-white/35 uppercase mb-1.5">Brand</p>
              <p className="text-[15px] text-white font-medium">Du Life</p>
            </div>

            <div className="pb-3 border-b border-white/[0.06]">
              <p className="text-[11px] font-mono tracking-wider text-white/35 uppercase mb-1.5">Founder</p>
              <p className="text-[15px] text-white font-medium">Duvan Andres Ramos Padilla</p>
            </div>

            <div className="pb-3 border-b border-white/[0.06]">
              <p className="text-[11px] font-mono tracking-wider text-white/35 uppercase mb-1.5">Product</p>
              <p className="text-[15px] text-white font-medium">AI Memory Assistant for WhatsApp</p>
            </div>

            <div className="pb-3 border-b border-white/[0.06]">
              <p className="text-[11px] font-mono tracking-wider text-white/35 uppercase mb-1.5">Official Website</p>
              <a
                href="https://dur.life"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-[#C4E938] font-medium hover:underline"
              >
                https://dur.life
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
