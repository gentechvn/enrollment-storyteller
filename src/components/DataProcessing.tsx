import { Database, Globe, Users, Smartphone, ArrowUp, ArrowDown } from "lucide-react";

const DataProcessing = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const dataSources = [
    {
      icon: Users,
      title: "Tư vấn trực tiếp",
      subtitle: "Tại các trường THPT",
      description: "Tiếp xúc trực tiếp với học sinh trong các buổi tư vấn hướng nghiệp",
      importance: "Cao"
    },
    {
      icon: Globe,
      title: "Quảng cáo trực tuyến",
      subtitle: "Fanpage, Zalo OA, TikTok, Website",
      description: "Thu thập thông tin từ các kênh số và mạng xã hội",
      importance: "Trung bình"
    },
    {
      icon: Smartphone,
      title: "Giới thiệu từ mạng lưới",
      subtitle: "Phụ huynh & sinh viên cũ",
      description: "Nguồn quan trọng nhất cho Giáo dục Mầm non",
      importance: "Rất cao"
    }
  ];

  return (
    <section id="data-processing" className="relative py-20 px-6 gradient-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
            <Database className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Xử lý dữ liệu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quản lý & Phân loại
            <br />
            <span className="text-primary">Dữ liệu học sinh</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Biến dữ liệu từ nhiều nguồn thành học sinh tiềm năng có khả năng nhập học thật
          </p>
        </div>

        {/* Data sources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Các nguồn dữ liệu chính
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dataSources.map((source, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft hover:shadow-medium hover-scale transition-smooth p-8 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Importance badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  source.importance === 'Rất cao' ? 'bg-primary text-white' :
                  source.importance === 'Cao' ? 'bg-accent text-white' :
                  'bg-muted text-foreground'
                }`}>
                  {source.importance}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <source.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {source.title}
                </h4>
                <p className="text-sm font-semibold text-primary mb-4">
                  {source.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {source.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CRM Pipeline */}
        <div className="bg-white rounded-3xl shadow-medium p-8 md:p-12 animate-fade-in hover-scale">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quy trình xử lý trên <span className="text-primary">Getfly CRM</span>
          </h3>
          
          <div className="relative">
            {/* Pipeline stages */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {[
                { label: 'Mới', color: 'bg-gray-100 text-gray-700' },
                { label: 'Kết nối', color: 'bg-blue-100 text-blue-700' },
                { label: 'Tương tác', color: 'bg-yellow-100 text-yellow-700' },
                { label: 'Nộp hồ sơ', color: 'bg-orange-100 text-orange-700' },
                { label: 'Nhập học', color: 'bg-green-100 text-green-700' }
              ].map((stage, index) => (
                <div key={index} className="flex-1">
                  <div className={`${stage.color} rounded-xl p-6 text-center font-bold shadow-soft`}>
                    <div className="text-2xl mb-2">{index + 1}</div>
                    <div className="text-sm">{stage.label}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:flex items-center justify-center mt-4">
                      <div className="w-full h-1 bg-gradient-accent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags explanation */}
            <div className="bg-gradient-section rounded-2xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                Tag Zalo & Theo dõi riêng
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Mỗi tag ứng với giai đoạn cụ thể: <span className="font-semibold">đã thi năng khiếu, chờ nhập học, ngành khác</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    Rút kinh nghiệm 2024: <span className="font-semibold">Học sinh thi xong nhưng chưa nhập học → cần theo dõi riêng</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="mt-12 relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
          <div className="relative p-8 md:p-12 text-center">
            <div className="text-5xl mb-4">🎯</div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Phân loại dữ liệu không chỉ là quản lý – đó là cách để không bỏ sót cơ hội."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('challenges')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to previous section"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('student-groups')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default DataProcessing;
