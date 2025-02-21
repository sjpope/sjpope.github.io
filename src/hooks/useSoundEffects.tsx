import { useCallback } from "react";

// Example assets: beep.mp3, hum.mp3 in src/assets/
export function useSoundEffects() {
  const beepSound = new Audio("/assets/beep.mp3");
  const humSound = new Audio("/assets/hum.mp3");

  const playBeep = useCallback(() => {
    beepSound.currentTime = 0;
    beepSound.play().catch(() => {});
  }, [beepSound]);

  const playHum = useCallback(() => {
    humSound.currentTime = 0;
    humSound.play().catch(() => {});
  }, [humSound]);

  return { playBeep, playHum };
}
