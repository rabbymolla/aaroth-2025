"use client";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const FlashCounterPart = () => {
  const startTime = Date.now() / 1000;
  const endTime = startTime + 243248; // Adjust as needed

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 80,
    strokeWidth: 6,
  };

  const renderTime = (dimension, time) => (
    <div>
      <div className="font-Roboto text-xl lg:text-2xl font-bold text-white_color">
        {time}
      </div>
      <div className="font-Roboto font-bold text-sm lg:text-xl text-white_color mb-2">
        {dimension}
      </div>
    </div>
  );

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="text-center">
      <h1 className="font-Roboto font-bold text-white_color text-xl mb-10 lg:mb-0">
        Flash Sale
      </h1>
      <p className="font-Roboto font-normal text-white_color leading-7 text-sm mt-3 mb-10 hidden lg:block">
        Hurry up! Limited time offer. Don’t miss out on amazing deals!
      </p>

      <div className="flex flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 w-full sm:w-auto items-center justify-center gap-x-10 lg:gap-x-20">
        <CountdownCircleTimer
          {...timerProps}
          colors="#000"
          size={20}
          //trailColor="transparent"
          strokeWidth={0}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Days", getTimeDays(daysDuration - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>

        <CountdownCircleTimer
          {...timerProps}
          colors="#17479e"
          trailColor="transparent"
          size={20}
          strokeWidth={0}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Hours", getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>

        <CountdownCircleTimer
          {...timerProps}
          colors="#17479e"
          trailColor="transparent"
          size={20}
          strokeWidth={0}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Minutes", getTimeMinutes(hourSeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>

        <CountdownCircleTimer
          {...timerProps}
          colors="#17479e"
          trailColor="transparent"
          size={20}
          strokeWidth={0}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Seconds", getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default FlashCounterPart;
