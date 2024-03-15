import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';
import {hour, minute} from '../utils/constants';

const Provider = ({children}) => {
  const [notes, setNote] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Birinci notun açıklaması',
      date: '15.25 pm',
      read: false,
    },
    {
      id: 2,
      title: 'Mechanical Engineer',
      description: 'İkinci notun açıklaması',
      date: '02.25 pm',
      read: false,
    },
    {
      id: 3,
      title: 'Computer Engineer',
      description: 'Üçüncü notun açıklaması',
      date: '12.25 pm',
      read: false,
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Dördüncü açıklama',
      date: '11.25 pm',
      read: false,
    },
  ]);

  const addNote = item => {
    if (item) {
      setNote([...notes, item]);
      Alert.alert('Your note has been saved successfully!');
    }
  };

  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id);
      setNote(updateItems);
      Alert.alert('Your note has been deleted!');
    } else {
      Alert.alert('No such note found!');
    }
  };

  const updateNote = (id, item) => {
    const updateItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: `${hour}:${minute} pm`,
          }
        : note,
    );
    setNote(updateItems);
    Alert.alert('Your note has been successfully updated!');
  };

  return (
    <MyContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
