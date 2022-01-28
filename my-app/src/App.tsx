import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, Label, initializeIcons } from '@fluentui/react';
import { IconButton } from '@fluentui/react/lib/Button';
import './App.css';
import './components/DetailsListBasicExample'
import { DetailsListBasicExample, IListDetailsProps, IDetailsListBasicExampleItem } from './components/DetailsListBasicExample';

import cardetails from './cars.json'
import { useEffect, useRef, useState } from 'react';

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

  const allVariables: IDetailsListBasicExampleItem[] = cardetails.variables;
  const [ selectedVariables, setSelectedVariables] = useState(cardetails.variables);
  const [ unselectedVariables, setUnselectedVariables] = useState([] as IDetailsListBasicExampleItem[]);
  const [ mystring, setMyString ] = useState("Hello Roy.");

  initializeIcons();

  const onDeselectAll = () => {
    setSelectedVariables((prevVars) => {
      return []
    });
    setUnselectedVariables(() => {
      return [...allVariables]
    });
    console.log('Selected', selectedVariables);
    console.log('Unselected', unselectedVariables);
  }

  return (  
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <p>The string is {mystring}</p>
      <Stack horizontal tokens={stackTokens}>
          <DetailsListBasicExample title='Unselected variables' variables={unselectedVariables}/>
          <Stack verticalAlign='center'>
            <IconButton iconProps={{ iconName: 'DoubleChevronRight' }} 
              title="Emoji"/>
            <IconButton iconProps={{ iconName: 'ChevronRight' }} title="Emoji"/>
            <IconButton iconProps={{ iconName: 'ChevronLeft' }}
              onClick={() => setMyString('Yo yo yo')}
              title="Emoji"/>
            <IconButton iconProps={{ iconName: 'DoubleChevronLeft' }}
              onClick={() => onDeselectAll()}
              title="Emoji"/>
          </Stack>
          <DetailsListBasicExample title='Selected variables' variables={selectedVariables}/>
      </Stack>
    </Stack>
  );
};
