import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCISIjSij-H6sdQuu0eEdztu0Lz3PCs1gY",
    authDomain: "crwn-db-809f9.firebaseapp.com",
    databaseURL: "https://crwn-db-809f9.firebaseio.com",
    projectId: "crwn-db-809f9",
    storageBucket: "",
    messagingSenderId: "29490011126",
    appId: "1:29490011126:web:2a3b17e93b7dbdab0f05d7",
    measurementId: "G-FCL31KER3W"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const convertCollectionsToMap = (collections) => {
	const transformedData = collections.docs.map(doc => {
		const { title,items } = doc.data();

		return {
			routeName:encodeURI(title.toLowerCase()),
			id:doc.id,
			title,
			items
		}
	});

	return transformedData.reduce((accumulator,collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator;
	},{})
}

export const createUserProfileDocument =  async (userAuth,additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot =  await userRef.get();
  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      if(displayName === null){
        await userRef.set({
          email,
          createdAt,
          ...additionalData
        });
      }else{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }
    }catch(e){
      console.log("erro => "+e.message);
    }
  }
  return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      unSubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// export const addCollectionAndItems = async (collectionKey,ObjectToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);
// 	const batch = firestore.batch();
// 	ObjectToAdd.forEach(obj => {
// 		const docRef = collectionRef.doc();
// 		batch.set(docRef,obj);
// 	})

// 	await batch.commit();
// }

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({'promp':'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(googleProvider)};

export default firebase;