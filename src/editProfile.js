import React from 'react';
import './edit.css';
import App from './App.js';

class editProfile extends React.Component{
  constructor(props){
     super(props);
     this.state={



     }
  }


turn(){
  this.props.history.push('/');
}


render(){
  return (
    
   <div>
        <div>
        <nav className="navbar navbar-expand-md bg-white navbar-white disabled-page">
          <a className="navbar-brand nav-gap-1 " href="#">
             <img className="logo" src="icon.png" alt="logo"/>
            <label className="ml-2 logo-name">gopick</label>
           </a>

                <form className="form-inline">

               <span className="searchContainer">
                     <input className="search" type="search" placeholder=" Search Products & Reviews" name="" />

               </span>
               </form>

          <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
           
            <ul className="navbar-nav  ">
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"> <i className="fa fa-home m-1"></i>My Feed</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link disabled " href="#"> <i className="fa fa-gift m-1"></i>Rewards</a>
                </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#"> <i class="fa fa-bell" aria-hidden="true"></i> </a>
              </li>
               <li className="nav-item">
                <a className="nav-link disabled" href="#"><img className="profile_tiles" src="profile_tiles.png" alt="logo"/></a>
              </li>
              
               <li className="nav-item">
                <a className="nav-link post disabled" href="#">Post Review</a> 
              </li>
            </ul>
          </div>
        </nav>
        </div>
  
      <div>
        <section>
             <img className="title_img disabled-page" src="city.jpg" alt="logo"/>
            <h1 className="changeHeader"><b>Change Header Photo</b></h1>
        </section>
        </div>

        <div>
            <div className="row">

              <div className="col-1"></div>
              <div className="col-2 ">


                  <div className="profile_cards">
                  <div>
                  <img className="profile_imageDisabled disabled-pic" src="elon.jpg" alt="logo"/>
                  <label className="changePic"><b>change Profile pic</b></label>
                  </div>
                 
                  <div className="container editDetails">
                  <form className="">
                  <div class="">
                    <p  class="form-control edits">Elon Musk</p>
                  </div>
                  <p className="text-primary">@elonMusk</p>
                  <div class="">
                    <p  class="form-control edits"> Entrepreneur. Business Magnet. CEO Spacex, Tesla, SolarCity. Designer.</p>
                  </div>
                  <div class="">
                    <p  class="form-control edits">Silicon Valley</p>
                  </div>
                  <div class="">
                    <p  class="form-control edits">Website</p>
                  </div>
                  <div className="text-center">
                  <button className="text-danger update" onClick={this.turn.bind(this)}>update</button>
                  </div>

                </form>
                </div>
                </div>


              </div>
              <div className="col-3 disabled-page">

              <div className="mt-4">
             <label><b>Elon's Reviews</b></label>

             <div className="newsFeed">
             <p className="pt-2"><h5><b>&#9996;-It's all about the amazing Style and Battery</b></h5></p>
             <img className="img-circle ml-1" src="tesla.png"/>
             <label className="ml-1 mb-0"><h6>The Tesla</h6></label>
             <p className="ml-5 text-muted small reviews">12K Reviews</p>

             <p className="postDetails">The Tesla Model 3 is an electric four-door sedan developed by Tesla.[7] The
              Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 240 miles
               (386 km) and the Long Range versions deliver 310 miles (499 km).[3]Tesla stated that the Model
              3 carries full self-driving hardware to be optionally enabled at a future date.</p>
             <div className="pr-2 pb-2">
             <img className="postImages" src="modelS3.jpg"/>
             </div>
             <div className="mt-2 pb-2">
             <i class="fa fa-star pr-2" aria-hidden="true"></i>
             <label>3k</label>
             <div className="float-right">
             <img className="iphone " src="iphone.jpg"/>
             <label className="small pr-2"><b>Apple iphone Reviews</b></label>
             </div>
             </div>
             </div>
            </div>


              </div>
              <div className="col-5"></div>
             
           </div>
        </div>
 


   </div>
  );
}
}

export default editProfile;



