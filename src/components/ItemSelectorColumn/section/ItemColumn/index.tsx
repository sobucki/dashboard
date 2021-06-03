import { Container } from './styles';

export interface ItemColumnProps {
  item: { id: number | string; url: string; selected: boolean };
  onClick: (id: number | string) => void;
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
      urlImage={item.url}
      onClick={() => onClickEvent(item.id)}
    ></Container>
  );
}

export default ItemColumn;
