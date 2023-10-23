import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const animeList = {
  data: {
    Page: {
      media: [
        {
          id: 1,
          title: {
            userPreferred: 'Cowboy Bebop',
          },
          seasonYear: 1998,
        },
        {
          id: 5,
          title: {
            userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
          },
          seasonYear: 2001,
        },
        {
          id: 6,
          title: {
            userPreferred: 'TRIGUN',
          },
          seasonYear: 1998,
        },
        {
          id: 7,
          title: {
            userPreferred: 'Witch Hunter ROBIN',
          },
          seasonYear: 2002,
        },
        {
          id: 8,
          title: {
            userPreferred: 'Bouken Ou Beet',
          },
          seasonYear: 2004,
        },
        {
          id: 15,
          title: {
            userPreferred: 'Eyeshield 21',
          },
          seasonYear: 2005,
        },
        {
          id: 16,
          title: {
            userPreferred: 'Hachimitsu to Clover',
          },
          seasonYear: 2005,
        },
        {
          id: 17,
          title: {
            userPreferred: 'Hungry Heart: Wild Striker',
          },
          seasonYear: 2002,
        },
        {
          id: 18,
          title: {
            userPreferred: 'Initial D FOURTH STAGE',
          },
          seasonYear: 2004,
        },
        {
          id: 19,
          title: {
            userPreferred: 'MONSTER',
          },
          seasonYear: 2004,
        },
      ],
    },
  },
};

const AnimeListViewComponent = () => {
  const renderAnimeItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.title?.userPreferred}</Text>
        <Text>{item.seasonYear}</Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={animeList.data.Page.media}
        renderItem={({item}) => renderAnimeItem(item)}
      />
    </View>
  );
};

export default AnimeListViewComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
});
