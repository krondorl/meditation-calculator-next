/*!
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import { NextRequest, NextResponse } from "next/server";
import { calculateMeditationQuickMode } from "./main";

export async function GET(request: NextRequest) {
  const _dailyTime = request.nextUrl.searchParams.get("dailytime");
  const _practiceYears = request.nextUrl.searchParams.get("practiceyears");

  if (_dailyTime && _practiceYears) {
    let dailyTime = parseInt(_dailyTime);
    let practiceYears = parseInt(_practiceYears);

    if (dailyTime > 0 && practiceYears > 0) {
      return NextResponse.json({
        totalMeditation: calculateMeditationQuickMode(dailyTime, practiceYears),
      });
    }
  } else {
    return NextResponse.json({ error: "Error: Wrong parameters" });
  }
}
