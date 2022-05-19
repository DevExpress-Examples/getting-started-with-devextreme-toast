import React, { useState } from 'react';

import 'devextreme/dist/css/dx.light.css';

import { Button } from 'devextreme-react/button';
import { Toast, Position } from 'devextreme-react/toast';
import notify from 'devextreme/ui/notify';

const types = ['error', 'info', 'success', 'warning'];

const showMessage = () => {
  notify(
    {
      message: "You have a new message", 
      width: 230,
      position: {
        at: "bottom",
        my: "bottom",
        of: "#container"
      }
    }, 
    types[Math.floor(Math.random() * 4)], 
    500
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const showCustomMessage = () => {
    setIsVisible(true);
  }
  const onHiding = () => {
    setIsVisible(false);
  }
  const contentRender = () => {
    return (
      <div class="flex-box">
        <span>You have a new message &nbsp;</span>
        <i class='dx-icon-email icon-style'></i>
      </div>
    );
  }
  return (
    <div id="container">
      <div id="buttons">
        <Button
          text="Show message"
          onClick={showMessage}
        >
        </Button>
        <Button
          text="Show custom message"
          onClick={showCustomMessage}
        >
        </Button>
      </div>
      <Toast
        visible={isVisible}
        width={230}
        height={50}
        type="custom"
        contentRender={contentRender}
        onHiding={onHiding}    
      >   
        <Position
          my="bottom"
          at="bottom"
          of="#container"
        />
      </Toast>
    </div>
  );
}

export default App;
