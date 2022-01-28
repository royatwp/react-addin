import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { useState, FormEvent } from 'react';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { 
  maxWidth: '300px',
  textAlign: 'left'
} };

export interface IDetailsListBasicExampleItem {
  variable: string;
  type: string;
}

export type IListDetailsProps = {
  title: string;
  variables: IDetailsListBasicExampleItem[];
}

export const DetailsListBasicExample = ({title, variables}: IListDetailsProps) => {

  const [selection] = useState(new Selection());
  const [allItems] = useState(variables);
  const [filteredItems, setFilteredItems] = useState(variables);
  const columns:IColumn[] = [
      { key: 'column1', name: 'Variable', fieldName: 'variable', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Type', fieldName: 'type', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

  const onFilter = (ev: FormEvent<HTMLElement>, text: string | undefined): void => {
    setFilteredItems( text ? allItems.filter(item => item.variable.toLowerCase().indexOf(text) > -1) : allItems );
  };

  const onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.variable}`);
  };

  return (
      <div>
        <TextField
          className={exampleChildClass}
          label={title}
          onChange={onFilter}
          styles={textFieldStyles}
        />
        <MarqueeSelection selection={selection}>
          <DetailsList
            items={filteredItems}
            columns={columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={selection}
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={onItemInvoked}
          />
        </MarqueeSelection>
      </div>
  );
}
