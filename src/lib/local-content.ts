import snapshot from "@/content/edupage-snapshot.json";

export type LocalModuleContent = {
  title: string;
  lines: string[];
  line_count: number;
};

type SnapshotModules = typeof snapshot.modules;

export function getLocalModuleContent(slug: string): LocalModuleContent | null {
  const key = slug as keyof SnapshotModules;
  return snapshot.modules[key] ?? null;
}

export function getSnapshotImportedAt() {
  return snapshot.imported_at;
}
