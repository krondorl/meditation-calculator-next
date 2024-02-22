/*!
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

"use client";
import { useCallback, useState } from "react";
import Image from "next/image";

interface QuickTotalMeditationResponse {
  totalMeditation: number;
  error: string;
}

export default function Home() {
  const hostUrl = "http://localhost:3000";

  const [dailyTime, setDailyTime] = useState<number>(15);
  const [practiceYears, setPracticeYears] = useState<number>(1);
  const [quickTotal, setQuickTotal] = useState<number>(0);
  const [quickError, setQuickError] = useState<string>("");

  const handleDailyTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      setDailyTime(parseInt(e.target.value));
    },
    []
  );

  const handlePracticeYearsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      let years = parseInt(e.target.value) || "";
      setPracticeYears(years as number);
    },
    []
  );

  const getQuickTotal = useCallback((): void => {
    setQuickError("");
    fetch(
      `${hostUrl}/api/meditation?dailytime=${dailyTime}&practiceyears=${practiceYears}`
    )
      .then((res) => res.json())
      .then((quickTotalMeditation: QuickTotalMeditationResponse) => {
        if (quickTotalMeditation && quickTotalMeditation.totalMeditation) {
          setQuickTotal(quickTotalMeditation.totalMeditation);
        }
        if (quickTotalMeditation && quickTotalMeditation.error) {
          setQuickError(quickTotalMeditation.error);
        }
      });
  }, [dailyTime, practiceYears]);

  return (
    <div className="wrapper">
      <header className="header">
        <Image src="/mudra.png" width={64} height={64} alt="" />
      </header>
      <main className="main">
        <h1 className="text-4xl bg-indigo-500 p-3 text-white">
          Meditation Calculator
        </h1>
        <p className="mt-2 mb-2">Calculate your total practice time!</p>
        <form className="">
          <fieldset className="border border-solid border-gray-300 p-4">
            <legend>Quick mode</legend>
            <section>
              <div className="form-row">
                <label className="" htmlFor="">
                  Daily time
                </label>
              </div>
              <div className="form-row">
                <select
                  className="border-solid border border-black p-1"
                  name=""
                  id=""
                  onChange={handleDailyTimeChange}
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90 minutes</option>
                  <option value="120">120 minutes</option>
                </select>
              </div>
              <div className="form-row">
                <label className="" htmlFor="">
                  Years of practice
                </label>
              </div>
              <div className="form-row">
                <input
                  onChange={handlePracticeYearsChange}
                  className="border-solid border border-black p-1"
                  type="number"
                  name=""
                  id=""
                  value={practiceYears}
                />
              </div>
              <div className="form-row">
                <button
                  className="bg-indigo-500 p-3 text-white"
                  type="button"
                  onClick={getQuickTotal}
                >
                  Calculate
                </button>
              </div>
              <div className="form-row">
                <p>
                  <strong>Total meditation practice:</strong>{" "}
                  <span>{quickTotal}</span> hours
                </p>
                <p>
                  <span>{quickError}</span>
                </p>
              </div>
            </section>
          </fieldset>
        </form>
      </main>
      <footer>
        <p className="pt-2">
          <a
            className="border-dashed border-b border-black"
            href="https://www.flaticon.com/free-icons/mudra"
            title="mudra icons"
          >
            Mudra icons created by Freepik - Flaticon
          </a>
        </p>
      </footer>
    </div>
  );
}
