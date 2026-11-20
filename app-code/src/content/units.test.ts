import { describe, expect, it } from "vitest";
import type { Unit } from "./types.ts";
import { validateEnglishUnit, validateIbUnit, validateTierUnit, validateUnit } from "./validate.ts";

// Picks up every unit automatically, including ones not yet registered in a course.
const modules = import.meta.glob<Record<string, unknown>>("./courses/*/*/index.ts", { eager: true });

function isUnit(value: unknown): value is Unit {
  return typeof value === "object" && value !== null && "lessons" in value && "code" in value;
}

const units = Object.entries(modules).flatMap(([path, mod]) =>
  Object.values(mod).filter(isUnit).map((unit) => [path.replace("./courses/", ""), unit] as const),
);

// IB courses with numbered written papers: maths, Group 4 sciences and Group 3 subjects.
// Languages, arts and DP core courses have no paper tags and are covered by validateUnit alone.
const ibUnits = units.flatMap(([path, unit]) => {
  const level = /^ib-(?:a[ai]|bio|chem|phys|his|geo|econ|bus|psych)-(sl|hl)-/.exec(path)?.[1];
  return level === "sl" || level === "hl" ? [[path, unit, level] as const] : [];
});

// Edexcel maths: Years 10-11 (International GCSE) are tiered, Years 8-9 are not. Sciences are never tiered.
const edexcelUnits = units.flatMap(([path, unit]) => {
  const year = /^edx-maths-y(\d+)\//.exec(path)?.[1];
  if (year) return [[path, unit, Number(year) >= 10] as const];
  // US Grades 7-11, IB MYP, Edexcel sciences and Edexcel IAS/IAL/Primary courses are never tiered.
  return /^(edx-(science|biology|chemistry|physics|ias|ial|primary)-|us-[a-z-]+-g|myp-[a-z-]+-y)\w*\//.test(path) ? [[path, unit, false] as const] : [];
});

// Edexcel English Language and Literature, US ELA, and Cambridge English courses, every year.
const englishUnits = units.filter(([path]) =>
  /^(edx-eng(lang|lit)-y|us-ela-g)\d+\/|^cie-(primary-english|igcse-english|ls-english|o-level-english[a-z-]*|ial-english[a-z-]*)\//.test(path),
);

describe("unit content validation", () => {
  it("finds units", () => {
    expect(units.length).toBeGreaterThan(0);
  });

  it.each(units)("%s is valid", (_path, unit) => {
    expect(validateUnit(unit)).toEqual([]);
  });

  it.each(ibUnits)("%s follows IB paper rules", (_path, unit, level) => {
    expect(validateIbUnit(unit, level)).toEqual([]);
  });

  it.each(edexcelUnits)("%s follows Edexcel tier rules", (_path, unit, tiered) => {
    expect(validateTierUnit(unit, tiered)).toEqual([]);
  });

  it.each(englishUnits)("%s follows Edexcel English rules", (_path, unit) => {
    expect(validateEnglishUnit(unit)).toEqual([]);
  });
});
