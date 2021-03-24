import { Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Todo } from "../App";

type DisplayProps = {
  tasks: Todo;
  deleteTask: Function;
};

function Display({ tasks, deleteTask }: DisplayProps) {
  return (
    <div className="task_container">
      {tasks.length === 0 ? (
        <h2>No Task</h2>
      ) : (
        <ol>
          {tasks.map(({ id, task }) => (
            <li>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                item
                xs={12}
                key={id}
              >
                {task}
                <IconButton onClick={() => deleteTask(id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Display;
