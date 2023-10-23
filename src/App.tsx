import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimeListViewComponent from './animeList/animeListView';

function App(): JSX.Element {
  return (
    <>
      <SafeAreaView />
      <AnimeListViewComponent />
    </>
  );
}

export default App;
