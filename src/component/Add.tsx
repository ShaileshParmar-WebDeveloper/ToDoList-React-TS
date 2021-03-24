import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

type AddProps = {
  inputTask: string;
  setInputTask: Function;
  handleSubmit: Function;
};

function Add({ inputTask, setInputTask, handleSubmit }: AddProps) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}

export default Add;
