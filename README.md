# Install and run application - guide

- run: "git clone https://github.com/ZeroOneData/react-smart-tv.git" from your command line 
- change into project directory [cd react-smart-tv]
- run: "npm install"
- run: "npm start"


## Welcome to the SmartTube application - Smart TV browsing 

This project is a smart tv application that leverages ReactJs to deliver a state-of-the-art user experience as well as mind-bending performance.

### Features

* 2 pages - Home and Topics - showcasing navigation, use of higher order components, use of history() object
* a layout component wrapper
* a persistent collapsabile sidedraw - each item in the drawer list is fetched dynamically from the UnSplash API and rendered dynacially into the drawer
* a reusable Carousel component
* data(images) are fetched dynamically from the Unsplash API and dynamically added into the carousel
* clickable event tied to each individual image in the carousel- opening a dialog displaying the corresponding image instance along with the image title
  and a shout-pout credits to the author of that particular photograph. - all this content creation is done dynamically
* custom fetch hook useFetch() - this abstarcts the logic for fetching the data from the Unsplash api and makes it reuasable across the application
* error handling feedback via stylish material ui
* logic and accompanying ui components to deal with loading and initialization states
* custom theming and color scheme
* light and dark ui mode
* crediting to photograph authors - as requested by Unsplash

### `Features`

Reusable custom and imported react compnents
state management across both child and parent components
API interaction via HTTP requests and dealing with return data appropriately
best practices and clean code
use of react hooks 
custom hooks
react material ui
styled-components
Navigation
Error handling
