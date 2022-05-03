# Disney Clone

## Included

- react
- styled components
- react-router
- firebase
- react-slick
- API??

## Purpose of Redux

- Constantly communicating with Firebase could also hinder performance and talking to a local store in memory would be much faster.
- Your front end should never be dependent on what your back end is written with. Redux is a way to manage state across your entire app allowing. Firebase, as a back end, is a way to get data to your front end. If you have a basic app you don't necessarily need redux but if you're passing your firebase data up and down your react component tree then redux is the answer.

### UseContext vs Redux

- Instead of Redux we could use the useContext and useReducer hooks, there is a lot of debate about when to use which tools this is a link https://blog.isquaredsoftware.com/2021/01/context-redux-differences/ that gives the best discussion of when to use which.
- Redux does not persist data after a refresh need firebase or redux-persist npm

### Authenication with firebase and router vs context and router

- https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx Example with context and router
- With firebase

```
onAuthChangeState(user => {
    if(user)
    navigate("/")
})
```

## Firebase

Can use firebase hooks with https://github.com/csfrequency/react-firebase-hooks/tree/edab3f3f3b5ec01c8aafcc6096755dfcc69e4408/auth#useauthstate

## React Router

- Authentication redirect and guard Example from the React Router Documentation: https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx

## CSS

When wanting to add a border to a container but you DO NOT want to add border to the outside of the div use outline. This will add a border without effecting the layout. use outline-offset to move the border inside of the container rather than on the outside of the container. https://stackoverflow.com/a/50347410

## API

use https://www.themoviedb.org/settings/api for movie api fetch image and info.

How to make API keys secret wih deployed with react, and github pages: https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page
