import { BookOpen, Lightbulb } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      emoji: "👀",
      title: "Học sinh 'xem – không rep'",
      situation: "Một học sinh luôn xem tin nhắn nhưng không bao giờ phản hồi",
      approach: [
        "Đeo bám mềm mại, không gây áp lực",
        "Gửi nội dung có giá trị: thông tin học bổng, câu chuyện sinh viên",
        "Tạo lòng tin qua sự kiên trì và chân thành"
      ],
      result: "Sau 2 tháng, bạn đã nhập học và vẫn giữ liên lạc tốt",
      lesson: "Kiên trì và khéo léo – vì học sinh không từ chối, chỉ là chưa sẵn sàng",
      color: "border-blue-500"
    },
    {
      emoji: "❓",
      title: "Câu hỏi khó: 'Trường tư có đảm bảo việc làm không?'",
      situation: "Câu hỏi đặt ra nhiều áp lực và cần trả lời thận trọng",
      approach: [
        "Không hứa suông hay nói quá lời",
        "Giải thích rõ về chương trình đào tạo thực tế",
        "Nhấn mạnh việc làm phụ thuộc vào năng lực cá nhân",
        "Chia sẻ câu chuyện thành công của sinh viên cũ"
      ],
      result: "Học sinh hiểu rõ hơn và tin tưởng vào sự trung thực",
      lesson: "Chân thành, tự tin và trung thực là chìa khóa thuyết phục",
      color: "border-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6 gradient-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Câu chuyện thực tế</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Những câu chuyện
            <br />
            <span className="text-primary">Dở khóc dở cười</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những trải nghiệm thật từ người làm tuyển sinh
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-soft hover:shadow-medium transition-smooth overflow-hidden border-l-8 ${story.color}`}
            >
              <div className="p-8 md:p-12">
                {/* Story header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center text-4xl shadow-medium">
                    {story.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg mb-3">
                      <span className="text-primary font-bold">Câu chuyện {index + 1}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {story.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {story.situation}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Approach */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold">✓</span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">
                        Cách xử lý
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {story.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <p className="text-foreground leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result & Lesson */}
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <h4 className="text-lg font-bold text-green-700">
                          Kết quả
                        </h4>
                      </div>
                      <p className="text-green-700 leading-relaxed">
                        {story.result}
                      </p>
                    </div>

                    <div className="bg-gradient-section rounded-2xl p-6 border-2 border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-6 h-6 text-primary" />
                        <h4 className="text-lg font-bold text-primary">
                          Bài học
                        </h4>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed italic">
                        "{story.lesson}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional reflection */}
        <div className="mt-12 relative overflow-hidden rounded-3xl shadow-medium">
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
          <div className="relative p-8 md:p-12 text-center">
            <div className="text-5xl mb-4">💭</div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "Mỗi câu chuyện là một bài học, mỗi thử thách là cơ hội để trưởng thành hơn trong nghề tuyển sinh"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
