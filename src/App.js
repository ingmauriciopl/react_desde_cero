import React from 'react';

// importing ed-grid and edteam-guide-styles from the styles/styles.scss file
import "./styles/styles.scss";

// componentes
import Curso from './Curso';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => ( 
  <>  
  <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" 
                  src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png"
                  alt="banner"/>
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="https://ed.team" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />


    <Course />
    <Course />
  </div>  
  </>
);

const Course = () => (
  <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png" 
         alt="curso"/>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://lh3.googleusercontent.com/4otlui9J_mS1Lao1LXT-UYYrRyicSP25EKnSb0_Bt8ODJ8ItnltUm96T5aS40ULcdnZLoMJMAU3dNd5A5m80d2x_5nwqxrjZnGEdVN7h9V-lb59oehazBk_EOmm_tTqfVqVyH0g4bhQN6PDdN2zYsMqVOzztnKC1Hw3wZrXslqwzVUcDwkPPugiEHFnjH9CAzeOuQEj0qQZ6IdsulEaia2sRb1qyEmDucYUMsYhRBwnGPa23a_PVVCXXAuqK9hXAGDZInmsC2H4aifKWnd9R5QaBA9T7X5YuYqbEL-FoM9ZLzfUGe4tHjm1HM81ANQCV6Gm5mCUiX_ytHRyVVQ6OdzdotBJ-2HyHHSKn7gaZD3LsVdsjxQMfE8psGCSRwJZ9m1ZDsnmnYL33HxICSMw0Z3rpnj5iHvN7GA2vwPivVMBn6EceocUhJGc1fnhdLD7jC-MIt-akI0aVYFclGPy6sbN0ZCycvHB-Rh5fsvuIfK1qu1qHxSHQBO_trgKQpRxW1rkNbmSQ7RyHqMuV0UF8HcAz589pJeyaCYNR55W5QmjQ3FsAbY2rcRcTnjXRc_F8GTWJq0vC8RkOhmVhQ9thyWKFaT7MQiqSmbp1eIvxpD9sMiCHDZRLuWxjQl6WW31OUocS9Fr7_xOzAHYVFQWFwhODfC0koR6T9hh8OUs-Wr952iFHocz2YwrqFhfpS_A=w596-h730-no" 
                 alt="curso"/>
          </div>
        </div>
        <span className="small">Mauricio Penaranda</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team">$ 20USD</a>
    </div>
  </div>
</article>
);


export default App;
