/*!
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

export function roundToTwoDecimals(n: number): number {
  return Math.round(n * 100) / 100;
}

export function calculateMeditationQuickMode(
  dailyTime: number,
  practiceYears: number
): number {
  if (dailyTime > 0 && practiceYears > 0) {
    return roundToTwoDecimals((dailyTime * 365 * practiceYears) / 60);
  }
  return 0;
}
