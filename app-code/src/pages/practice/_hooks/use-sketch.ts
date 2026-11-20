import { useCallback, useEffect, useState } from "react";
import type { Point, Stroke } from "../_lib/sketch.ts";
import { hitsStroke } from "../_lib/sketch.ts";

export const DEFAULT_WORKSPACE = 360;
const WORKSPACE_STEP = 280;
const MAX_WORKSPACE = 2400;
const MAX_HISTORY = 100;

type Saved = { strokes: Stroke[]; workspace: number };
type History = { past: Stroke[][]; present: Stroke[]; future: Stroke[][] };

function load(key: string): Saved {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Saved>;
      return { strokes: Array.isArray(parsed.strokes) ? parsed.strokes : [], workspace: parsed.workspace ?? DEFAULT_WORKSPACE };
    }
  } catch {
    // Corrupt or unavailable storage: start fresh.
  }
  return { strokes: [], workspace: DEFAULT_WORKSPACE };
}

/** Annotation state for one question: strokes with undo/redo, plus workspace height. Saved on this device. */
export function useSketch(questionId: string) {
  const key = `ariela:sketch:${questionId}`;
  const [initial] = useState(() => load(key));
  const [history, setHistory] = useState<History>({ past: [], present: initial.strokes, future: [] });
  const [workspace, setWorkspace] = useState(initial.workspace);

  // Persist to localStorage (an external system), so annotations survive a page refresh.
  useEffect(() => {
    try {
      if (history.present.length === 0 && workspace === DEFAULT_WORKSPACE) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify({ strokes: history.present, workspace } satisfies Saved));
    } catch {
      // Storage full or blocked; annotations still work for this session.
    }
  }, [key, history.present, workspace]);

  const commit = useCallback((next: (present: Stroke[]) => Stroke[]) => {
    setHistory((h) => {
      const present = next(h.present);
      if (present === h.present) return h;
      return { past: [...h.past, h.present].slice(-MAX_HISTORY), present, future: [] };
    });
  }, []);

  const addStroke = useCallback((stroke: Stroke) => commit((s) => [...s, stroke]), [commit]);

  /** Erase every stroke touched along the eraser path, as a single undoable step. */
  const eraseAlong = useCallback((path: Point[], radius: number) => {
    commit((s) => {
      const kept = s.filter((stroke) => !path.some((p) => hitsStroke(stroke, p, radius)));
      return kept.length === s.length ? s : kept;
    });
  }, [commit]);

  const undo = useCallback(() => setHistory((h) => {
    const prev = h.past[h.past.length - 1];
    return prev ? { past: h.past.slice(0, -1), present: prev, future: [h.present, ...h.future] } : h;
  }), []);

  const redo = useCallback(() => setHistory((h) => {
    const [next, ...future] = h.future;
    return next ? { past: [...h.past, h.present], present: next, future } : h;
  }), []);

  const clear = useCallback(() => commit((s) => (s.length ? [] : s)), [commit]);

  return {
    strokes: history.present,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    addStroke,
    eraseAlong,
    undo,
    redo,
    clear,
    workspace,
    canExtend: workspace < MAX_WORKSPACE,
    extendWorkspace: () => setWorkspace((w) => Math.min(MAX_WORKSPACE, w + WORKSPACE_STEP)),
  };
}

export type SketchState = ReturnType<typeof useSketch>;
