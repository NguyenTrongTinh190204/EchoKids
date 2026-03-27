export function useAI() {
  // phân tích phát âm giả lập
  const analyzePronunciation = (audioBlob, expectedWord = "") => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const score = Math.floor(Math.random() * 41) + 60;

        let pronunciationLevel = "Tốt";
        let feedback = "Bé phát âm khá tốt, hãy tiếp tục nhé.";
        let weakSound = "";
        let weakPart = "";

        if (score < 70) {
          pronunciationLevel = "Cần cải thiện";
          feedback = "Bé cần phát âm chậm và rõ hơn.";
          weakSound = "Âm đầu";
          weakPart = "Âm L/N";
        } else if (score < 85) {
          pronunciationLevel = "Trung bình";
          feedback = "Bé phát âm tương đối tốt nhưng cần luyện thêm.";
          weakSound = "Vần";
          weakPart = "Âm S/X";
        }

        resolve({
          success: true,
          word: expectedWord,
          score,
          pronunciationLevel,
          feedback,
          weakSound,
          weakPart,
          initialSoundScore: Math.max(score - 10, 0),
          rhymeScore: Math.max(score - 5, 0),
          toneScore: score,
          suggestedLessons: getSuggestedLessons(weakPart)
        });
      }, 1500);
    });
  };

  // lấy gợi ý bài học theo lỗi phát âm
  const getSuggestedLessons = (weakPart) => {
    const lessons = {
      "Âm L/N": [
        {
          id: 1,
          title: "Luyện âm L cơ bản"
        },
        {
          id: 2,
          title: "Phân biệt âm L và N"
        }
      ],

      "Âm S/X": [
        {
          id: 3,
          title: "Luyện âm S"
        },
        {
          id: 4,
          title: "Phân biệt âm S và X"
        }
      ],

      default: [
        {
          id: 5,
          title: "Luyện phát âm cơ bản"
        }
      ]
    };

    return lessons[weakPart] || lessons.default;
  };

  // tạo phản hồi tích cực cho trẻ
  const generatePositiveFeedback = (score) => {
    if (score >= 90) {
      return "Rất giỏi! Bé phát âm rất rõ ràng.";
    }

    if (score >= 75) {
      return "Làm tốt lắm! Bé đang tiến bộ rất nhiều.";
    }

    if (score >= 60) {
      return "Cố gắng thêm nhé! Bé đã làm rất tốt rồi.";
    }

    return "Không sao đâu, hãy thử lại một lần nữa nhé.";
  };

  // gợi ý độ khó tiếp theo
  const suggestNextDifficulty = (score) => {
    if (score >= 90) {
      return "Khó";
    }

    if (score >= 70) {
      return "Trung bình";
    }

    return "Dễ";
  };

  // giả lập nhận diện lỗi phát âm
  const detectPronunciationError = (score) => {
    if (score >= 85) {
      return {
        type: "Không có lỗi lớn",
        detail: "Phát âm tương đối chuẩn"
      };
    }

    if (score >= 70) {
      return {
        type: "Lỗi vần",
        detail: "Cần phát âm rõ phần cuối của từ"
      };
    }

    return {
      type: "Lỗi âm đầu",
      detail: "Cần chú ý phát âm âm đầu chính xác hơn"
    };
  };

  return {
    analyzePronunciation,
    getSuggestedLessons,
    generatePositiveFeedback,
    suggestNextDifficulty,
    detectPronunciationError
  };
}