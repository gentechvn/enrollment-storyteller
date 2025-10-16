import { Compass, Heart, Target, Smile, Award, Users, ArrowUp, ArrowDown } from "lucide-react";

const Guidelines = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const principles = [
    {
      icon: Compass,
      title: "Hiểu học sinh",
      description: "Nói đúng điều các em cần",
      detail: "Lắng nghe và thấu hiểu mong muốn, lo lắng của từng học sinh"
    },
    {
      icon: Heart,
      title: "Chân thành & Kiên trì",
      description: "Đeo bám mềm mại",
      detail: "Không ép buộc nhưng luôn hiện diện khi học sinh cần"
    },
    {
      icon: Target,
      title: "Biết 'chốt' đúng lúc",
      description: "Thời điểm là then chốt",
      detail: "Nhận biết khi nào học sinh sẵn sàng và đưa ra quyết định đúng"
    },
    {
      icon: Smile,
      title: "Giữ tinh thần tích cực",
      description: "Không nản, không cọc",
      detail: "Mỗi ngày là một cơ hội mới, mỗi từ chối là bài học"
    },
    {
      icon: Award,
      title: "Tạo giá trị thực",
      description: "Không chỉ bán trường",
      detail: "Chia sẻ kinh nghiệm, tư vấn chân thành về tương lai nghề nghiệp"
    },
    {
      icon: Users,
      title: "3 chiến lược vàng",
      description: "Thu hút – Giữ chân – Lôi kéo",
      detail: "Người mới - Người cũ - Người quen: đều quan trọng như nhau"
    }
  ];

  return (
    <section id="guidelines" className="relative py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Compass className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nguyên tắc thành công</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kim chỉ nam
            <br />
            <span className="text-primary">Tuyển sinh</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-semibold">
            Bản lĩnh và Trái tim
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group bg-gradient-section rounded-2xl shadow-soft hover:shadow-medium hover-scale transition-smooth p-8 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center">
                <span className="text-primary font-black text-lg">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-smooth flex items-center justify-center mb-6">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-lg font-semibold text-primary mb-4">
                {principle.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {principle.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Core philosophy */}
        <div className="relative overflow-hidden rounded-3xl shadow-medium mb-12 animate-fade-in">
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Triết lý cốt lõi
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-xl font-bold text-white mb-2">Thu hút người mới</h4>
                  <p className="text-white/90">Tạo ấn tượng và xây dựng niềm tin ban đầu</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="text-xl font-bold text-white mb-2">Giữ chân người cũ</h4>
                  <p className="text-white/90">Duy trì mối quan hệ và củng cố lòng tin</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">📢</div>
                  <h4 className="text-xl font-bold text-white mb-2">Lôi kéo người quen</h4>
                  <p className="text-white/90">Tận dụng mạng lưới giới thiệu hiệu quả</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual summary */}
        <div className="bg-gradient-section rounded-3xl shadow-soft p-8 md:p-12 animate-fade-in hover-scale">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Công thức thành công
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl font-bold">
              <span className="text-primary">Chân thành</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-accent">Kiên trì</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-secondary">Đúng thời điểm</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-green-600">Thành công 🎉</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('stories')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to previous section"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('conclusion')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Guidelines;
