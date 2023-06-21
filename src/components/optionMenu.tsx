import React from 'react';
import iconClose from '../assets/icon-close.svg';
import { themes } from '../lib/_themes';

export function OptionMenu({ setPomodoro, setShortBreak, setLongBreak, reset }) {




  const submitHandler = (e) => {

    e.preventDefault();
    const pomodoro = e.target.pomodoro.value * 60;
    const short = e.target.short.value * 60;
    const long = e.target.long.value * 60;

    themes[e.target.color.value].applyColor();
    themes[e.target.font.value].applyFont();


    setPomodoro(pomodoro);
    setShortBreak(short);
    setLongBreak(long);

    console.log(e.target.pomodoro.value)
    console.log(e.target.short.value)
    console.log(e.target.long.value)

    console.log(e.target.font.value)
    console.log(e.target.color.value)




    reset();
  }


  return <form
    onSubmit={submitHandler}
  >
    <section className="setting-title">
      <h2>
        Settings
      </h2>
      <button onClick={(e) => {
        e.preventDefault();
        document.querySelector("form")?.classList.toggle("display");

      }}>
        <img src={iconClose} alt="" />
      </button>
    </section>
    <section className="setting-time">
      <h3>
        TIME (MINUTES)
      </h3>
      <div>
        <span><label htmlFor="pomodoro">pomodoro</label>
          <input type="number" name="pomodoro" required defaultValue={25} /></span>
        <span><label htmlFor="short">short break</label>
          <input type="number" name="short" required defaultValue={5} /></span>
        <span><label htmlFor="long">long break</label>
          <input type="number" name="long" required defaultValue={15} /></span>
      </div>
    </section>
    <section className="setting-font">
      <h3>FONT</h3>
      <fieldset >

        <input type="radio" value={0} name="font" defaultChecked />
        <input type="radio" value={1} name="font" />
        <input type="radio" value={2} name="font" />
      </fieldset>
    </section>
    <div className="setting-color">
      <h3>COLOR</h3>
      <fieldset>

        <input type="radio" name="color" value={0} defaultChecked />
        <input type="radio" name="color" value={1} />
        <input type="radio" name="color" value={2} />

      </fieldset>

    </div>

    <input type="submit" value="Apply" />


  </form>

}