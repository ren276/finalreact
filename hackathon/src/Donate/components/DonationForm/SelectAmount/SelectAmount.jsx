import classes from './SelectAmount.module.css';

const SelectAmount = () => {
  return (
    <div className={classes.SelectAmount}>
      <header className={classes.Title}>
        <h4>Select the Amount of Books</h4>
      </header>
      <fieldset className={classes.Amounts}>
        <div className={classes.RadioWrapper}>
          <input
            defaultChecked
            className={classes.Radio}
            type='radio'
            name='amount'
            id='10'
          />
          <label htmlFor='10'>1</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='20' />
          <label htmlFor='20'>2</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='30' />
          <label htmlFor='30'>3</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='40' />
          <label htmlFor='40'>4</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type='radio'
            name='amount'
            id='other'
          />
          <label htmlFor='other'>4+</label>
        </div>
      </fieldset>
    </div>
  );
};

export default SelectAmount;
