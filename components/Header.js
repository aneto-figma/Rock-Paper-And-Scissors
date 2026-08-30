import * as React from 'react';
import { Appbar } from 'react-native-paper';

// Heading of Fedd page

const Header = () => {

  return (
    <Appbar.Header style={{backgroundColor:'#7C3AED'}}>
      <Appbar.Content
        title="Rock Paper Scissor"
        titleStyle={{ color: '#FFFFFF', fontWeight: '800', letterSpacing: 1 }}
        style={{ alignItems: 'center', transform:[{scaleX: 1.4}, {scaleY: 1.4}]}}
      />
    </Appbar.Header>
  );
};

export default Header;