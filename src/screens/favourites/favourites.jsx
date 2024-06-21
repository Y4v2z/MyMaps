//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, RefreshControl, StatusBar, FlatList} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import firestore from '@react-native-firebase/firestore';
import {Colors} from '../../theme/colors';
import LoadingModal from '../../components/uı/loadingModal';
import FavouriteCard from '../../components/favourites/favouriteCard';

// create a component
const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const [pending, setPending] = useState(true);
  const getFavorites = async () => {
    setPending(true);
    await firestore()
      .collection('Favorites')
      .get()
      .then(querySnapshot => {
        const fetchedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedNotes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
          });
        });
        setFavorites(fetchedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={ScreensStyle.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} />
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={pending} onRefresh={getFavorites} />
          }
          data={favorites}
          renderItem={({item, index}) => (
            <FavouriteCard favorite={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Favourites;
