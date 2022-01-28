import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';
import cardetails from '../cars.json'
import { isThisTypeNode } from 'typescript';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { 
  maxWidth: '300px',
  textAlign: 'left'
} };

export interface IDetailsListBasicExampleItem {
  //key: number;
  variable: string;
  type: string;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export type IListDetailsProps = {
  title: string;
}

export class DetailsListBasicExample extends React.Component<IListDetailsProps, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: IListDetailsProps) {

    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    this._allItems = [...cardetails.variables];

    this._columns = [
      { key: 'column1', name: 'Variable', fieldName: 'variable', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Type', fieldName: 'type', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    this.state = {
      items: cardetails.variables,
      selectionDetails: this._getSelectionDetails(),
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    const title = this.props.title;

    return (
      <div>
        {/* <div className={exampleChildClass}>{selectionDetails}</div>
        <Announced message={selectionDetails} /> */}
        <TextField
          className={exampleChildClass}
          label={title}
          onChange={this._onFilter}
          styles={textFieldStyles}
        />
        <Announced message={`Number of items after filter applied: ${items.length}.`} />
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    // switch (selectionCount) {
    //   case 0:
    //     return 'No items selected';
    //   case 1:
    //     return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
    //   default:
    //     return `${selectionCount} items selected`;
    // }
    return '';
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string | undefined): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.variable.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };
  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.variable}`);
  };
}
