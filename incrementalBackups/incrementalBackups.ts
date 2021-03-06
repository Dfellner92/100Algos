export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const backupIDs: number[] = [];
  const arr = changes.filter((change) => change[0] > lastBackupTime);
  arr.forEach(
    (change) => !backupIDs.includes(change[1]) && backupIDs.push(change[1])
  );
  return backupIDs;
}

console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]]));
