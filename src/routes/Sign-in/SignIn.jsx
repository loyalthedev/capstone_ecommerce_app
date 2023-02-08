import { signInWithGooglePopup } from '../../utils/firebase/Firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser} className="bg-blue-500 mt-2 text-white rounded px-4 py-2">Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn