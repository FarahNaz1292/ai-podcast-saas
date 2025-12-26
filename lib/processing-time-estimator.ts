/**
 * Estimate transcription time for AssemblyAI based on audio duration.
 * Based on real AssemblyAI data:
 * - Best case RTF: 0.008× (1 hour in ~29 seconds)
 * - Conservative RTF: 0.25× (10 minutes in ~2.5 minutes)
 */
export function estimateAssemblyAITime(durationSeconds?: number) {
  if (!durationSeconds) {
    durationSeconds = 1800; // Fallback: 30 min
  }

  const bestCaseSeconds = Math.round(durationSeconds * 0.008);
  const conservativeSeconds = Math.round(durationSeconds * 0.25);

  return {
    bestCase: Math.max(30, bestCaseSeconds),
    conservative: Math.max(60, conservativeSeconds),
    average: Math.round(
      (Math.max(30, bestCaseSeconds) + Math.max(60, conservativeSeconds)) / 2,
    ),
  };
}

/**
 * Format seconds into a human-readable time estimate
 */
export function formatTimeEstimate(seconds: number): string {
  const ceiledSeconds = Math.ceil(seconds);
  if (seconds < 60) {
    return `${ceiledSeconds} second${ceiledSeconds === 1 ? '' : 's'}`;
  }
  const minutes = Math.ceil(seconds / 60);
  if (seconds < 3600) {
    return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  }
  const hours = Math.ceil(seconds / 3600);
  return `${hours} hour${hours === 1 ? '' : 's'}`;
}

/**
 * Format a time range for display
 */
export function formatTimeRange(
  bestCase: number,
  conservative: number,
): string {
  return `${formatTimeEstimate(bestCase)} - ${formatTimeEstimate(
    conservative,
  )}`;
}