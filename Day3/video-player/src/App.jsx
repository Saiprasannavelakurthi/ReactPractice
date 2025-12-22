import { useRef } from "react";

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
        <button onClick={rewindVideo}>⏪ Rewind</button>
      </div>
    </div>
  );
}

export default App;
