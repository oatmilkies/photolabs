import { useReducer, useEffect } from "react";

const useApplicationData = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
      case 'GET_PHOTOS_BY_TOPICS':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_ID': 
        return { ...state, currentTopicId: action.payload };
      case 'TOGGLE_MODAL':
        return {
          ...state,
          displayModal: !state.displayModal
        };
      case 'SELECT_PHOTO':
        return {
          ...state,
          selectedPhoto: state.photoData.find(({ id }) => id === action.payload.id)
        };
      case 'FAV_PHOTO_ADDED':
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, action.payload.id]  // Add the new id
        };
      case 'FAV_PHOTO_REMOVED':
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id) // Remove the id
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }


  const [state, dispatch] = useReducer(reducer, {
    displayModal: false,
    selectedPhoto: {},
    likedPhotos: [],
    photoData: [],
    topicData: [],
    currentTopicId: null
  });


  //Get photo data from api server
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }));
  }, []);

  //Get topic data from api server
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }));
  }, []);

  //Get photos by topic id
  useEffect(() => {
    if (state.currentTopicId) {
      fetch(`/api/topics/photos/${state.currentTopicId}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: 'GET_PHOTOS_BY_TOPICS', payload: data }));
    }
  }, [state.currentTopicId]);

  //Get topic id when clicked
  const handleTopicClick = (topicId) => {
    dispatch({ type: 'SET_TOPIC_ID', payload: topicId });
  };

  //Open modal when a photo is clicked
  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  //Get data for the selected photo to pass to the modal
  const selectPhoto = (id) => {
    dispatch({ type: 'SELECT_PHOTO', payload: { id } });
  };

  //Add or remove a favourite when the fav button is clicked
  const toggleFav = (id) => {
    if (state.likedPhotos.includes(id)) {
      dispatch({ type: 'FAV_PHOTO_REMOVED', payload: { id } });
    } else {
      dispatch({ type: 'FAV_PHOTO_ADDED', payload: { id } });
    }
  };

  return {
    state,
    toggleModal,
    selectPhoto,
    toggleFav,
    handleTopicClick
  };
};

export default useApplicationData;