import classes from './Agreement.module.css';

const Agreement = () => {
  return (
    <fieldset className={classes.Agreement}>
      <input
        className={classes.CheckBox}
        type='checkbox'
        id='agreement-checkbox'
      />
      <label htmlFor='agreement-checkbox'>
        I PLEDGE TO DONATE THESE BOOKS TO WIN A SMILE !
      </label>
    </fieldset>
  );
};

export default Agreement;
