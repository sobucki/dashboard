import { Item } from '../../types';
import ItemColumn from '../ItemColumn';
import { Container } from './styles';

export interface ColumnSelectorProps {
  onChange: (items: Item[]) => void;
  data: Item[];
  isDestinyColumn?: boolean;
}

function ColumnSelector({
  onChange,
  data,
  isDestinyColumn,
}: ColumnSelectorProps) {
  return (
    <Container>
      {data.map((item) => (
        <ItemColumn
          item={item}
          key={item.id}
          blurOnSelect={isDestinyColumn}
          onClick={(id) =>
            onChange(
              data.map((item) => {
                if (item.id === id)
                  return { ...item, selected: !item.selected };
                return item;
              })
            )
          }
        />
      ))}
    </Container>
  );
}

export default ColumnSelector;
