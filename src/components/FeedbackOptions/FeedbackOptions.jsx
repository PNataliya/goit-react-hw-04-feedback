import PropTypes from 'prop-types';
import { ButtonList, Option, Button } from './FeedbackOptions.styled';
import { btnBgColorFun } from '../../utilities/btnBgColor';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <Option key={option}>
            <Button
              style={{
                backgroundColor: btnBgColorFun(option),
              }}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </Button>
          </Option>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  btnBgColorFun: PropTypes.func.isRequired,
};
