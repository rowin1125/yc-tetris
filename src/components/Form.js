import React from 'react';
import { Formik } from 'formik';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import firebase from '../firebase';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: '#f77f00'
  },
  button: {
    color: 'white',
    backgroundColor: '#f77f00',
    margin: '32px 0 0 0'
  },
  input: {
    color: '#f77f00 !important',
    '&::after': { borderColor: '#f77f00', color: '#f77f00' }
  },
  label: {
    color: '#f77f00 !important'
  },
  fieldset: {
    padding: 0,
    border: 'none'
  }
}));

const HighscoreForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, score, resetForm, handleClose }) => {
  const classes = useStyles();
  return (
    <div>
      <h1>Send your highscore</h1>
      <h3>{`Your score was ${score} points 🥳`}</h3>
      <Formik>
        {() => (
          <Form
            method="post"
            onSubmit={e => {
              e.preventDefault();
              firebase
                .firestore()
                .collection('score')
                .add({
                  name: values.name,
                  city: values.city,
                  score: score
                })
                .then(() => {
                  resetForm();
                  handleClose();
                })
                .catch(err => console.log(err.message));
            }}
          >
            <fieldset className={classes.fieldset}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className={classes.label} htmlFor="name">
                  Name
                </InputLabel>
                <Input className={classes.input} id="name" name="name" autoComplete="name" onChange={handleChange} value={values.name} error={Boolean(errors.name)} />
                {errors.name && <FormHelperText error={Boolean(errors.name)}>{errors.name}</FormHelperText>}
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className={classes.label} htmlFor="city">
                  City im working at
                </InputLabel>
                <Input className={classes.input} id="city" name="city" autoComplete="city" onChange={handleChange} value={values.city} error={Boolean(errors.city)} />
                {errors.city && <FormHelperText error={!!errors.city}>{errors.city}</FormHelperText>}
              </FormControl>
              <Button type="submit" fullWidth variant="contained" className={classes.button}>
                Submit highscore
              </Button>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const FormikHighscore = withFormik({
  mapPropsToValues({ name, city }) {
    return {
      name: name || 'rowin',
      city: city || 'amsterdam'
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
    city: Yup.string()
      .min(4)
      .required()
  })
})(HighscoreForm);

export default FormikHighscore;
