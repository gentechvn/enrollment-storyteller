import { Users, MessageCircle, Target, TrendingUp } from "lucide-react";

const PhaseOne = () => {
  const approaches = [
    {
      icon: MessageCircle,
      title: "Nói chuyện thân thiện",
      description: "Như anh/chị đi trước, chia sẻ kinh nghiệm thực tế"
    },
    {
      icon: Users,
      title: "Kết nối lớp trưởng",
      description: "Tạo mối quan hệ với những người có ảnh hưởng trong lớp"
    },
    {
      icon: Target,
      title: "Không nói 'tuyển sinh' sớm",
      description: "Tập trung vào giá trị và sự quan tâm chân thành"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl font-black text-primary">01</span>
            <span className="text-primary font-semibold">Giai đoạn đầu tiên</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gieo hạt đầu tiên
            <br />
            <span className="text-primary">Tư vấn hướng nghiệp</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Objective card */}
          <div className="bg-gradient-section rounded-3xl shadow-soft p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mục tiêu</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Giới thiệu trường và tạo ấn tượng ban đầu</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Xây dựng niềm tin từ những tương tác đầu tiên</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Tạo kết nối cảm xúc với học sinh</p>
              </li>
            </ul>
          </div>

          {/* Success metrics */}
          <div className="bg-white rounded-3xl shadow-soft p-8 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Yếu tố thành công</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-primary">
                <p className="text-lg font-semibold text-foreground mb-2">Tạo ấn tượng tích cực</p>
                <p className="text-muted-foreground">Học sinh cảm thấy được lắng nghe và quan tâm</p>
              </div>
              <div className="relative pl-6 border-l-4 border-accent">
                <p className="text-lg font-semibold text-foreground mb-2">Xây dựng niềm tin</p>
                <p className="text-muted-foreground">Thông qua sự chân thành và hiểu biết</p>
              </div>
              <div className="relative pl-6 border-l-4 border-secondary">
                <p className="text-lg font-semibold text-foreground mb-2">Kết nối lâu dài</p>
                <p className="text-muted-foreground">Tạo nền tảng cho các bước tiếp theo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Approaches */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Phương pháp tiếp cận
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-smooth p-8 border-2 border-transparent hover:border-primary/20"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-smooth flex items-center justify-center mb-6 mx-auto">
                  <approach.icon className="w-8 h-8 text-primary group-hover:text-white transition-smooth" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 text-center">
                  {approach.title}
                </h4>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative overflow-hidden rounded-3xl shadow-medium">
          <div className="absolute inset-0 gradient-accent opacity-90"></div>
          <div className="relative p-8 md:p-12">
            <div className="text-5xl mb-4">💭</div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Khi học sinh cảm nhận được sự chân thành, các em sẽ mở lòng hơn."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseOne;
