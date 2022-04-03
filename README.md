# Install and run application - guide

- run: "git clone https://github.com/ZeroOneData/react-smart-tv.git" from your command line 
- change into project directory [cd react-smart-tv]
- run: "npm install"
- run: "npm start"

## Welcome to the SmartTube application - Smart TV browsing 

This project is a smart tv application that leverages ReactJS to deliver a state-of-the-art user experience as well as mind-bending performance.

### Application Features

* A Home page and Topics page - showcasing navigation, use of higher order components, use of history() object and wrapping
* Use of React Router DOM for navigation
* A layout component wrapper
* A persistent collapsabile sidedraw - each item in the drawer list is fetched dynamically from the UnSplash API and rendered into the drawer
* A reusable Carousel component
* Data(images) are fetched dynamically from the Unsplash API and dynamically added into the carousel
* Clickable event tied to each individual image in the carousel - opening a dialog, displaying the corresponding image instance along with the image    title and a shout-out, crediting the author of that particular photograph. - all this content creation is done dynamically
* Custom fetch hook useFetch() - this abstracts the logic for fetching the data from the Unsplash api and makes it reuasable across the application
* Error handling feedback via stylish material ui dialog
* Logic and accompanying ui components to deal with loading and initialization states
* Custom theming and color scheme
* Light and dark ui mode
* Crediting photograph authors - as requested by Unsplash

### Software Engineering Features and Practices

* Reusable custom react compnents
* State management across both child and parent components
* API interaction via HTTP requests and dealing with return data appropriately
* Use of best practices and clean code methodolgies
* Use of react hooks 
* Custom hooks creation and use
* React material ui
* Styled-components
* Navigation
* Error handling
