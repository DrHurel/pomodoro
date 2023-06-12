import React from 'react';
import iconClose from '../assets/icon-close.svg';

export function OptionMenu({ setPomodoro, setShortBreak, setLongBreak }) {

  const submitHandler = (e) => {

    e.preventDefault();
    const pomodoro = e.target.pomodoro.value * 60;
    const short = e.target.short.value * 60;
    const long = e.target.long.value * 60;

    setPomodoro(pomodoro);
    setShortBreak(short);
    setLongBreak(long);

  }


  return <form
    onSubmit={submitHandler}
  >
    <section className="setting-title">
      <h2>
        Settings
      </h2>
      <button onClick={() => {
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
      <div>
        <input type="button" value="Aa" /><input type="button" value="Aa" /><input type="button" value="Aa" />
      </div>
    </section>
    <div className="setting-color">
      <h3>COLOR</h3>
      <div>
        <input type="button" value="Aa" /><input type="button" value="Aa" /><input type="button" value="Aa" />
      </div>

    </div>

    <input type="submit" value="Apply" />


  </form>

}