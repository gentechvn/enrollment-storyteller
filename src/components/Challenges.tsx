import { AlertTriangle, Clock, TrendingDown, Users, ArrowUp, ArrowDown } from "lucide-react";

const Challenges = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const challenges = [
    {
      icon: TrendingDown,
      title: "Học sinh 'bội thực' thông tin",
      description: "Nhiều trường tư vấn cùng lúc khiến học sinh khó tiếp nhận",
      impact: "Giảm tỷ lệ ghi nhớ và quan tâm"
    },
    {
      icon: Users,
      title: "Hứng thú giảm sút",
      description: "Mạng xã hội và tư vấn trùng lặp làm học sinh mất hứng",
      impact: "Khó tạo sự khác biệt"
    },
    {
      icon: Clock,
      title: "Giới hạn thời gian",
      description: "Học sinh bận học tập, ôn thi và các hoạt động khác",
      impact: "Khó tiếp cận và tương tác"
    },
    {
      icon: AlertTriangle,
      title: "Ưu tiên đại học công lập",
      description: "Nhiều học sinh vẫn ưu tiên các trường công lập trước",
      impact: "Cần thời gian thuyết phục lâu hơn"
    }
  ];

  return (
    <section id="challenges" className="relative py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-semibold">Thực tế & Khó khăn</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Những thách thức
            <br />
            <span className="text-primary">trong tuyển sinh</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hiểu rõ khó khăn để tìm ra giải pháp phù hợp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium hover-scale transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <challenge.icon className="w-7 h-7 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {challenge.description}
                  </p>
                  <div className="flex items-center gap-2 bg-destructive/5 px-4 py-2 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                    <p className="text-sm font-medium text-destructive">
                      {challenge.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution approach */}
        <div className="relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-6">💪</div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Vậy nên làm gì?
              </h3>
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  ✦ Tạo <span className="font-bold text-secondary">sự khác biệt</span> trong cách tiếp cận
                </p>
                <p>
                  ✦ Xây dựng <span className="font-bold text-secondary">mối quan hệ chân thành</span>, không chỉ tư vấn
                </p>
                <p>
                  ✦ <span className="font-bold text-secondary">Kiên trì</span> và biết thời điểm phù hợp
                </p>
                <p>
                  ✦ Tận dụng <span className="font-bold text-secondary">công nghệ</span> để quản lý và theo dõi hiệu quả
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('phase-one')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to previous section"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('data-processing')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Challenges;
