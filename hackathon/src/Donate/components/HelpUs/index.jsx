import classes from './HelpUs.module.css';
import HelpUsTitle from './HelpUsTitle';

const HelpUs = () => {
  return (
    <section className={classes.HelpUs}>
      <HelpUsTitle />
      <p className={classes.HelpUsParagraph}>
        We'll get right to the point:<br></br><br></br>We want you donate your old and used books so that we can distribute them among many NGO's
      </p>
    </section>
  );
};

export default HelpUs;
