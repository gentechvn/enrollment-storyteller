import { Heart, Sparkles, ArrowUp, ArrowDown } from "lucide-react";

const Introduction = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="relative py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 animate-scale-in">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Lời mở đầu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gửi lời chào trân trọng
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-section p-8 md:p-12 rounded-3xl shadow-soft hover-scale animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Kính gửi <span className="font-bold text-primary">Chủ tịch HĐQT</span>, quý <span className="font-bold">Thầy Cô</span> và toàn thể <span className="font-bold">đồng nghiệp</span> thân mến,
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Em xin được chia sẻ những trải nghiệm trong hành trình tuyển sinh vừa qua với niềm vui, sự biết ơn và cả những khoảnh khắc đầy cảm xúc mà em đã được trải qua.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-accent rounded-full"></div>
            <div className="pl-8 space-y-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Em cảm thấy vô cùng <span className="font-semibold text-foreground">vui</span> và <span className="font-semibold text-foreground">may mắn</span> khi được đứng ở đây, để kể lại những câu chuyện đã trải qua trong suốt mùa tuyển sinh.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Em không mang đến điều gì <span className="font-semibold text-foreground">to tát</span>, chỉ là những <span className="font-semibold text-foreground">trải nghiệm thật</span> với niềm vui, lo lắng và cả những lần "dở khóc dở cười" trong hành trình này.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
            <div className="absolute inset-0 gradient-hero opacity-95"></div>
            <div className="relative p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">💬</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                "Em không mang điều gì to tát, chỉ là những trải nghiệm thật với niềm vui, lo lắng và cả những lần 'dở khóc dở cười'."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('hero')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('journey-overview')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Introduction;
