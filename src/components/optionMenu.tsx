import React from 'react';


export function OptionMenu() {

  return <form action="">
    <div>
      <h2>
        Settings
      </h2>
      <button>
        close
      </button>
    </div>
    <div>
      <h3>
        Time (minutes)
      </h3>
      <div>
        <label htmlFor="pomodoro">pomodoro</label><input type="number" name="pomodoro" /><label htmlFor="short">short break</label><input type="number" name="short" /><label htmlFor="long">long break</label><input type="number" name="long" />
      </div>
    </div>
    <div>
      <h3>Font</h3>
      <div>
        <input type="button" value="" /><input type="button" value="" /><input type="button" value="" />
      </div>
    </div>
    <div>
      <h3>Color</h3>
      <div>
        <input type="button" value="Aa" /><input type="button" value="Aa" /><input type="button" value="Aa" />
      </div>

    </div>

    <input type="submit" value="Apply" />


  </form>

}