import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <p className="text-white/90 font-medium">Hội nghị tổng kết tuyển sinh 2024 - 2025</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight text-balance">
            CHIA SẺ KINH NGHIỆM
            <br />
            <span className="text-secondary">TUYỂN SINH 2025</span>
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="space-y-4 mb-12 animate-fade-in-delay">
          <p className="text-xl md:text-2xl text-white/95 font-semibold">
            Trường Cao đẳng Đại Việt Đà Nẵng
          </p>
          <div className="inline-block bg-white/95 px-8 py-4 rounded-2xl shadow-medium">
            <p className="text-lg md:text-xl text-foreground font-semibold mb-1">
              Người trình bày
            </p>
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              Phạm Thị Thu Thảo
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Trung tâm Tuyển sinh & Truyền thông
            </p>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="group mx-auto flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full transition-smooth shadow-soft hover:shadow-medium"
        >
          <span className="font-semibold">Khám phá hành trình</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-smooth" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .gradient-text {
          background: linear-gradient(135deg, hsl(0 85% 55%), hsl(25 95% 60%));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Navigation arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8">
        <button
          onClick={scrollToContent}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
