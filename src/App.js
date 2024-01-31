
import './App.css';
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import ImageFacebook from "./images/facebook.png";
import ImageInstagrame from "./images/instagrame.png";
import ImageYoutube from "./images/youtube.png";
import Image4 from "./images/image4.png";
import Image5 from "./images/image5.png";
import Image6 from "./images/image6.png";
import Image7 from "./images/image7.png";
import Vector2 from "./images/Vector2.png";
import Vector4 from "./images/Vector4.png";
import Circle from "./images/Circle.png";
function App() {
  return (
    <div className="App">
     <div className="Header">
         <p className='title'>BREAKING NEWS</p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
         <p className="littelTitle">WE ARE LIVE ! </p>
     </div>
      
     <section className="section">
      
      <div className="rightSection">
      <img className='imageTwo' src= {Image2}></img> 
     </div>

     <div className="leftSection">
  <img  className="imageOne"src= {Image1} alt="" /> 
   
     </div>

     {/* <img className='imageThree' src= {Image3}></img>  */}
     </section>
      <div className="writing">
        <p className=' firstText rotated'>We are one people  but we live as if</p>
          <p className=' secondText rotated'>divided everything is connected</p>
      </div>
     <section className='rectangle'>
      <div className="Head1">
        <div className="left">
        <p>LISTEN LIVE</p>
        <p>CONTACT US</p>
        <p>GET THE APP</p>
        </div>
        <div className="right">
            <img className='imageIcon' src= {ImageYoutube}></img>
          <img className='imageIcon' src= {ImageInstagrame}></img>
            <img className='imageIcon' src= {ImageFacebook}></img> 
         
        </div>
      </div>
      <div className='main'>
        <div className='top'>
          <img className='imageVector4' src= {Vector4}></img>
            <img className='imageCinque six' src= {Image6}></img>
               <img className='imageCinque' src= {Image5}></img>
           <img className='imageCinque' src= {Image4}></img>
           <img className='imageVector2' src= {Vector2}></img>
           
        </div>
        <div className='center'>
         <p>FOLLOW FOR MORE</p>
         <p>FOLLOW FOR MORE</p>
         <p>FOLLOW FOR MORE</p>
         <p>FOLLOW FOR MORE</p>
         <p>FOLLOW FOR MORE</p>
          <p>FOLLOW FOR MORE</p>
         <p>FOLLOW FOR MORE</p>
        
         
        </div>
        <div className='bottom'>
          <img className='Circle' src= {Circle}></img>
        <img className='imageCept' src= {Image7}></img>
         
        </div>
      </div>
     </section>
    </div>
  );
}

export default App;
