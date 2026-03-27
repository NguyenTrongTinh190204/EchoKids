export function useAudio() {
  let audio = null;

  const createAudio = (src) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio = new Audio(src);

    return audio;
  };

  const playAudio = (src) => {
    return new Promise((resolve, reject) => {
      try {
        const currentAudio = createAudio(src);

        currentAudio.play();

        currentAudio.onended = () => {
          resolve(true);
        };

        currentAudio.onerror = () => {
          reject(false);
        };
      } catch (error) {
        reject(error);
      }
    });
  };

  const pauseAudio = () => {
    if (!audio) {
      return;
    }

    audio.pause();
  };

  const resumeAudio = () => {
    if (!audio) {
      return;
    }

    audio.play();
  };

  const stopAudio = () => {
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  };

  const setVolume = (volume) => {
    if (!audio) {
      return;
    }

    audio.volume = volume;
  };

  const setPlaybackRate = (rate) => {
    if (!audio) {
      return;
    }

    audio.playbackRate = rate;
  };

  const getCurrentTime = () => {
    if (!audio) {
      return 0;
    }

    return audio.currentTime;
  };

  const getDuration = () => {
    if (!audio) {
      return 0;
    }

    return audio.duration;
  };

  const isPlaying = () => {
    if (!audio) {
      return false;
    }

    return !audio.paused;
  };

  return {
    playAudio,
    pauseAudio,
    resumeAudio,
    stopAudio,
    setVolume,
    setPlaybackRate,
    getCurrentTime,
    getDuration,
    isPlaying
  };
}