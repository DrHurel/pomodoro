import React from "react";
import logo from "../assets/logo.svg";
import timeToString from "../lib/timeToString";

export function Timer() {


  const canvasRef = React.useRef(null);

  const [time, setTime] = React.useState(2);
  const [isRunning, setIsRunning] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(15);
  const [totalTime, setTotalTime] = React.useState(15);

  const [pomodoro, setPomodoro] = React.useState(25 * 60);
  const [shortBreak, setShortBreak] = React.useState(5 * 60);
  const [longBreak, setLongBreak] = React.useState(15 * 60);

  const [target, setTarget] = React.useState(0);

  const targetTime = [pomodoro, shortBreak, longBreak];


  React.useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");
    const color = (document.styleSheets[0].cssRules[0] as any).style.getPropertyValue("--primary")


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
    const color = (document.styleSheets[0].cssRules[0] as any).style.getPropertyValue("--primary")


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
          clearInterval(interval)
        }
        ctx?.clearRect(0, 0, 410, 410);
        render(t);
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
        if (displayTime == 0) {

          setTotalTime(targetTime[target]);
          setDisplayTime(targetTime[target]);
          setTarget((target + 1) % 3);
          clearInterval(interval);
        } else {
          setDisplayTime(displayTime - 1);
        }
      }
    }, 1000);


    return () => {
      clearInterval(interval);
    }
  }
  ), [isRunning, target]





  return <main>
    <header>
      <img src={logo} alt="logo" />
      <div>
        <span
          className={target == 1 ? "active" : ""}
        >pomodoro</span>
        <span
          className={target == 2 ? "active" : ""}
        >short break</span>
        <span
          className={target == 0 ? "active" : ""}
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
  </main>




}