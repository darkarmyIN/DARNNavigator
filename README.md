## DARNNavigator
Easiest way to navigate from any view to any other view in your React Native application. This is for all those beginners who were struggling to find an easy way to use the Navigator and NavigatorIOS isn't sufficient to fulfill their needs.

## Usage
To be clear, this is more of a scheme rather than an external library.<br><br>
* To start with copy the file `DARNNavigator.js` into the root of your project folder.<br>
in your `index.ios.js` or `index.android.js` add the reference<br>
```javascript
var Navigation = require('./DARNNavigator');
```
<br>Delete everything from the return of the render method and add<br>
`<Navigation></Navigation>` and you are all set up.

## Initial View
So to have particular view as your initial view, lets say `Home.js`, give an id inside the constructor of `Home.js` <br>
```javascript
constructor(props) {
  super(props);
  this.state = {
	id:'home'
  }
  }
```
And in the `DARNNavigator.js` add a reference, by <br>
* First add in the beginning <br>
```javascript
var Home = require('./Home');
```
* Assign `initialRouteID = 'home'`<br>
* Inside `navigatorRenderScene` method add case -<br>
```javascript
case 'home':
	return (<Home navigator={navigator} route={route} title="Home"/>);
```
You are now all setup with your initial view. Run your project to test.

## Navigation
Lets say we want to navigate to a `DetailsPage.js` view from Home, then you start by adding the reference to the `DARNNavigator.js` just as you did in case of Initial view.<br>
Give the detailspage an `id` in its constructor.(Lets say 'details')<br>
Add a case for this id in the `DARNNavigator.js` file.<br><br>
To trigger the navigation, <br>
you can either push or replace using <br>
```javascript
this.props.navigator.push({
      id: 'details'   
      });
```
This will push the detailspage over your Home page.

## Passing Data

Push the props while navigating. For eg. <br>
```javascript
this.props.navigator.push({
      id: 'details',
      passProps: {
      // Your Props
      }
      });
```

In the 'details' view, get the data as <br>
```javascript
var dataFromLastPage = this.props.route.passProps;
```
