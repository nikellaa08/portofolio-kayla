/**
 * Generates a minimal, valid single-page PDF CV at public/cv.pdf.
 * Uses the built-in Helvetica font (no embedding needed).
 *
 * Run with: node scripts/generate-cv.mjs
 * The user can replace public/cv.pdf with their real CV anytime.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "cv.pdf");

const lines = [
  { text: "RATU BALQIS KAYLA LUTFIAN HABILAH", size: 18 },
  { text: "Software Engineering & IT (Rekayasa Perangkat Lunak)", size: 11 },
  { text: "", size: 11 },
  { text: "PROFILE", size: 13 },
  { text: "Software Engineering student focused on web development, system logic,", size: 10 },
  { text: "and database management. Detail-oriented, strong communicator.", size: 10 },
  { text: "", size: 10 },
  { text: "CONTACT", size: 13 },
  { text: "Email:     nikellaa08@gmail.com", size: 10 },
  { text: "LinkedIn:  linkedin.com/in/kayla-l-8b276b424", size: 10 },
  { text: "WhatsApp:  +62 857-7122-0340", size: 10 },
  { text: "GitHub:    github.com/nikellaa08", size: 10 },
  { text: "", size: 10 },
  { text: "EDUCATION", size: 13 },
  { text: "SMK Jakarta Pusat 1 (2024-2027) - Rekayasa Perangkat Lunak", size: 10 },
  { text: "SMP Negeri 88 Jakarta (2021-2024)", size: 10 },
  { text: "", size: 10 },
  { text: "SKILLS", size: 13 },
  { text: "Programming & Web: PHP, JavaScript, Node.js, Next.js, Tailwind CSS, MySQL", size: 10 },
  { text: "Tools: Git, GitHub, VS Code, Word, Excel, Google Spreadsheet, Illustrator,", size: 10 },
  { text: "       Canva, CapCut", size: 10 },
  { text: "AI: OpenAI, Gemini, Freebuf, Qwen, Codex", size: 10 },
  { text: "", size: 10 },
  { text: "PROJECTS", size: 13 },
  { text: "Quote of the Day App - Web Development & Data Maintenance", size: 10 },
  { text: "E-Commerce Customer Support & Inventory (Lumiere)", size: 10 },
  { text: "Digital Library Database Management", size: 10 },
];

const escape = (s) =>
  s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const ops = ["BT"];
let y = 758;
for (const { text, size } of lines) {
  if (text === "") {
    y -= 18;
    continue;
  }
  ops.push(`/F1 ${size} Tf`);
  ops.push(`1 0 0 1 72 ${y} Tm`);
  ops.push(`(${escape(text)}) Tj`);
  y -= size >= 16 ? 36 : size >= 12 ? 28 : 21;
}
ops.push("ET");

const content = ops.join("\n");
const stream = `stream\n${content}\nendstream`;

const objects = [
  null,
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content + "\n", "latin1")} >>\n${stream}`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (let i = 1; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}

const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += "xref\n0 6\n";
pdf += "0000000000 65535 f \n";
for (let i = 1; i < 6; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, pdf, "latin1");
console.log(`CV PDF generated: ${outPath} (${pdf.length} bytes)`);
