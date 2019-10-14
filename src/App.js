import React from 'react';
import './App.css';
import editProfile from './editProfile.js';


class App extends React.Component{
  constructor(props){
     super(props);
     this.state={



     }
  }
  editSend(){
  this.props.history.push('/editProfile');
}
render(){
  return (
    
   <div>
        <div>
        <nav className="navbar navbar-expand-md bg-white navbar-white">
          <a className="navbar-brand nav-gap-1 " href="#">
             <img className="logo" src="icon.png" alt="logo"/>
            <label className="ml-2 logo-name">gopick</label>
           </a>

                <form className="form-inline" action="/action_page.php">

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
                  <a className="nav-link active" href="#"> <i className="fa fa-home m-1"></i>My Feed</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link disabled " href="#"> <i className="fa fa-gift m-1"></i>Rewards</a>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <i class="fa fa-bell" aria-hidden="true"></i>

        </a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#"><img className="profile_tiles" src="profile_tiles.png" alt="logo"/></a>
              </li>
              
               <li className="nav-item">
                <a className="nav-link post" href="#">Post Review</a>

               
              </li>
            </ul>
          </div>
        </nav>
        </div>
  
      <div>
        <section>
             <img className="title_img" src="city.jpg" alt="logo"/>

        </section>
        </div>

        <div>
            <div className="row">
                  <div className="col-3">
                  
                  <div className="profile_card">
                  <div>
                  <img className="profile_image" src="elon.jpg" alt="logo"/>
                  </div>

                  <div className="userDetails" >
                   
                  <label className="profile_Name">Elon Musk</label>
                  <p className="text-muted">@elonMusk</p>
                  <button className="edit_button" onClick={this.editSend.bind(this)}>Edit Profile</button>
                   
                 <div className="achive">
                  <p className="text-secondary"><span>Entrepreneur.</span> <span>Business Magnet.</span> <span>CEO Spacex, Tesla, SolarCity.</span>
                  <span> Designer.</span>
                  </p>
                  </div>
                  <div> <a href="https://www.tesla.com/elon-musk"><i class="fa fa-link" aria-hidden="true"></i>
                  tesla.com/elon-musk</a> </div>
                  
                  <div className="">
                  <label className="text-muted pt-3 stats small ">STATS</label><hr className="statshr"/>
                  </div>

                  <div className="row statsRow">  

                  <div className="col-4">
                    
                    <label><b>5k</b></label><br/>
                    <label>Reviews</label>

                  </div>

                   <div className="col-4">
                    
                    <label><b>10M</b></label><br/>
                    <label>Views</label>

                  </div>

                   <div className="col-4">
                    
                    <label><b>1M</b></label><br/>
                    <label>Upvotes</label>

                  </div>

                   </div>


                  </div>
                  <hr className="lasthr"/>

                  <div className="row lastrow">  

                  <div className="col-6">
                    
                    <label><b>5M</b></label><br/>
                    <label>Follwers</label>

                  </div>

                   <div className="col-6">
                    
                    <label><b>0</b></label><br/>
                    <label>Following</label>

                  </div>

                   </div>


                  </div>
            </div>

            <div className="col-3">
            <div className="mt-4">
             <label><b>Elon's Reviews</b></label>
             <label className="pl-4 float-right text-danger draft small">Saved Drafts</label>

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

            <div className="col-3"></div>
             

            <div className="col-3">
            <label className="mt-4 top text-dark"><b>Top Reviewers</b></label>
             <div className="suggestion">
            
             <div className="mt-3 pr-2">
             <img className="img-circle ml-1" src="f1.jpg"/>
            <label className="ml-1 mr-1"><h6>Profile_Name1</h6></label>
            <button className="follow_button float-right text-danger small">Follow</button>
            <label className="ml-1 text-muted small folRev">12K Reviews</label>

             </div>
            
              <div className="pr-2">
             <img className="img-circle ml-1" src="f1.jpg"/>
            <label className="ml-1 mr-1"><h6>Profile_Name2</h6></label>
            <button className="follow_button float-right text-danger small">Follow</button>
            <label className="ml-1 text-muted small folRev">12K Reviews</label>
             </div>
            
              <div className="pr-2">
             <img className="img-circle ml-1" src="f1.jpg"/>
            <label className="ml-1 mr-1"><h6>Profile_Name3</h6></label>
            <button className="follow_button float-right text-danger small">Follow</button>
            <label className="ml-1 text-muted small folRev">12K Reviews</label>
             </div>

              <div className="pr-2">
             <img className="img-circle ml-1" src="f1.jpg"/>
            <label className="ml-1 mr-1"><h6>Profile_Name4</h6></label>
            <button className="follow_button float-right text-danger small">Follow</button>
            <label className="ml-1 text-muted small folRev">12K Reviews</label>
             </div>
             </div>
               
            <div className="copy">
            <label className="text-muted pl-2 small">@ copy rights</label>
            <label className="text-muted pl-2 small">Legoto</label>
            <label className="text-muted pl-2 small">About</label>
            <label className="text-muted pl-2 small">Help</label>
            <label className="text-muted pl-2 small">Contact </label>
         </div>

            </div>
           </div>
        </div>
 


   </div>
  );
}
}

export default App;


