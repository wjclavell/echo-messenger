
## User Stories

### User story:

- Quinn is a musician that wants to connect with other artists.
- He can register an account with the Cloud Message app to have his login info saved.
- In order to access his inbox, he will input his registered account information into the login form on the landing page.
- Upon logging in, he will see the main inbox, with a list of messages received from senders and a preview of the messages last received or sent from that user.
- To access a conversation, the user can click on the individual conversation in the list and a new view with the conversation between the users will appear.
- A popup text field in the conversation view will either create or update the message from the user upon submission depending on the models used.
- A upper navbar giving the option to select profile settings or to log out of the account.
- A user settings modal that allows user to change their avatar or delete their account.


## Wireframes:

- Mobile
- Web



## MVP Screens:
- Landing Page
- Login 
- Signup
- User Profile



## MVP Components Structure:

### Landing (screen)

Child components: 

- Header / Nav 

    Conditions:

        if loggedIn - shows orange nav) 

        if !loggedIn (landing page) - shows logo
    
- logReg (component)

    Conditions: 

        if isSignIn - shows 'Sign In' in modal title, shows sign in fields (username, password)

        if isSignUp - shows 'Sign Up' in modal title, sign up fields (username, email, password)





## Messenger (screen)



Child components: 

- Header / nav

- Message (component)

    Conditions:

        if isSingleConversation - shows all messages between filtered sender / receiver (sort by latest message at top)

            Child component: 

                genMsgHeader

                    Generic "Messages" with icon to create new message

        if isAllConversations - shows latest message excerpt between each sender / receiver conversation.

            Child component: 

                convoHeader:
                    
                    Avatar/name of receiver who user is in conversation with

            
- Profile (modal)

    Conditions: 

        if isUserProfile - show option to update avatar, username, password, and delete account






## Additional Libraries:
- Bootstrap (modals, nav)





























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
