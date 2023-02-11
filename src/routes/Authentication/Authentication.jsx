
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Authentication = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button
        onClick={logGoogleUser}
        className=""
      >
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
