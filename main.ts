// One line of error copy: the specific failure, said plainly.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deploy succeeded. Production is still serving yesterday's bundle because the CDN cached index.html for a year.";

const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim() === "") {
  throw new Error(`invalid entry: ${length} characters`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
