export function useRecorder() {
  let mediaRecorder = null;
  let audioChunks = [];
  let audioBlob = null;
  let audioUrl = "";
  let stream = null;

  const startRecording = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        audioBlob = new Blob(audioChunks, {
          type: "audio/webm"
        });

        audioUrl = URL.createObjectURL(audioBlob);
      };

      mediaRecorder.start();

      return {
        success: true,
        message: "Bắt đầu ghi âm thành công"
      };
    } catch (error) {
      return {
        success: false,
        message: "Không thể truy cập micro",
        error
      };
    }
  };

  const stopRecording = () => {
    return new Promise((resolve) => {
      if (!mediaRecorder) {
        resolve({
          success: false,
          message: "Chưa bắt đầu ghi âm"
        });

        return;
      }

      mediaRecorder.onstop = () => {
        audioBlob = new Blob(audioChunks, {
          type: "audio/webm"
        });

        audioUrl = URL.createObjectURL(audioBlob);

        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }

        resolve({
          success: true,
          message: "Ghi âm hoàn tất",
          audioBlob,
          audioUrl
        });
      };

      mediaRecorder.stop();
    });
  };

  const playRecording = () => {
    if (!audioUrl) {
      return;
    }

    const audio = new Audio(audioUrl);
    audio.play();
  };

  const resetRecording = () => {
    audioChunks = [];
    audioBlob = null;

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    audioUrl = "";
  };

  const getAudioBlob = () => {
    return audioBlob;
  };

  const getAudioUrl = () => {
    return audioUrl;
  };

  const hasRecording = () => {
    return !!audioBlob;
  };

  return {
    startRecording,
    stopRecording,
    playRecording,
    resetRecording,
    getAudioBlob,
    getAudioUrl,
    hasRecording
  };
}