import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Button from 'devextreme-react/button';
import Toast, { Position } from 'devextreme-react/toast';
import notify from 'devextreme/ui/notify';

const types = ['error', 'info', 'success', 'warning'];

function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showMessage = useCallback(() => {
    notify(
      {
        message: 'You have a new message',
        width: 230,
        position: {
          at: 'bottom',
          my: 'bottom',
          of: '#container',
        },
      },
      types[Math.floor(Math.random() * 4)],
      500,
    );
  }, []);

  const showCustomMessage = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onHiding = useCallback(() => {
    setIsVisible(false);
  }, []);

  const contentRender = useCallback(
    () => (
      <div className="flex-box">
        <span>You have a new message &nbsp;</span>
        <i className="dx-icon-email icon-style"></i>
      </div>
    ),
    [],
  );

  return (
    <div id="container">
      <div id="buttons">
        <Button text="Show message" onClick={showMessage}></Button>
        <Button text="Show custom message" onClick={showCustomMessage}></Button>
      </div>
      <Toast
        visible={isVisible}
        width={230}
        height={50}
        type="custom"
        contentRender={contentRender}
        onHiding={onHiding}
      >
        <Position my="bottom" at="bottom" of="#container" />
      </Toast>
    </div>
  );
}

export default App;
