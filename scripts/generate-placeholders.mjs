/**
 * Generates PNG placeholder images into public/images/:
 *   - profile.png      (hero profile photo placeholder)
 *   - quote-1..3.png   (Quote of the Day App gallery)
 *   - kuis-1..2.png    (Interactive Quiz gallery)
 *   - absensi-1..2.png (Student Attendance System gallery)
 *
 * The user can replace these files with real images anytime
 * (keep the same filenames so the paths in src/lib/content.ts still work).
 *
 * Run with: node scripts/generate-placeholders.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

/* ---------------- PNG encoding ---------------- */

const CRC_TABLE = new Int32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  CRC_TABLE[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(width, height, pixels) {
  const stride = width * 4;
  const raw = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    Buffer.from(pixels.buffer, y * stride, stride).copy(raw, y * (stride + 1) + 1);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type: RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ---------------- tiny canvas ---------------- */

function createCanvas(width, height, bg) {
  const px = new Uint8Array(width * height * 4);
  for (let i = 0; i < px.length; i += 4) {
    px[i] = bg[0];
    px[i + 1] = bg[1];
    px[i + 2] = bg[2];
    px[i + 3] = bg.length > 3 ? bg[3] : 255;
  }
  const setPx = (x, y, color) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = (y * width + x) * 4;
    px[i] = color[0];
    px[i + 1] = color[1];
    px[i + 2] = color[2];
    px[i + 3] = color.length > 3 ? color[3] : 255;
  };
  const fill = (x, y, w, h, color) => {
    for (let yy = y; yy < y + h; yy++) for (let xx = x; xx < x + w; xx++) setPx(xx, yy, color);
  };
  const stroke = (x, y, w, h, t, color) => {
    fill(x, y, w, t, color);
    fill(x, y + h - t, w, t, color);
    fill(x, y, t, h, color);
    fill(x + w - t, y, t, h, color);
  };
  return {
    fill,
    stroke,
    write: (name) => writeFileSync(join(outDir, name), encodePng(width, height, px)),
  };
}

/* ---------------- palette ---------------- */

const INK = [24, 24, 27];
const CREAM = [246, 237, 218];
const RED = [248, 113, 113];
const GREEN = [74, 222, 128];
const YELLOW = [250, 204, 21];
const BLUE = [96, 165, 250];
const ROW_ALT = [233, 222, 198];

/* ---------------- profile placeholder ---------------- */

{
  const profile = createCanvas(300, 300, CREAM);
  profile.stroke(8, 8, 284, 284, 8, INK);
  // pixel heart
  const heart = [
    [110, 120], [130, 120], [170, 120], [190, 120],
    [90, 140], [110, 140], [130, 140], [150, 140], [170, 140], [190, 140], [210, 140],
    [110, 160], [130, 160], [150, 160], [170, 160], [190, 160],
    [130, 180], [150, 180], [170, 180],
    [150, 200],
  ];
  for (const [x, y] of heart) profile.fill(x, y, 20, 20, RED);
  profile.write("profile.png");
}

/* ---------------- screenshot placeholders ---------------- */

function screenshot(bg, sidebar, button, variant) {
  const c = createCanvas(640, 360, bg);
  c.stroke(10, 10, 620, 340, 10, INK);
  c.fill(30, 30, 580, 26, INK); // title bar

  if (variant === 0) {
    // list / dashboard layout
    c.fill(30, 76, 150, 264, sidebar);
    c.fill(200, 76, 410, 22, CREAM);
    c.fill(200, 116, 410, 22, CREAM);
    c.fill(200, 156, 410, 22, CREAM);
    c.fill(200, 250, 240, 44, button);
  } else if (variant === 1) {
    // centered card / form layout
    c.fill(120, 84, 400, 160, CREAM);
    c.stroke(120, 84, 400, 160, 6, INK);
    c.fill(150, 116, 340, 14, INK);
    c.fill(150, 146, 280, 14, INK);
    c.fill(150, 196, 150, 32, button);
  } else {
    // table layout
    c.fill(30, 76, 580, 26, INK);
    for (let i = 0; i < 5; i++) {
      c.fill(30, 112 + i * 34, 580, 24, i % 2 === 0 ? CREAM : ROW_ALT);
    }
    c.fill(440, 312, 140, 22, button);
  }
  return c;
}

screenshot(GREEN, YELLOW, BLUE, 0).write("quote-1.png");
screenshot(GREEN, YELLOW, BLUE, 1).write("quote-2.png");
screenshot(GREEN, YELLOW, BLUE, 2).write("quote-3.png");

screenshot(YELLOW, RED, GREEN, 0).write("kuis-1.png");
screenshot(YELLOW, RED, GREEN, 1).write("kuis-2.png");

screenshot(BLUE, YELLOW, RED, 2).write("absensi-1.png");
screenshot(BLUE, YELLOW, RED, 0).write("absensi-2.png");

console.log(`Placeholder images generated in ${outDir}`);
