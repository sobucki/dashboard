import { useEffect, useState } from 'react';
import ColumnSelector from './section/ColumnSelector';
import { Item } from './types';
import { Container, ButtonsArea, DestinyWrap, SaveButton } from './styles';

export interface ItemSelectorColumnProps {
  sourceData: Item[];
  selectedData: Item[];
  onSave: (items: Item[]) => void;
}

function ItemSelectorColumn({
  sourceData,
  selectedData,
  onSave,
}: ItemSelectorColumnProps) {
  const [originData, setOriginData] = useState<Item[]>([]);
  const [destinyData, setDestinyData] = useState<Item[]>([]);

  useEffect(() => {
    setOriginData(
      sourceData.map((item) =>
        selectedData.find((selectedItem) => selectedItem.id === item.id)
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
    setDestinyData(selectedData.map((item) => ({ ...item, selected: true })));
  }, [sourceData, selectedData]);

  useEffect(() => {
    setOriginData(
      sourceData.map((item) =>
        destinyData.find((selectedItem) => selectedItem.id === item.id)
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }, [destinyData, sourceData]);

  const addAll = () => {
    setDestinyData(originData.map((item) => ({ ...item, selected: true })));
  };

  const removeAll = () => {
    setDestinyData([]);
  };

  return (
    <Container>
      <ColumnSelector
        onChange={(items) => {
          setDestinyData(items.filter((item) => item.selected));
          setOriginData(items);
        }}
        data={originData}
      />
      <ButtonsArea>
        <button onClick={addAll}>Add all</button>
        <button onClick={removeAll}>Remove all</button>
      </ButtonsArea>
      <DestinyWrap>
        <ColumnSelector 
          onChange={(items) =>
            setDestinyData(items.filter((item) => item.selected))
          }
          isDestinyColumn
          data={destinyData}
        />
        <SaveButton type="button" onClick={() => onSave(destinyData)}>
          Save
        </SaveButton>
      </DestinyWrap>
    </Container>
  );
}

export default ItemSelectorColumn;
