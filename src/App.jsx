import "./scss/main.scss";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
/* How do i do a to do app when I have never done a to do app before, let's make it extra challenging
by removing the ability to use google, yeah, this is just gonna be made with MY power and with MY game 

first of all I need to find a way to get the user's info, or atleast what the user wrote out, you would probably put it in a state
but do you need a state for every time that an input is made?
I don't think so, I think the state will store all of our data

Let's use useState for our data, and we will have an ARRAY of OBJECTS

and in the OBJECT will have 2 values
1 is the USER INPUT TODO
2 is the STATUS OF THE INPUT (0 for undone, 1 for undone*/
