<!DOCTYPE html>
<html>

<head>
	<!-- need meta viewport tag to allow for css media queries on mobile -->
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>React Import External JSON</title>
	<!-- local css -->
	<style>
		ol {
			margin: 0;
			padding: 0;
			list-style-type: none;
		}

		li {
			display: inline-block;
      padding: 20px;
		}
	</style>
</head>

<body>
	<!-- create an element that can be the root element for your react application -->
	<div id="myApp"></div>

	<!-- load jquery to use for external json loading -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

	<!-- load React - note when deploying, replace "development.js" with "production.min.js". -->
	<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
	<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

	<!-- load babel transpiler to convert React's JSX markup to pure JavaScript
       Note: we only need babel loaded in the browser if we are not using a build system 
       where babel would save pure JS files to be loaded by the browser instead -->
	<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
	<!-- load our custom script with react component 
       Note: the type attribute MUST be set here to allow babel to convert JSX in our 
       script to pure JS! -->
	<script type="text/babel">
    'use strict';

    // define a react page component using traditional pure JS
    function ProjectList(props) {
      // return some output for the component using JSX
      return <div>
          <ol>
            {
              // use map() to loop thru array passed in props.list, creating new element for each array value
              props.list.map( 
                // copy current array value into item and pass to arrow function
                (item,index) => (
                  <li key={index}>
                    {item.firstname}
                  </li>
                )
              )
            }
          </ol>
        </div>;
    }

    // use jQuery to load JSON
    $.getJSON(
      'data.json', 
      function(jsonFromJquery) {
        // after JSON loaded, call react render() to output component into existing element
        // pass properties as attributes: list passes array stored in var jsonFromJquery
        ReactDOM.render(
          <firstname list={jsonFromJquery} />,
          document.getElementById('myApp')
        );
      }
    );
  </script>
</body>

</html>