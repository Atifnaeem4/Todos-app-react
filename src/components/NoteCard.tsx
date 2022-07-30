import { makeStyles } from '@material-ui/core';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Avatar, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { green, yellow, pink, blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

interface PropsTypes {
  id: number;
  title: String;
  details: String;
  category: String;
  handleDelete: (arg0: number) => void;
}

// const useStyles =  makeStyles({
//   test:{border : (props) => {
//     if(props.category === 'work')
//     {
//       return '1px solid red'
//     }
//   }}
// })
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (props: PropsTypes) => {
      if (props.category === 'work') {
        return yellow[700];
      }
      if (props.category === 'money') {
        return green[500];
      }
      if (props.category === 'todos') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const avtcolor = (props: PropsTypes) => {
  if (props.category === 'work') {
    return '#fbc02d';
  }
  if (props.category === 'money') {
    return '#2196f3';
  }
  if (props.category === 'todos') {
    return '#f73378';
  }
  return '#7b1fa2';
};

const NoteCard = (props: PropsTypes) => {
  // const classes = useStyles(props)
  const classes = useStyles(props);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                background: avtcolor(props),
              }}
            >
              {props.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => {
                props.handleDelete(props.id);
              }}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {props.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
