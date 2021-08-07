import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {AppBar, Tabs,Tab} from '@material-ui/core';
//import TabPanel from '@material-ui/lab/TabPanel'
import { TabPanel } from '@material-ui/lab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './components/List'






function App() {

  const [recipes,setRecipes] = useState([])

  useEffect(() => {

    
      const fetching = async () => {

        const fetchingApi =  await fetch('https://cookbook-platform-api.herokuapp.com/recipes')

        const result = await fetchingApi.json()

        setRecipes(result)

        console.log(result)
        console.log(recipes)

      }

      fetching()

  }, [])



  return (
    <div className="App">

      <AppBar position="static">
        <Tabs  aria-label="simple tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>

      <List result={recipes} />
      





      {/* <h1>Coocking - Platform by Khaled + Luis</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button> */}

      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */}



    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


//<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
/*<Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />*/

          // <TabPanel value={value} index={0}>

/*<TabPanel  index={0}>
        Item One
      </TabPanel>
      <TabPanel  index={1}>
        Item Two
      </TabPanel>
      <TabPanel  index={2}>
        Item Three
      </TabPanel>*/

/*fetch('https://cookbook-platform-api.herokuapp.com/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {setRecipes(data)
        console.log(recipes)
      });*/  