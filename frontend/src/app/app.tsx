// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ResumeDialog from './resume-dialog/resume-dialog';
import ItemList from './items/items';
import RandomCatFact from './cat-facts/cat-facts';
import ArtPieceList from './cat-art/cat-art';

export function App() {
  return (
    <div>
        <Container maxWidth="lg">
          <div className="App">
            <header className="App-header">
              <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="isolate logo">
                {/* <!-- Background circle: top --> */}
                <circle cx="150" cy="135" r="60" fill="#90ccf1" fill-opacity="1" className="blend top"/>
                {/* <!-- Background circle: left --> */}
                <circle cx="135" cy="150" r="60" fill="#65d5ef" fill-opacity="1" className="blend left"/>
                {/* <!-- Background circle: right --> */}
                <circle cx="165" cy="150" r="60" fill="#65a6ef" fill-opacity="1" className="blend right"/>
                {/* <!-- Background circle: bottom --> */}
                <circle cx="150" cy="165" r="60" fill="#61c0fc" fill-opacity="1" className="blend bottom"/>
                {/* <!-- Foreground white circle --> */}
                <circle cx="150" cy="150" r="50" fill="white" />
            </svg>
            <Typography variant="h4" component="h1" gutterBottom>
              <span className="animate1 hello">Hello</span> <span className="animate2 beyond">BEYOND</span><span className="animate3 md">MD</span>
              </Typography>
            </header>
            <ResumeDialog />
            <RandomCatFact />
            <ArtPieceList />
          </div>
      </Container>
    </div>
  );
}

export default App;
