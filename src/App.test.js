import { auth} from "./firebase-config"
import { signInWithEmailAndPassword } from "firebase/auth"

const {
  UploadGame
} = require("../src/Pages/CreateTestPage")

const {
  updatebalance,
} = require("../src/Pages/GamePage")


describe('Login with correct credentials',() =>{

  test('signInwithemailpassword should login with correct credential',async () => { 
    const user = await signInWithEmailAndPassword(auth,'arunwarrier14@gmail.com','123456');
    expect(user.user).toBeTruthy();
  })
})

describe('Login with incorrect credentials',() => { 
  test('signInwithemailpassword should show error with incorrect credentials', async() => {

  let error = '';
    let user;
    try {
      user = await signInWithEmailAndPassword(auth,'snow5176@gmail.com','123456');      
    } catch (err) {
      error = err.toString();
    }
    expect(user).not.toBeTruthy();
  })
 })





describe('Reward updation ', ()=>{
  test('should return success message on updating rewards balance', () => { 
      const res = updatebalance("0","100");
      expect(res).toEqual("100");
   })
})

describe('Upload test succesfully', ()=>{
  test('should return success message on uploading game details', () => { 
      const res = UploadGame(
        "demodesc","15","100","demotestcases","GodOfOlympus","https://media.istockphoto.com/id/1182383458/vector/gamer-esport-mascot-logo-design.jpg?s=1024x1024&w=is&k=20&c=rUYrM3dNMBTvHQJS3ISd-SXNt5TfoEcwKZgE8B1vPyE=",
        "https://media.istockphoto.com/id/1182383458/vector/gamer-esport-mascot-logo-design.jpg?s=1024x1024&w=is&k=20&c=rUYrM3dNMBTvHQJS3ISd-SXNt5TfoEcwKZgE8B1vPyE=",
        "arunwarrier14@gmail.com");
        // console.log(res);
        // expect(res).toEqual("100");
        expect(res).toBeTruthy();
   })
})