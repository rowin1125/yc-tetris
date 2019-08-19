import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#000',
    border: '2px solid #f77f00',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    borderRadius: '40px',
    color: '#f77f00',
    outline: 'none'
  }
}));

const SimpleModal = ({ open, setOpen, score, resetGame }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal className={classes.container} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <Form score={score} handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default SimpleModal;
