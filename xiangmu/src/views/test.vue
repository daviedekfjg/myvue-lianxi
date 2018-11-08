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
.hun2{
  width:100%;
  height:180px;
  display:flex;
}
.hun2>div.hl{
  width:729px;
  height:145px;
  margin-top:50px;
  margin-left:150px;
  position:relative;
  border-right:1px solid #ccc;
}
.hun2>div.hl>img{
  position:absolute;
  left:0;
  top:0;
}
.hun2>div.hl>h3{
   font-size: 1.5em;
   font-weight: 600;
   text-transform: uppercase;
   position:absolute;
   left:220px;
   top:30px;
}
.hun2>div.hl>p{
  width:518px;
  height:40px;
  font-size: 1em;
  color: #555;
  position:absolute;
  left:192px;
  top:60px;
}
.hun2>div.hr{
  width:300px;
  height:145px;
  margin-top:50px;
  margin-left:0;
  position:relative;
}
.hun2>div.hr>a{
  background: #ffb449;
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: 1.5em;
  font-weight: 600;
  color: #fff;
  border-radius: 7px;
  border-bottom: 2px solid #8E580C;
  position:absolute;
  left:60px;
  top:40px;
}
.hun3{
  margin-top:50px;
  width:100%;
  height:1100px;
  background-image:url("../../public/images/footer-bg.jpg");
   position:relative;
}
.hun3 h4{
    width: 15%;
    background: #fff;
    padding: 0.5em 1em;
    color: #999;
    font-size: 1.5em;
    position:absolute;
    top:50px;
    left:43%;
}
.hun3>div.hz{
  width:80%;
  height:470px;
  position:absolute;
  top:190px;
  left:10%;
}
.hun3>div.hz>div.hzs{
  display:flex;
  justify-content:space-between;
}
.hun3>div.hz>div.hzs>a>img{
  border-radius: 5px;
  width:255px;
  height:218px;
}
.hun3>div.hz>div.hzx{
  margin-top:20px;
  display:flex;
  justify-content:space-between;
}
.hun3>div.hz>div.hzx>a>img{
  border-radius: 5px;
  width:255px;
  height:218px;
}
.hun3>div.hz>div.hzs>a.pic-grid img:hover {
  opacity: 0.4;
  cursor: pointer;
}
.hun3>div.hz>div.hzx>a.pic-grid img:hover {
  opacity: 0.4;
  cursor: pointer;
}
.hun3>h4.hr{
    width: 15%;
    background: #fff;
    padding: 0.5em 1em;
    color: #999;
    font-size: 1.5em;
    position:absolute;
    top:700px;
    left:43%;
}
.hun3>div.hzsx{
  width:80%;
  height:470px;
  position:absolute;
  top:800px;
  left:10%;
}
.hun3>div.hzsx{
  margin-top:20px;
  display:flex;
  justify-content:space-between;
}
.hun3>div.hzsx>div>img{
  border-radius: 5px;
  width:255px;
  height:218px;
}
</style>
<template>
<div>
 <div class="header" id="d1">
    <p class="logo">
     Love Hearts
    </p>
     <ul>
      <li><a href="#">首页</a></li>
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
 <div class="hun2">
  <div class="hl">
   <img src="../../public/images/img7.jpg">
   <h3>sonjoe</h3>
   <p>lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus</p>
  </div>
  <div class="hr">
      <a>Follow this user</a>
  </div>
 </div>
 <div class="hun3">
   <h4>January <br> 2015</h4>
   <div class="hz">
     <div class="hzs">
      <a class="pic-grid">
       <img src="../../public/images/img8.jpg"/>
      </a>
       <a class="pic-grid">
       <img src="../../public/images/img9.jpg"/>
      </a>
       <a class="pic-grid">
       <img src="../../public/images/img10.jpg"/>
      </a>
       <a class="pic-grid">
       <img src="../../public/images/img11.jpg"/>
      </a>
     </div>
     <div class="hzx">
       <a class="pic-grid">
       <img src="../../public/images/img12.jpg"/>
      </a>
      <a class="pic-grid">
       <img src="../../public/images/img13.jpg"/>
      </a>
      <a class="pic-grid">
       <img src="../../public/images/img14.jpg"/>
      </a>
      <a class="pic-grid">
       <img src="../../public/images/img15.jpg"/>
      </a>
     </div>
   </div>
    <h4 class="hr">January 2015</h4>
    <div class="hzsx">
      <div>
       <img src="../../public/images/img16.jpg"/>
      </div>
      <div>
       <img src="../../public/images/img17.jpg"/>
      </div>
      <div>
       <img src="../../public/images/img18.jpg"/>
      </div>
      <div>
       <img src="../../public/images/img19.jpg"/>
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
