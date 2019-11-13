<template>
<div class="footer">
        <b-container fluid class="px-2 pt-3 footer-col">
          <b-row> 
           <b-col lg="3">
           <div class="footer-title px-3 pt-1" id="a">
           <span>Where's <br> dat <br> Foodtruck at?</span> </div>
           </b-col>
           <b-col lg="6" class="copyright" id="b"><p style="color: darkgrey">© Copyright -  Where's dat Foodtruck at? - 2019 by Tammy Chan</p></b-col> 
           <b-col lg="3" id="c">
            <b-row>
              <b-col md="6"> 
                <ul class="no-bullets">
               <a href="#"><li>About </li></a>
                <a href="#"><li>Contact </li> </a>
                 <router-link to="/register"><li>Register</li></router-link>
               </ul>
               </b-col>
                <b-col md="6">
                   <ul class="no-bullets"> 
                <a href="#"><li>Private Policy </li></a>
              <a href="#"> <li>Terms and Conditions </li></a>
                </ul>
              </b-col>
            </b-row>
             </b-col>    
          </b-row>
          </b-container>
        </div>
</template>

<script>
export default {
    name:"app-footer",  
}
</script>

<style>
.footer {
  flex-shrink: 0;
  background-color:rgb(88, 88, 88);
  margin-top:20px;
}

.no-bullets{
  list-style:none;
}

.no-bullets li {
  line-height:2rem;
  color: rgb(255, 255, 255);
  font-size: 14px;
}

.no-bullets li:hover{
    color:grey;

}

.no-bullets a:hover{
  text-decoration: none;
}

.copyright{
  display: flex;
  width: 50%;
  height: auto;
  margin: auto;
}

.copyright p{
  margin:auto;
  text-align:center;
}

.footer-title{
  color: rgb(255, 255, 255);
font-family: 'Ultra', serif;
font-size: 18px;
}


@media (max-width: 990px){
.footer-title {
    text-align: center;
  }
.footer-col{
          display:flex;
          flex-flow: column;
        }
#a{order:1;}
#b{order:3;}
#c{order:2;
    text-align: center;
    margin-right: 34px;}
.copyright{
  padding-bottom: 10px;
}
};

@media (max-width: 766px){
  #c{
    padding-top: 10px;
  }
}

</style>
