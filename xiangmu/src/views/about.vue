<style>
 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
 }
 .header{
   width:100%;
   height:120px;
   position:relative;
   background-color:#94304f; 
 }
 .header .logo{
    position:absolute;
    font-size:40px;
    font-weight: 600;
    color: #fff;
	  font-family: 'Poiret One', cursive;
    top:37px;
    left:120px;
 }
 .header ul{
    position:absolute;
    top:50px;
    right:135px;
 }
 .header ul li{
   display:inline-table;
 }
 .header ul li a{
   font-size: 1.5em;
   margin: 0 0.5em;
   text-decoration: none;
   color: #fff;
   font-family: 'Poiret One', cursive;
 }
 .header ul li a:hover {
  color: #E5CE56;
}
.header ul li a.active {
  color: #E5CE56;
}
.hun1{
  width:100%;
  height:430px;
  display:flex;
}
.hun1 .dl{
 width:25%;
 height:430px;
}
.hun1 .dz{
  width:50%;
  height:430px;
}
.hun1 .dr{
  width:25%;
  height:430px;
} 
.hun1>div.dl>img.i1{
  width:100%;
  height:430px;
}
.hun1>div.dz>div>img.i2{
  width:50%;
  height:213px;
}
.hun1>div.dz>div>img.i3{
  width:50%;
  height:213px;
}
.hun1>div.dz>div>img.i4{
  width:100%;
  height:217px;
  margin-top:-4px;
}
.hun1>div.dr>div>img.i5{
  width:100%;
  height:215px;
}
.hun1>div.dr>div>img.i6{
  width:100%;
  height:215px;
  margin-top:-4px;
}
.hunz{
   width:100%;
  height:1000px;
  background-image:url("../../public/images/footer-bg.jpg");
  position:relative;  
}
.hunz>h3{
   font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 1.5em;
    color: #94304f;
    font-weight: 600;
    position:absolute;
    left:37%;
    top:70px;
}
.hunz>div.hus{
  position:absolute;
  display:flex;
  justify-content:space-between;
  width:88%;
  height:290px;
  left:10%;
  top:150px;
}
.hunz>div.hus>div.husl{
  width:35%;
  height:290px;
}
.hunz>div.hus>div.husl>img{
  width:435px;
  height:290px;
}
 .hunz>div.huns>div.husr{
  width:45%;
  height:290px;
 }
.hunz>div.hus>div.husr>h4{
    font-size: 1.3em;
    text-transform: uppercase;
    margin-bottom: 0.5em;
    color: #151515;
    font-weight: 700;
    text-align: left;
}
.hunz>div.hus>div.husr>p{
   font-size: 1.1em;
    color: #555;
    line-height: 1.8em;
    text-align: left;
}
.hunz>h3.hz{
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 1.5em;
    color: #151515;
    font-weight: 600;
    text-align: center;
    position:absolute;
    left:41%;
    top:540px;
}
.hunz>div.husz{
   position:absolute;
   display:flex;
   width:80%;
   height:385px;
   left:10%;
   top:570px;
}
.hunz>div.husz>div.husz_l{
  width:50%;
  height:380px;
}
.hunz>div.husz>div.husz_l>div.husz_l1{
  display:flex;
  align-items:center;
  margin-top:20px;
}
.hunz>div.husz>div.husz_l>div.husz_l1>h4{
   font-size: 3em;
    text-align: center;
    border-radius: 10px;
    padding: 25px 14px;
    background: #ffb449;
    color: #fff;
    border: none;
}
.hunz>div.husz>div.husz_l>div.husz_l1>div.husz_l1-1>h4{
    font-size: 1.3em;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.2em;
}
.hunz>div.husz>div.husz_l>div.husz_l1>div.husz_l1-1>p{
    font-size: 1.1em;
    color: #797272;
}
.hunz>div.husz>div.husz_r{
  width:50%;
  height:380px;
}
.hunz>div.husz>div.husz_r>div.husz_r1{
  display:flex;
  align-items:center;
  margin-top:20px;
}
.hunz>div.husz>div.husz_r>div.husz_r1>h4{
   font-size: 3em;
    text-align: center;
    border-radius: 10px;
    padding: 25px 14px;
    background: #ffb449;
    color: #fff;
    border: none;
}
.hunz>div.husz>div.husz_r>div.husz_r1>div.husz_r1-1>h4{
    font-size: 1.3em;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.2em;
}
.hunz>div.husz>div.husz_r>div.husz_r1>div.husz_r1-1>p{
    font-size: 1.1em;
    color: #797272;
}
.advantage1:hover {
  color: #94304f;
  background: #fff;
    transition: 0.5s all;
}
.advantage2:hover{
color: #94304f;
  background: #fff;
    transition: 0.5s all;
}
</style>
<template>
<div>
 <div class="header" id="d1">
    <p class="logo">
     Love Hearts
    </p>
     <ul>
      <li><a href="/test">首页</a></li>
      <li><a href="/about">关于</a></li>
      <li><a href="#">业务</a></li>
      <li><a href="/hualang">画廊</a></li>
      <li><a href="#">事件</a></li>
      <li><a href="#">联系</a></li>
     </ul>
   </div>  
  <div class="hun1">
   <div class="dl">
    <img src="../../public/images/img1.jpg" class="i1"/> 
   </div>
   <div class="dz">
     <div>
      <img src="../../public/images/img2.jpg" class="i2"/>
      <img src="../../public/images/img3.jpg" class="i3"/>
     </div>
     <div>
      <img src="../../public/images/img5.jpg" class="i4"/>
     </div>
   </div>
   <div class="dr">
    <div>
     <img src="../../public/images/img4.jpg" class="i5" />
    </div>
    <div>
     <img src="../../public/images/img6.jpg" class="i6" />
    </div>
   </div>
  </div>
  <div class="hunz">
    <h3>IN A NUTSHELL ABOUT US</h3>
    <div class="hus">
      <div class="husl">
       <img src="../../public/images/p1.jpg">
      </div>
      <div class="husr">
       <h4>VARIUS MAURIS TINCIDUNT URNA SUSCIPIT ALIQUAM ELEIFEND</h4>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nunc id lacus gravida ultricies. Nulla consectetur maximus sem vel aliquet. Donec blandit condimentum varius. Mauris tincidunt, urna suscipit aliquam eleifend, augue metus maximus sapien, eu mollis tellus massa a mauris. Donec vulputate est velit, eu gravida ex sagittis eget. Integer sit amet faucibus libero. Duis sagittis gravida mauris, aliquet volutpat lorem ullamcorper ac. Phasellus massa velit, dictum in nisi vitae, gravida cursus nibh. In at metus aliquet, gravida nunc eget, lacinia purus. Sed a mi mollis, faucibus erat. Vivamus at facilisis tortor. Integer condimentum lectus sit amet 
       </p>
      </div>
    </div>
    <h3 class="hz">OUR ADVANTAGES</h3>
    <div class="husz">
     <div class="husz_l">
      <div class="husz_l1 advantage1">
       <h4>01</h4>
       <div class="husz_l1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>  
      </div>
      <div class="husz_l1 advantage1">
        <h4>02</h4>
        <div class="husz_l1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>   
      </div>
      <div class="husz_l1 advantage1">
        <h4>03</h4>
        <div class="husz_l1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>  
      </div>
     </div>
     <div class="husz_r">
      <div class="husz_r1 advantage2">
        <h4>04</h4>
        <div class="husz_r1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>  
      </div>
      <div class="husz_r1 advantage2">
        <h4>05</h4>
        <div class="husz_r1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>  
      </div>
      <div class="husz_r1 advantage2 ">
        <h4>06</h4>
        <div class="husz_r1-1">
        <h4>Regal and Baquacil Chemicals </h4>
        <p>How wonderful it is that nobody need wait a singlemoment before starting to improve the world.</p>
       </div>  
      </div>
     </div>
    </div>
  </div>
</div> 
</template>
<script>
  export default({
		data(){
			return{}
		},
		methods:{
		},
		created(){
		},
		components:{
		},
		props:[]
	})  
</script>