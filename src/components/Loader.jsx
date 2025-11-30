import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0.75rem",
        textAlign: "center",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: "0.85rem",
          lineHeight: 1.4,
          color: "#F1F1F1",
          fontWeight: 700,
          marginTop: "1.5rem",
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          minWidth: "4rem",
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
