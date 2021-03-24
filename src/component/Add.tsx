import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

type AddProps = {
  inputTask: string;
  handleInput: (input: string) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Add({ inputTask, handleInput, handleSubmit }: AddProps) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={(e) => handleInput(e.target.value)}
        value={inputTask}
        id="outlined-basic"
        label="Add your Task"
        variant="outlined"
        required
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}

export default Add;
