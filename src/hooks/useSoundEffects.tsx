import { useCallback, useState } from "react";

export function useSoundEffects() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  // const beepSound = new Audio("/assets/beep.mp3");
  // const ambiance = new Audio("/assets/ambient_hum.mp3");
  // ambiance.loop = true;

  const enableAudio = useCallback(() => {
    setAudioEnabled(true);
    // ambiance.play().catch(() => {});
  }, []);

  const playBeep = useCallback(() => {
    if (!audioEnabled) return;
    // beepSound.currentTime = 0;
    // beepSound.play().catch(() => {});
  }, [audioEnabled]);

  return { audioEnabled, enableAudio, playBeep };
}
