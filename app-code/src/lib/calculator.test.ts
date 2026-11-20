import { describe, expect, it } from "vitest";
import { evaluate, formatResult } from "./calculator.ts";

describe("evaluate", () => {
  it("respects precedence and associativity", () => {
    expect(evaluate("2+3*4")).toBe(14);
    expect(evaluate("(2+3)*4")).toBe(20);
    expect(evaluate("2^3^2")).toBe(512);
    expect(evaluate("-2^2")).toBe(-4);
    expect(evaluate("10-4-3")).toBe(3);
    expect(evaluate("12/3/2")).toBe(2);
  });

  it("supports implicit multiplication and constants", () => {
    expect(evaluate("2pi")).toBeCloseTo(2 * Math.PI);
    expect(evaluate("3(4+1)")).toBe(15);
    expect(evaluate("(2)(3)")).toBe(6);
    expect(evaluate("\u03c0 \u00d7 2")).toBeCloseTo(2 * Math.PI);
  });

  it("uses degree or radian mode for trig", () => {
    expect(evaluate("sin(30)", "deg")).toBeCloseTo(0.5);
    expect(evaluate("cos(pi)", "rad")).toBeCloseTo(-1);
    expect(evaluate("atan(1)", "deg")).toBeCloseTo(45);
  });

  it("handles roots, logs, factorial and ans", () => {
    expect(evaluate("sqrt(16)+\u221a9")).toBe(7);
    expect(evaluate("log(1000)")).toBeCloseTo(3);
    expect(evaluate("ln(e)")).toBeCloseTo(1);
    expect(evaluate("5!")).toBe(120);
    expect(evaluate("ans*2", "deg", 21)).toBe(42);
  });

  it("rejects invalid input", () => {
    expect(() => evaluate("")).toThrow();
    expect(() => evaluate("2+")).toThrow();
    expect(() => evaluate("(2")).toThrow();
    expect(() => evaluate("1/0")).toThrow();
    expect(() => evaluate("foo(2)")).toThrow();
    expect(() => evaluate("2.5!")).toThrow();
  });
});

describe("formatResult", () => {
  it("trims floating point noise", () => {
    expect(formatResult(0.1 + 0.2)).toBe("0.3");
    expect(formatResult(1e-15)).toBe("0");
  });
});
