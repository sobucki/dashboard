import { Container } from './styles';

export interface ItemColumnProps {
  item: { id: number; url: string; selected: boolean };
  onClick: (id: number) => void;
  blurOnSelect?: boolean;
}
function ItemColumn({
  item,
  onClick: onClickEvent,
  blurOnSelect,
}: ItemColumnProps) {
  return (
    <Container
      className={item.selected && !blurOnSelect ? 'selected' : ''}
      onClick={() => onClickEvent(item.id)}
    ></Container>
  );
}

export default ItemColumn;
