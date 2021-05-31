import { useState } from 'react';
import ItemSelectorColumn from '../../components/ItemSelectorColumn';

function Home() {
  const [memes, setMemes] = useState([
    {
      id: 1,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-1.jpg',
      selected: false,
    },
    {
      id: 2,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-2.jpg',
      selected: false,
    },
    {
      id: 3,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-3.jpg',
      selected: false,
    },
    {
      id: 4,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-4.jpg',
      selected: false,
    },
    {
      id: 5,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-5.jpg',
      selected: false,
    },
  ]);

  const [selected, setSelected] = useState([
    {
      id: 5,
      url: 'https://www.ahnegao.com.br/wp-content/uploads/2021/05/sabadaco-meme-5.jpg',
      selected: false,
    },
  ]);

  return (
    <ItemSelectorColumn
      sourceData={memes}
      selectedData={selected}
      onSave={(items) => console.log(items)}
    />
  );
}

export default Home;
