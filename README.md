# Disney Clone

## Included

- react
- styled components
- react-router
- firebase

## Purpose of Redux

- Constantly communicating with Firebase could also hinder performance and talking to a local store in memory would be much faster.
- Your front end should never be dependent on what your back end is written with. Redux is a way to manage state across your entire app allowing. Firebase, as a back end, is a way to get data to your front end. If you have a basic app you don't necessarily need redux but if you're passing your firebase data up and down your react component tree then redux is the answer.

### UseContext vs Redux

Instead of Redux we could use the useContext and useReducer hooks, there is a lot of debate about when to use which tools this is a link https://blog.isquaredsoftware.com/2021/01/context-redux-differences/ that gives the best discussion of when to use which.

## Firebase

Can use firebase hooks with https://github.com/csfrequency/react-firebase-hooks/tree/edab3f3f3b5ec01c8aafcc6096755dfcc69e4408/auth#useauthstate

## React Router

- Authentication redirect and guard Example from the React Router Documentation: https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
