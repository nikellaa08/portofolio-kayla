/**
 * Hand-made 16x16 pixel-art avatar (RPG character portrait).
 * Each row is 16 cells; letters map to palette colors, "." is transparent.
 */
const COLORS: Record<string, string> = {
  H: "#5b3a2e", // hair
  F: "#ffdfc4", // skin
  N: "#ffdfc4", // neck (skin)
  E: "#1f1f23", // eyes
  B: "#ff9a9a", // blush
  M: "#c97b63", // mouth
  G: "#4ade80", // shirt
};

const GRID = [
  "................",
  "....HHHHHHHH....",
  "...HHHHHHHHHH...",
  "...HHHHHHHHHH...",
  "..HHHHHHHHHHHH..",
  "..HHFFFFFFFFHH..",
  "..HHFFFFFFFFHH..",
  "..HFFFFFFFFFFH..",
  "..HFEEFFFFEEFH..",
  "..HFBFFMMFFBFH..",
  "..HHFFFFFFFFHH..",
  "..HHHHHHHHHHHH..",
  ".....GGNNGG.....",
  "....GGGGGGGG....",
  "..GGGGGGGGGGGG..",
  "..GGGGGGGGGGGG..",
];

export function PixelAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art avatar"
    >
      {GRID.map((row, y) =>
        row.split("").map((cell, x) => {
          const fill = COLORS[cell];
          if (!fill) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />;
        })
      )}
    </svg>
  );
}
