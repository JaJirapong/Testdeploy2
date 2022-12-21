export default function Home() {
    return (
      <>

     {/* Hello Contaim Start*/}
    <div className="container contain testHome">
      <div className="row align-item-center ">
        
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-pading">
           <div className="slider-content ">
            <div className="animate-title">
              <h1> Hello I'm Jirapong Sadomph </h1>
              <div className="word"> I'm a junoir React Developper</div>
            </div>
            <p>
              Hi ! I'm Jirapong, I'm React Baby Junior Developper and This is my site! That has infomation about me!
              this is my first time using Boostrap it kind a Hard!!
            </p>
            <div>
             <p className="btn banner-btn"> Download Me !! </p>
            </div>
           </div>
        </div>

        <div className="col">
          <div className="slider-img-box d-flex justify-content-end">
         <img src="./image/FeelGood.gif" className="img-fluid" alt="meImg" />
         </div>
        </div>

      </div>
    </div>
    {/* Hello Contaim END*/}
 
    {/* About Contaim Start*/}
    <div className="container about-contain-padding">
          <div className="row">
              <div className="col col-12 col-md-10 col-lg-8 m-auto">
                <div className="section-inner-content text-center">
                  <div className="section-title">
                    <h2> About ME !! </h2>
                    <span > ------------------------------------------- </span>
                    <h6> I love to Play a game it make me relax </h6>
                 </div>
                </div>
              </div>

              
          </div>
    
    <div className="row ">
    <div className="col">
        <div className="img-box"> 
          <img src="./image/pepe-puch.png" className="img-fluid" alt="meImg" />
        </div>
    </div>


    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <div className="content-area ">
                <div className="inner-title">
                  <h1> I'm Jirapong Sadomph </h1>
                  <h3> A junoir React Developer  </h3>
               </div>

               <div>
                  <div>
                    <p> i play game a lot and often have a headache some time I don't know why it happen some time i know but don't worry am not die hehe!!</p>
                  </div>
                  <hr />
                  <div>
                   Personal Info
                  </div>
                  <div className="info-list d-flex justify-content-between align-items-center">
                   <ul>
                    <li>
                     Name: Jirapong
                    </li>
                    <li>
                     Age: 22 Years
                    </li>
                    <li>
                     Nationality: Thailand
                    </li>
                    <li>
                     Language: Thai
                    </li>
                   </ul>

                   <ul>
                    <li>
                      Address: 102541339557
                    </li>
                    <li>
                      Phone: 1728-5398-11
                    </li>
                    <li>
                      Email: kookoo4129@gmail.com
                    </li>
                    <li>
                      Freelance: NO
                    </li>
                   </ul>
                  </div>
                  <button type="button" className="btn btn-danger"> Download Me!! </button>
                </div>
              </div>
      </div>
      </div>
     </div>
     {/* About Contaim END*/}

      
     
     {/* Experien Contaim Start*/}
     <div className="section-spacing  Experien Section!!">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-10 col-lg-8 m-auto">
            <div className="section-inner-content text-center">
              <div className="section-title">
                <h2> Golden Experien & Education !!  </h2>
                <span>------------------------------------------------------</span>
              </div>
              <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
            </div>
          </div>

          <div className="col-12">
             <div className="ex">
               <div>
                 <h4> Education </h4>
                 <ul className="d-flex justify-content-between ">
                  <li className="col">
                     <span> โรงเรียนบ้านดินทรายอ่อน </span>
                     <p> โรงเรียนบ้านดินทรายอ่อน อนุบาล3 - ม.3 </p>
                  </li>
                  <li className="col">
                     <span> โรงเรียนสรบุญเรืองวิทยาคาร </span>
                     <p> โรงเรียนศรีบุญเรื่องวิทยาคาร ม.4-ม.6 </p>
                  </li>
                  <li className="col">
                     <span> มหาวิทยาลัยเกษตรศาสตร์วิทยาเขตเฉลิมพระเกียรติจังหวัดสกลนคร </span>
                     <p> ศึกษาอยู่ ณ ปัจจุบัน </p>
                  </li>

                  
                 </ul>
               </div>
             </div>
          </div>


        </div>
      </div>
     </div>

     {/* Experien Contaim END*/}

      </>

    )
}