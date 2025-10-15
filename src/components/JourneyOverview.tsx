import { Sprout, Heart, CheckCircle } from "lucide-react";

const JourneyOverview = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Gieo niềm tin",
      description: "Tạo ấn tượng đầu tiên và kết nối với học sinh",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Nuôi dưỡng mối quan hệ",
      description: "Duy trì tương tác và xây dựng lòng tin",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "Chốt nhập học",
      description: "Thu về thành quả - hồ sơ nhập học",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hành trình <span className="text-primary">"Chốt"</span> sinh viên
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Để có được một bộ hồ sơ nhập học là cả một hành trình dài
          </p>
        </div>

        {/* Funnel visualization */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  width: `${100 - index * 15}%`,
                  margin: '0 auto'
                }}
              >
                <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-smooth">
                  <div className="flex items-center gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${step.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-3xl font-bold ${step.color}`}>
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0.5 h-6 bg-gradient-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <div className="bg-white rounded-3xl shadow-medium p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-accent/10 px-6 py-3 rounded-full mb-6">
              <span className="text-accent font-bold text-lg">💡 Điểm mấu chốt</span>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
              Mỗi giai đoạn đều quan trọng và cần được <span className="text-primary">chăm sóc tỉ mỉ</span> để học sinh cảm nhận được sự <span className="text-accent">chân thành</span> và <span className="text-secondary">tận tâm</span> của chúng ta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyOverview;
