import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }

    if (details === '') {
      setDetailsError(true);
    }

    if (title && details) {
      axios
        .post('http://localhost:8000/notes', {
          title: title,
          details: details,
          category: category,
        })

        .then(() => navigate('/'));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="text.secondary"
        component="h2"
        gutterBottom
        sx={{ mt: 2 }}
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 2, mb: 2 }}
          onChange={(event) => setTitle(event.target.value)}
          className={classes.field}
          label="Note Ttile"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={{ mb: 2 }}
          onChange={(event) => setDetails(event.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl sx={{ display: 'block', mb: 4 }}>
          <FormLabel>Notes Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel
              value="money"
              control={<Radio />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          sx={{
            '&:hover': {
              backgroundColor: 'none',
            },
          }}
          onClick={() => console.log('Button Clicked')}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
function useHistory() {
  throw new Error('Function not implemented.');
}
