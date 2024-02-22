/*!
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import { expect, test } from "vitest";
import { roundToTwoDecimals, calculateMeditationQuickMode } from "./main";

test("rounds to two decimals", () => {
  const unroundedNumber = 113.5744;
  const roundedNumber = 113.57;

  expect(roundToTwoDecimals(unroundedNumber)).toBe(roundedNumber);
});

test("calculate meditation in quick mode", () => {
  const dailyTime = 15;
  const practiceYears = 1;
  const expectedMeditationTime = 91.25;

  expect(calculateMeditationQuickMode(dailyTime, practiceYears)).toBe(
    expectedMeditationTime
  );
});
