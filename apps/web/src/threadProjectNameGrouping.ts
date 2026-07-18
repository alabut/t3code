/**
 * Grouping helpers for the third sidebar tier: repository (project) →
 * project-name subfolder → session threads. Threads without a project tag
 * fall back to the shared "General" group.
 */

export const DEFAULT_PROJECT_GROUP_NAME = "General";

export interface ProjectNameGroupable {
  readonly projectName: string | null;
}

export interface ThreadProjectNameGroup<T extends ProjectNameGroupable> {
  readonly projectName: string;
  readonly isDefaultGroup: boolean;
  readonly threads: readonly T[];
}

export function resolveThreadProjectGroupName(thread: ProjectNameGroupable): string {
  const trimmed = thread.projectName?.trim() ?? "";
  return trimmed.length > 0 ? trimmed : DEFAULT_PROJECT_GROUP_NAME;
}

/**
 * Groups an already-sorted flat thread list into named project groups,
 * preserving the incoming thread order inside each group. Named groups sort
 * alphabetically; the "General" fallback group always renders last.
 */
export function groupThreadsByProjectName<T extends ProjectNameGroupable>(
  threads: readonly T[],
): ThreadProjectNameGroup<T>[] {
  const threadsByGroupName = new Map<string, T[]>();
  for (const thread of threads) {
    const groupName = resolveThreadProjectGroupName(thread);
    const existing = threadsByGroupName.get(groupName) ?? [];
    existing.push(thread);
    threadsByGroupName.set(groupName, existing);
  }
  return [...threadsByGroupName.entries()]
    .map(
      ([projectName, groupThreads]): ThreadProjectNameGroup<T> => ({
        projectName,
        isDefaultGroup: projectName === DEFAULT_PROJECT_GROUP_NAME,
        threads: groupThreads,
      }),
    )
    .sort((left, right) => {
      if (left.isDefaultGroup !== right.isDefaultGroup) {
        return left.isDefaultGroup ? 1 : -1;
      }
      return left.projectName.localeCompare(right.projectName);
    });
}

/**
 * Maps a flat thread array into `[repoPath][projectName]: Thread[]`, where
 * `repoPath` comes from the caller (typically the owning project's workspace
 * root) and `projectName` falls back to the "General" group.
 */
export function groupThreadsByRepoAndProjectName<T extends ProjectNameGroupable>(
  threads: readonly T[],
  resolveRepoPath: (thread: T) => string,
): Record<string, Record<string, T[]>> {
  const grouped: Record<string, Record<string, T[]>> = {};
  for (const thread of threads) {
    const repoPath = resolveRepoPath(thread);
    const projectName = resolveThreadProjectGroupName(thread);
    const repoGroups = (grouped[repoPath] ??= {});
    (repoGroups[projectName] ??= []).push(thread);
  }
  return grouped;
}
