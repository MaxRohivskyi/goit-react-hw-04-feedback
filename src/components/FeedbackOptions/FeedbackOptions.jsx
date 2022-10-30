import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keyObject = Object.keys(options);
  return (
    <div>
      {keyObject.map((nameBtn, key) => (
        <button
          className={css.btn}
          key={key}
          type="submit"
          onClick={() => onLeaveFeedback(nameBtn)}
        >
          {nameBtn}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
