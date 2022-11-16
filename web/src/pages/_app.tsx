// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// CSS Global
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> 
      <ToastContainer />
    </>
  );
}

export default MyApp;
