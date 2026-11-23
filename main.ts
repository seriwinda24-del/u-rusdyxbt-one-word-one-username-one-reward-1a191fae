// One Word, One Username, One Reward — entry for @seriwinda24-del.
//
// The entry is Seri's own make.fun username, exactly as the bounty asks:
// one word, no explanation, no links, no pitch. The program writes that
// single username to /output/entry.txt (15 characters, UTF-8, within the
// 1-30 character gate). The output directory is the harness's /output,
// overridable for local runs through MAKEFUN_OUTPUT_DIR; the directory is
// created when missing and never deleted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "seriwinda24-del";

// Fail loudly instead of shipping an entry the gate would refuse:
// /output/entry.txt must be UTF-8 text of 1 to 30 characters, not only
// white space (the sealed scorer gives such an entry a Valid of 0).
if (USERNAME.length < 1 || USERNAME.length > 30 || USERNAME.trim().length === 0) {
  throw new Error(`username ${JSON.stringify(USERNAME)} fails the 1-30 character gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), USERNAME, "utf8");
