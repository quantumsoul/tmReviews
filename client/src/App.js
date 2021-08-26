import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
//components 
import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
//style
import useStyles from  "./styles.js"
//redux
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {getPosts} from "./actions/posts"

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect (()=> {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <Container max-width="lg">
      <AppBar className ={classes.AppBar} position = "static" color = "inherit">
        <Typography className ={classes.heading} variant="h2" align="center">
          tmReviews
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId = {currentId} setCurrentId={setCurrentId}/>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
