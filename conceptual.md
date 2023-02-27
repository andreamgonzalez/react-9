### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
-- React router is the defacto page switching and routing method. Each route is component written in declaratively

- What is a single page application?
-- A single page application is one that contains all of the contents within one page load. Typically this page is divided into sections for navigation but switching via the navbar or by clicking on elements such as modals do not trigger a full page reload.

- What are some differences between client side and server side routing?
-- client side routing involves updating the url params so that the page may call a wanted component without reloading the page. The behavior seems the same as server side but really the way a single page application is handling data is by using statefulness for its components. Server side routing involves a refresh each time a request is sent to the server. While this are pros to making server sde requests they can make for a poor user experience.

- What are two ways of handling redirects with React Router? When would you use each?
-- One could employ the < Route > component using the exact prop for making a client redirect which cleans up the url as a consequence. You could also use the < Redirect > component for handling things such as 404 error handling, this method however does not clean up the the url as the aformentioned method.

- What are two different ways to handle page-not-found user experiences using React Router?
-- As mentioned above for pag not found errors it would be better to use the < Redirect > component. This is ideal becuas eit provides the user the illsuion that they are on non SPA site when it comes to redirect 404 erros by maintaining the url history functional through use of the back button.

- How do you grab URL parameters from within a component using React Router?
-- The url params are considered props for the component referenced and as such are used inside the component to perform whatever logic is desired.

- What is context in React? When would you use it?
-- Context is a way to pass data down to deeper levels without ahving to use props. It creates a global way to share data for a treet of react components.
    i.e. const ThemeContext = React.createContext('light'); -> ThemeContext.Provider value="dark" -> < Button theme="this.context">

- Describe some differences between class-based components and function
  components in React.
-- Class based components and functional components have different ways of handling their state. Class components handle state via the constructor and use lifecycle methods such as the componentDidMount lifecycle to time it rendering. Functional components handle state by using useState and deal with time rendering through the use of hooks such as useEffect.

- What are some of the problems that hooks were designed to solve?
-- Hooks were designed to solved the issue of not being able to handle the time rendering of components in functional components due to the lack of lifecycle methods that were no long available without the React.extendComponent.