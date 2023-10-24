import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  GetAnimeListDocument,
  useGetAnimeListLazyQuery,
  useGetAnimeListQuery,
} from '../network/queries/__generated__/graphql';
import {client} from '../network/graphqlClient';

const AnimeListViewComponent = () => {
  /* Method 1 - Using useQuery */
  const {data, loading, error} = useGetAnimeListQuery({
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  /* Method 2 - Using useLazyQuery */
  //   const [getAnimeList, {data, loading, error}] = useGetAnimeListLazyQuery({
  //     variables: {
  //       page: 1,
  //       perPage: 10,
  //     },
  //   });

  //   const onRefresh = () => {
  //     getAnimeList();
  //   };

  /* Method 3 - If you are using the query document */
  //   const fetchAnimeList = async () => {
  //     const {data, loading, error} = await client.query({
  //       query: GetAnimeListDocument,
  //       variables: {
  //         page: 1,
  //         perPage: 10,
  //       },
  //     });
  //   };

  const renderAnimeItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item?.title?.userPreferred}</Text>
        <Text>{item?.seasonYear}</Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={data?.Page?.media || []}
        renderItem={({item}) => renderAnimeItem(item)}
        refreshing={loading}
        //onRefresh={onRefresh} //uncomment if you use 'Method 2 - useLazyQuery'
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
