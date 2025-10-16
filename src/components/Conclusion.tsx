import { Heart, Star, Trophy, ArrowUp } from "lucide-react";

const Conclusion = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="conclusion" className="relative py-20 px-6 gradient-section">
      <div className="max-w-5xl mx-auto">
        {/* Emotions section */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Cảm xúc nghề tuyển sinh</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nghề tuyển sinh là...
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-medium p-8 md:p-12 mb-8 hover-scale animate-fade-in">
            <div className="text-center">
              <div className="text-6xl mb-6">👰</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6">
                "Làm tuyển sinh như làm dâu trăm họ"
              </blockquote>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Phải khéo léo, phải kiên trì, và phải biết cách "chiều" học sinh một cách chân thành nhất
              </p>
            </div>
          </div>
        </div>

        {/* Inspiration section */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
            <div className="absolute inset-0 gradient-hero opacity-95"></div>
            <div className="relative p-8 md:p-12">
              <div className="text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <Star className="inline w-5 h-5 text-white mr-2" />
                  <span className="text-white font-semibold">Khoảnh khắc đáng nhớ</span>
                </div>
                <div className="text-6xl mb-6">🎓</div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
                  "Khi sinh viên nói: 'Em chọn trường vì tin tưởng cô'"
                </blockquote>
                <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
                  Đó là lúc mọi mệt mỏi, lo lắng và căng thẳng đều tan biến.
                  <br />
                  Đó là lúc em hiểu rằng, mình đã làm đúng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team acknowledgment */}
        <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 mb-12 hover-scale animate-fade-in">
          <div className="text-center">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Thành công của tập thể
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Thành quả hôm nay là công sức của cả tập thể.
              <br />
              Sự hỗ trợ, động viên và chia sẻ của mọi người là động lực lớn nhất.
            </p>
            <div className="inline-block bg-gradient-section px-8 py-4 rounded-2xl">
              <p className="text-2xl font-bold gradient-text">
                Cùng nhau hướng tới mùa tuyển sinh 2026 rực rỡ hơn! 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Final thank you */}
        <div className="relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
          <div className="absolute inset-0 gradient-accent opacity-90"></div>
          <div className="relative p-12 md:p-16 text-center">
            <div className="mb-8">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' dominant-baseline='middle' font-family='Montserrat, sans-serif' font-weight='800' fill='%23ffffff'%3EĐẠI VIỆT%3C/text%3E%3C/svg%3E"
                alt="Logo Đại Việt"
                className="h-16 mx-auto mb-6"
              />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              XIN CHÂN THÀNH CẢM ƠN!
            </h3>
            <p className="text-xl text-white/95 font-semibold mb-8">
              Hệ thống Giáo dục Đại Việt
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-white/90">
              <span>📍 Đà Nẵng</span>
              <span className="hidden md:inline">•</span>
              <span>📧 tuyensinh@daiviet.edu.vn</span>
              <span className="hidden md:inline">•</span>
              <span>📞 0236.xxx.xxxx</span>
            </div>
          </div>
        </div>

        <style>{`
          .gradient-text {
            background: linear-gradient(135deg, hsl(0 85% 55%), hsl(25 95% 60%));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('guidelines')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to previous section"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('hero')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Conclusion;
