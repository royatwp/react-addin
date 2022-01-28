import React, { SyntheticEvent } from 'react';

import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, Label, initializeIcons } from '@fluentui/react';
import { IconButton } from '@fluentui/react/lib/Button';


import './App.css';
import './components/DetailsListBasicExample'
import { DetailsListBasicExample } from './components/DetailsListBasicExample';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { 
  childrenGap: 40,
 };

const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const myStackStyles: Partial<IStackStyles> = {
  root: {
    margin: '20px',
    padding: '30px',
    textAlign: 'center',
    color: '#605e5c',
    background: 'lightblue'
  },
};


export const App = (props: IButtonExampleProps) => {

  const { disabled, checked } = props;

  const clickHandler = (e: any) => {
    console.log(e)
    alert('Clicked a thing')
    
  }

  initializeIcons();

  return (
  
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>

      <Stack horizontal tokens={stackTokens}>
          <DetailsListBasicExample title="Unselected variables"></DetailsListBasicExample>
          <Stack verticalAlign='center'>
            <IconButton iconProps={{ iconName: 'DoubleChevronRight',  }} title="Emoji" ariaLabel="Emoji" />
            <IconButton iconProps={{ iconName: 'ChevronRight' }} title="Emoji" ariaLabel="Emoji"/>
            <IconButton iconProps={{ iconName: 'ChevronLeft' }} title="Emoji" ariaLabel="Emoji"/>
            <IconButton iconProps={{ iconName: 'DoubleChevronLeft' }} title="Emoji" ariaLabel="Emoji"/>
          </Stack>
          <DetailsListBasicExample title="Selected variables"></DetailsListBasicExample>
      </Stack>

      {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis et explicabo facere pariatur, quam dolorum accusantium quos commodi sequi amet nostrum culpa quibusdam saepe reiciendis rerum, fuga, sit ad molestiae excepturi sed sunt omnis. Debitis nihil modi fugit incidunt.</Text>
      <Stack tokens={stackTokens} styles={myStackStyles} horizontal>
        <Label>I am a label</Label>
        <Label>I am another label</Label>
        <Label>Label city</Label>
      </Stack>
      <DefaultButton text="Standard" onClick={clickHandler} allowDisabledFocus disabled={disabled} checked={checked} />
      <PrimaryButton text="Primary" onClick={clickHandler} allowDisabledFocus disabled={disabled} checked={checked} />

      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to your Fluent UI app
      </Text>
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to your Fluent UI app 2
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
        <Link href="https://aka.ms/themedesigner">Theme designer</Link>
      </Stack> */}
    </Stack>


  );
};
