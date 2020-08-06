import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/header';
import SidebarFirstStep from './components/sidebar_first_step';
import SidebarSecondStep from './components/sidebarSecondStep';
import SidebarThirdStep from './components/sidebarThirdStep';
import SidebarFourthStep from './components/sidebarFourthStep';
import MainArea from './components/main_area';
import Footer from './components/footer';

const App = () => {


  const step = useSelector(state => state.stepCounterReducer);

  switch (step) {
    case 1:
      return (
        <div>
          <Header />
          <main>
            <MainArea />
            <SidebarFirstStep
            />
          </main>
          <Footer
          />
        </div>
      )
    case 2:
      return (
        <div>
          <Header />
          <main>
            <MainArea />
            <SidebarSecondStep />
          </main>
          <Footer
          />
        </div>
      )
    case 3:
      return (
        <div>
          <Header />
          <main>
            <MainArea />
            <SidebarThirdStep />
          </main>
          <Footer
          />
        </div>
      )
    case 4:
      return (
        <div>
          <Header />
          <main>
            <MainArea />
            <SidebarFourthStep />
          </main>
          <Footer
          />
        </div>
      )
    default: return <h1>NO STATE</h1>
  }
}

export default App;