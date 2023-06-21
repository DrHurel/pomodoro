import React from "react";

import logo from "../assets/logo.svg";
import settings from "../assets/icon-settings.svg";

import timeToString from "../lib/timeToString";
import { OptionMenu } from "./optionMenu";
import { themes } from "../lib/_themes";


export function Timer() {


  const canvasRef = React.useRef(null);

  const startSound = require("../assets/debut_travail.mp3");
  const endSound = require("../assets/fin_travail.mp3");

  const [time, setTime] = React.useState(2); // 2 is the initial value because the canvas is drawn with 2 * Math.PI
  const [isRunning, setIsRunning] = React.useState(false); // isRunning is used to start and stop the timer
  const [displayTime, setDisplayTime] = React.useState(15); // displayTime is the time that is displayed on the screen
  const [totalTime, setTotalTime] = React.useState(15); // totalTime is the time that is used to calculate the time that is displayed on the screen

  const [pomodoro, setPomodoro] = React.useState(25 * 60); // pomodoro is the time that is used for the pomodoro cycle
  const [shortBreak, setShortBreak] = React.useState(5 * 60); // shortBreak is the time that is used for the short break cycle
  const [longBreak, setLongBreak] = React.useState(15 * 60); // longBreak is the time that is used for the long break cycle

  const [cycle, setCycle] = React.useState(0); // cycle is used to keep track of the current cycle
  const [target, setTarget] = React.useState(-1); // target is used to keep track of the current target time (start with -1 because before the first start there is 15s of nothing)

  const targetTime = [pomodoro, shortBreak, longBreak]; // targetTime is an array that contains the target times for the pomodoro, short break and long break cycles

  const [audio, setAudio] = React.useState(true); // create in the future a way toggle the audio on and off

  const reset = () => {
    setCycle(0);
    setTarget(-1);
    setTime(2);
    setDisplayTime(15);
    setIsRunning(false);
    setTotalTime(15);

  }



  const [color, setColor] = React.useState("#F87070");








  React.useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");

    const root = document.querySelector(":root");

    themes.forEach(theme => {
      theme.sColor(setColor)
      theme.sRoot(root as HTMLElement)

    });


    let t = time;




    const render = (t) => {
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineWidth = 15;
      ctx.strokeStyle = color;

      ctx.ellipse(205, 205, 366 / 2, 366 / 2, -85 * Math.PI / 180, 0, t * Math.PI);


      ctx.stroke();
    }

    render(t);

  }, [])


  React.useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");


    let t = time;


    const render = (t) => {

      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineWidth = 15;
      ctx.strokeStyle = color;

      ctx.ellipse(205, 205, 366 / 2, 366 / 2, -85 * Math.PI / 180, 0, t * Math.PI);


      ctx.stroke();
    }





    const interval = setInterval(() => {


      if (isRunning) {


        t = t - (2 / (totalTime * 100));
        if (t < 0) {
          t = 0;
          return;
        }
        ctx?.clearRect(0, 0, 410, 410);
        render(t);
      } else {
        clearInterval(interval)
      }

    }, 10);





    return () => {

      setTime(t == 0 ? 2 : t)
      clearInterval(interval);


    }

  }, [isRunning, totalTime]);


  React.useEffect(() => {




    const interval = setInterval(() => {
      if (isRunning) {
        if (displayTime == 5 && (target == 1 || target == -1) && audio) {
          new Audio(startSound).play();
        }

        if (displayTime == 0 && target == 0 && audio) {
          new Audio(endSound).play();
        }



        if (displayTime == 0) {

          if (cycle == 8) {
            setTotalTime(targetTime[0]);
            setDisplayTime(targetTime[0]);
            setCycle(1);
            setTarget(0);
            return;
          }


          if (cycle == 7) {
            setTotalTime(targetTime[2]);
            setDisplayTime(targetTime[2]);
            setCycle(cycle + 1);
            setTarget(2);
          } else {
            setTotalTime(targetTime[(target + 1) % 2]);
            setDisplayTime(targetTime[(target + 1) % 2]);
            setCycle(cycle + 1);
            setTarget((target + 1) % 2);
          }

          clearInterval(interval);

        } else {
          setDisplayTime(displayTime - 1);
        }
      } else {
        clearInterval(interval)
      }
    }, 1000);


    return () => {
      clearInterval(interval);

    }
  }
  ), [isRunning, target]





  return <main>
    <OptionMenu setPomodoro={setPomodoro} setLongBreak={setLongBreak} setShortBreak={setShortBreak} reset={reset} />
    <header>
      <img src={logo} alt="logo" />
      <div>
        <span
          className={target == 0 ? "active" : ""}
        >pomodoro</span>
        <span
          className={target == 1 ? "active" : ""}
        >short break</span>
        <span
          className={target == 2 ? "active" : ""}
        >long break</span>
      </div>
    </header>
    <section className="timer">
      <h1>
        {
          timeToString(displayTime)
        }
      </h1>
      <canvas ref={canvasRef} width="410" height="410" />
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}

      >{
          (!isRunning ? "RESTART" : "PAUSE")
        }</button>

    </section>

    <button className="option" onClick={() => {
      document.querySelector("form")?.classList.toggle("display");
    }}>
      <img src={settings} alt="" />
    </button>
  </main>




}