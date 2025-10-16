import { UserPlus, MessageSquare, FileCheck, UserCheck, ArrowUp, ArrowDown } from "lucide-react";

const StudentGroups = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const groups = [
    {
      icon: UserPlus,
      name: "Mới biết trường",
      goal: "Gây thiện cảm, xin Zalo",
      approach: "Dùng giọng thân thiện, không nhắc 'tuyển sinh'",
      color: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      name: "Đang cân nhắc",
      goal: "Duy trì tương tác 2 ngày/lần",
      approach: "Xen tin nhắn hỏi thăm, động viên",
      color: "bg-yellow-500"
    },
    {
      icon: FileCheck,
      name: "Đã nộp hồ sơ",
      goal: "Củng cố niềm tin",
      approach: "Theo dõi riêng, nhắc nhẹ nhàng",
      color: "bg-orange-500"
    },
    {
      icon: UserCheck,
      name: "Được giới thiệu",
      goal: "Tận dụng niềm tin sẵn có",
      approach: "Cảm ơn và giữ mối quan hệ",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="student-groups" className="relative py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl font-black text-primary">02</span>
            <span className="text-primary font-semibold">Tư vấn & Đeo bám</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            4 nhóm học sinh
            <br />
            <span className="text-primary">& Cách tiếp cận</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giữ tương tác thường xuyên → chuyển đổi từ "biết trường" đến "nhập học"
          </p>
        </div>

        {/* Conversion funnel visual */}
        <div className="mb-16 bg-gradient-section rounded-3xl p-8 md:p-12 shadow-soft animate-fade-in hover-scale">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {['Biết trường', 'Quan tâm', 'Nộp hồ sơ', 'Nhập học'].map((stage, index) => (
              <div key={index} className="flex items-center gap-4 flex-1">
                <div className="text-center flex-1">
                  <div className={`w-20 h-20 rounded-full ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-yellow-500' :
                    index === 2 ? 'bg-orange-500' :
                    'bg-green-500'
                  } flex items-center justify-center text-white font-bold text-2xl shadow-medium`}>
                    {index + 1}
                  </div>
                  <p className="mt-3 font-semibold text-foreground">{stage}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block text-4xl text-primary">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Student groups grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-soft hover:shadow-medium hover-scale transition-smooth overflow-hidden border-2 border-transparent hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${group.color} h-2`}></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${group.color} bg-opacity-10 flex items-center justify-center`}>
                    <group.icon className={`w-7 h-7 ${group.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {group.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">
                      Mục tiêu
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {group.goal}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">
                      Cách xử lý
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {group.approach}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study */}
        <div className="bg-gradient-section rounded-3xl shadow-medium p-8 md:p-12 mb-12 animate-fade-in hover-scale">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent/10 px-6 py-3 rounded-full mb-4">
                <span className="text-accent font-bold">📝 Ví dụ thực tế</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Tin nhắn mẫu cho nhóm được giới thiệu
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  💬
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "Chào bạn! Mình được <span className="font-bold text-primary">chị A</span> giới thiệu, chị từng học <span className="font-bold">VB2 MN</span> tại trường. Được biết bạn cũng quan tâm đến ngành này nên mình nhắn để hỗ trợ bạn nhé! Bạn có thắc mắc gì cứ hỏi mình thoải mái nha 😊"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Golden rule */}
        <div className="relative overflow-hidden rounded-3xl shadow-medium animate-fade-in">
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
          <div className="relative p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">✨</div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Kinh nghiệm vàng
            </h3>
            <blockquote className="text-3xl md:text-4xl font-black text-secondary leading-relaxed">
              "Không ép – Không bỏ – Luôn hiện diện"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col gap-2">
        <button
          onClick={() => scrollToSection('data-processing')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to previous section"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
        <button
          onClick={() => scrollToSection('stories')}
          className="group p-3 bg-white shadow-medium rounded-full hover:bg-primary transition-smooth"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default StudentGroups;
