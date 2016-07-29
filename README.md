# Fronted base configuration
The base configuration that I use in my frontend projects.

##Setup
Before running npm install make sure that you have PhantomJS and eslint installed globally. If you want to use another karma launcher just remove the karma-phantomjs-launcher package from the package json and feel free to add the one you prefer.

Once all the dependencies are installed you can run the script 'tests' from the package json by running
```npm run tests
```
in the command line and check that the test environment has been properly set up.

##Thanks to
Thanks to the airbnb team for sharing their eslint configuration and to Wes Bos for sharing his eslint pre-commit hook configuration.