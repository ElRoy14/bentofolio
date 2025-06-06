import './App.css';
import Block from './components/Block.jsx';
import { networks } from './Data/networks.js';
import { projects } from './Data/projects.js';
import { technologies } from './Data/technologies.js';
import { mobiles } from './Data/mobile-projects.js';

export default function App() {
  return (
    <>
      <CreateGrid />
    </>
  );
}

function CreateGrid() {
  return (
    <>
      <div className="home">
        <div className="outter-grid">
          <div className="inner-grid">
            <div className="col column-1">
              <Block
                data={{ className: 'message', 
                        class: 'name',
                content: 'Roylin E. Jimenez' }}
              />
              <div className="split-column">
                <Block data={{ className: 'photo', image: '/photo/photo.jpg' }} />
                <Block
                  data={{
                    className: 'resume',
                    link: '',
                    image: '/resume/download-icon.png',
                  }}
                />
              </div>
              <div className="split-row">
                <Block
                  data={{
                    className: 'message',
                    class: 'excelsior',
                    content: 'Excelsior',
                  }}
                />
                <Block
                  data={{
                    className: 'network',
                    elements: networks,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col column-2">
            <Block
              data={{
                className: 'profile',
                top: 'Currently',
                middle: 'Jr. Back End Developer',
                bottom: 'at AlticeDO'
              }}
            />
            <Block
              data={{
                className: 'projects-carrousel',
                content: 'projects',
                elements: projects,
              }}
            />
            <Block
              data={{
                className: 'techStack',
                elements: technologies,
              }}
            />
          </div>
          <div className="col column-3">
            <Block
              data={{
                className: 'theme',
                content: 'Tema',
                image: '/theme/luna.svg'
              }}
            />
            <Block
              data={{
                className: 'mobile-projects-carrousel',
                content: 'Moviles',
                elements: mobiles,
              }}
            />
            <Block
              data={{
                className: 'counter-projects',
                content: 'counter',
                image: '/counter/plus-icon.png'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
