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
.nei{
  width:100%;
  height:1200px;
  background-image:url("../../public/images/footer-bg.jpg");
  position:relative;  
}
.nei>h4{
    position:absolute;
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 1.5em;
    color: #94304f;
    font-weight: 600;
    text-align: center; 
    top:50px;
    left:43%;
}
.nei>div.nz{
  width:80%;
  height:950px;
  position:absolute;
  top:190px;
  left:10%;
}
.nei>div.nz>div.nzs{
  display:flex;
  justify-content:space-between;
}
.nei>div.nz>div.nzs>a>img{
  border-radius: 5px;
  width:350px;
  height:300px;
}
.nei>div.nz>div.nzs>a img:hover {
  opacity: 0.4;
  cursor: pointer;
}
.nei>div.nz>div.nzz{
  margin-top:20px;
  display:flex;
  justify-content:space-between;
}
.nei>div.nz>div.nzz>a>img{
  border-radius: 5px;
  width:350px;
  height:300px;
}
.nei>div.nz>div.nzz>a img:hover {
  opacity: 0.4;
  cursor: pointer;
}
.nei>div.nz>div.nzx{
  margin-top:20px;
  display:flex;
  justify-content:space-between;
}
.nei>div.nz>div.nzx>a>img{
  border-radius: 5px;
  width:350px;
  height:300px;
}
.nei>div.nz>div.nzx>a img:hover {
  opacity: 0.4;
  cursor: pointer;
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
  <div class="nei">
   <h4>gallery</h4>
   <div class="nz">
    <div class="nzs">
     <a>
      <img src="../../public/images/p19.jpg">
     </a>
     <a>
      <img src="../../public/images/p11.jpg">
     </a>
     <a>
      <img src="../../public/images/p12.jpg">
     </a>
    </div>
    <div class="nzz"> 
     <a>
      <img src="../../public/images/p13.jpg">
     </a>
     <a>
      <img src="../../public/images/p14.jpg">
     </a>
     <a>
      <img src="../../public/images/p15.jpg">
     </a>
    </div> 
    <div class="nzx">
     <a>
      <img src="../../public/images/p16.jpg">
     </a>
     <a>
      <img src="../../public/images/p17.jpg">
     </a>
     <a>
      <img src="../../public/images/p18.jpg">
     </a>
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