import Wordle from "./components/Wordle/Wordle.jsx";
import {Toaster} from "react-hot-toast";
import WordleContextProvider from "./context/WordleContext.jsx";

const App = () => {

  return (
      <>
        <Toaster
            position="top-center"
            toastOptions={{
              duration: 2000,
              style: {
                background: "rgba(43,49,57,.8)",
                color: "#d4d4d4",
                border: "1px solid rgba(255,255,255,.15)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                padding: "15px 21px",
                fontSize: "22px",
                boxShadow: "none",
                marginTop: "100px",
              },
            }}
        />
        <WordleContextProvider>
            <Wordle />
        </WordleContextProvider>
      </>

  )
}

export default App