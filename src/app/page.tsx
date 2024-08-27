
import Link from "next/link";
import { LiaStarSolid } from "react-icons/lia";
import { GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { GrPrevious } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { LuUser2 } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center py-4 px-8 text-[25px] ">
        <div>
          <h1 className=" font-bold text-2xl text-amber-500 font-serif italic">Food House</h1>
        </div>
        <div className="flex items-center space-x-8 ">
          <Link href="/" className="hover:text-pink-950 text-amber-500">
            Home
          </Link>
          <Link href="/restaurant" className="hover:text-pink-950">
            Restaurant
          </Link>
          <Link href="/services" className="hover:text-pink-950">
            Services
          </Link>
          <Link href="/cart" className="hover:text-pink-950">
            Cart
          </Link>
        </div>
        <div>
          <p className=" hover:text-pink-950 text-[15px]">Sign In</p>
        </div>
      </nav>
      <div className="flex items-center gap-[400px]">
      <div className="pl-[300px]">
      <div className=" pt-[200px] ">
      <p className="text-[40px]">Enjoy Delicious <br></br>
        Food In <em className="text-amber-500">Healthy Life</em></p>
      </div>
      <div>
        <p>Tandori Masala is an indian spice blend consisting of a <br></br>
        Variety of spices Tandori masala is an Indian spice blend <br></br>
        consisting of a variety of spices</p>
      </div>
      <div>
        <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-32 mt-[50px]">Order Now</button>
      </div>
      </div>
      <div className=" pt-[200px]">                                                                        
      <img src="/Images/chicken.png" alt="chicken" height={200} width={250}/>
     </div>
      </div>
      <div className="text-center pt-[100px]">
        <p className="italic">Online Store</p>
        <p className="text-[40px]">Popular Foods</p>
      </div>
      <div className="flex space-x-[250px] pl-[120px] ">
        <div>
        <img src="/Images/meat-food.png" alt="fish" height={150} width={200}/>
        <h1 className="font-bold pl-[30px] text-[30px]">Fruit Dish</h1>
        <p className="pl-[50px]">Dinko food</p>
        <div className="flex text-amber-500 pl-[50px] mt-[2px] mb-[5px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-52">Add To Cart $696</button>
        </div>
        <div>
        <img src="/Images/fish.png" alt="fish" height={150} width={200}/>
        <h1 className="font-bold pl-[30px] text-[30px]">Fruit Dish</h1>
        <p className="pl-[50px]">Dinko food</p>
        <div className="flex text-amber-500 pl-[50px] mt-[2px] mb-[5px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-52">Add To Cart $696</button>
        </div>
        <div>
        <img src="/Images/sushi.png" alt="plate of food" height={150} width={200}/>
        <h1 className="font-bold pl-[30px] text-[25px]">Sea fish Dish</h1>
        <p className="pl-[50px]">Dinko food</p>
        <div className="flex text-amber-500 pl-[50px] mt-[2px] mb-[5px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-52">Add To Cart $696</button>
        </div>
        <div>
        <img src="/Images/pizza.png" alt="fish" height={150} width={200} className="mt-[10px]"/>
        <h1 className="font-bold pl-[30px] text-[30px]">PIZZA</h1>
        <p className="pl-[50px]">Dinko food</p>
        <div className="flex text-amber-500 pl-[50px] mt-[2px] mb-[5px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-52">Add To Cart $696</button>
        </div>
      </div>

<div>
      <div className="flex bg-slate-100 w-84 shadow-2xl p-4 absolute top-[1090px] ml-[800px] gap-[30px]">
      <img src="/Images/white-girl.jpg" alt="white girl" height={32} width={42} className="rounded-full" />
      <div>
      <p>Christo Maria</p>
      <p>Healthy and delicious Pizza</p>
      <div className="flex text-amber-500 pl-[50px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        </div>
      </div>
      <div className="flex items-center gap-[400px]">
        <div className="pl-[200px]">
      <div className="pt-[200px]"><button className="bg-amber-500 text-white rounded-md px-4 py-2 w-32 object-cover mt-4">- 50%</button></div>
      <p className="font-bold text-[50px]">Our Special Offer</p>
      <p>Best Cooks and best delivery guys at all your <br></br>Service. Hot tasty food will reach you in 60 minutes</p>.
      <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-48 h-16 flex items-center justify-start">
  See all menu 
  <span className="ml-5 bg-white text-black rounded-md p-1 flex items-center justify-center text-[25px] ">
    <GrNext />
  </span>
</button>
      </div>
      <div>
      <img src="/Images/colealaw.png" alt="coleslaw" height={450} width={400}/>
      </div>
      </div>
      <div className="flex bg-slate-100 w-84 shadow-2xl p-4 absolute top-[1350px] ml-[1300px] gap-[30px]">
      <img src="/Images/hatgirl.jpg" alt="girl with a hat" height={32} width={42} className="rounded-full" />
      <div>
      <p>Christo Maria</p>
      <p>Healthy and delicious Pizza</p>
      <div className="flex text-amber-500 pl-[50px]">
        <LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid />
        </div>
        </div>
      </div>


      </div>

      <div className="text-center mt-[250px]">
        <p>Quality Food 
        <span role="img" aria-label="OK hand">👌</span>
        </p>
      </div>
      <p className="pl-[600px] font-bold text-[60px] italic">Get the best Offers</p>
      <p className="pl-[500px] text-[30px]">The food at your doorstep. Why starve and you have us. You hunger
        <br></br> partner. Straight Out of the oven to your doorstep.
      </p>
      <div className="flex items-center gap-[100px] ml-[120px]">
      <div className="flex items-center mt-[100px] bg-slate-100  shadow-2xl ">
        <div>
          <p className="font-bold text-[30px]">Any Day<br></br>Offers</p>
          <p className="text-[20px]">New Phenomenon<br></br>Burger Taste</p>
          <p className="text-[20px] text-amber-500">$12.90</p>
        <div className="w-8 h-2 bg-amber-500 rounded-full ml-[20px]"></div>
          </div>
        <div className="w-64 h-64 bg-orange-400 rounded-full blur-effect">
        <img src="/Images/burger.png" alt="chicken" height={200} width={200}/>
        </div>
        </div>
        <div className="flex items-center mt-[100px] bg-slate-100  shadow-2xl">
        <div>
          <p className="font-bold text-[30px]">Other Flavours<br></br>Offers</p>
          <p className="text-[20px]">Save room.<br></br>We made salats.</p>
          <p className="text-[20px] text-amber-500">$12.90</p>
          <div className="w-8 h-2 bg-amber-500 rounded-full ml-[20px]"></div>
          
        </div>
        <div className="w-64 h-64 bg-orange-400 rounded-full blur-effect">
        <img src="/Images/vegies.png" alt="chicken" height={50} width={400}/>
        </div>
        </div>

        <div className="flex items-center mt-[100px] bg-slate-100  shadow-2xl">
        <div>
          <p className="font-bold text-[30px]">Find A Poco<br></br>Store near<br></br>You</p>
          <div className="w-8 h-2 bg-amber-500 rounded-full ml-[20px] mt-[50px]"></div>
          
        </div>
        <div className="w-64 h-64 bg-slate-200 rounded-full blur-effect">
        <img src="/Images/location.png" alt="map" height={50} width={400}/>
        </div>
        </div>
      </div>
      <div className="flex mt-[120px] pl-[870px] text-[34px]">
    <div className="text-amber-500"><GoDotFill /></div>
    <div className="text-amber-500"><GoDotFill /></div>
    <div className="text-indigo-200"><GoDotFill /></div>
</div>

<p className="font-bold text-[34px] italic text-center mt-[200px]">Our Service </p>
<div className="flex gap-[150px] pl-[250px] mt-[100px]">
<div>
<img src="/Images/hotel.png" alt="chicken" height={200} width={200}/>
<p className="text-[30px]">55 Restaurants</p>
</div>
<div>
<img src="/Images/wheel.png" alt="chicken" height={200} width={200}/>
<p className="text-[30px]">Good Quality</p>
</div>
<div>
<img src="/Images/car.png" alt="chicken" height={200} width={200}/>
<p className="text-[30px]">Discount System</p>
</div>
<div>
<img src="/Images/bike.png" alt="chicken" height={200} width={200}/>
<p className="text-[30px]">Fast Delivery</p>
</div>
</div>
<p className="mt-[200px] text-center font-bold text-[24px]">Testimonial</p>
<p className="italic text-center font-bold text-[70px]">What Our Clients Say</p>
<p className=" text-center font-bold text-[70px] text-amber-500">,,</p>
<p className="text-center text-[20px] mt-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br></br> 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br></br>
ullamco laboris nisi ut aliquip ex ea commodo  </p>
<div className="flex pl-[750px] mt-[100px]">
<img src="/Images/woman.png" alt="chicken" height={20} width={80} className="rounded-full"/>
<img src="/Images/man.png" alt="chicken" height={20} width={80}/>
<img src="/Images/man.png" alt="chicken" height={20} width={80}/>
<img src="/Images/man.png" alt="chicken" height={20} width={80}/>
<img src="/Images/man.png" alt="chicken" height={20} width={80}/>
</div>
<p className="mt-[100px] text-center font-bold text-[24px]">Mitchell Marsh</p>
<p className=" text-center  text-[24px]">CEO, Bexon Agency</p>
<div className="flex pl-[830px] mt-[50px] gap-[50px] text-[50px]">
  <div className="bg-slate-300 "><GrPrevious /></div>
  <div className="bg-amber-500"><GrNext  /></div>
</div>
<div className="flex">
<div>
<div>
<img src="/Images/phone.png" alt="chicken" height={1000} width={500}/>
</div>
<div className="pl-[180px] mt-[-500px]"  >
  <RxHamburgerMenu />
  </div>
  <div className="pl-[300px] mt-[-20px]">
  <img src="/Images/user.png" alt="chicken" height={20} width={50}/>
  </div>
  <p className="font-bold pl-[180px] pt-[30]">Delicious <br></br>food for you</p>
  <div className="flex items-center gap-[10px] bg-slate-200 w-32 p-2 ml-[200px] ">
  <IoMdSearch /> Search
  </div>
  <div className="flex gap-[10px] pl-[150px]">
    <a  className="text-red-500 underline">All</a>
    <p>Burger</p>
    <p>Pizza</p>
    <p>Rice Bowl</p>
  </div>
  
  <div className="w-32 h-32 bg-slate-200 rounded-full blur-effect ml-[200px]">
  <img src="/Images/burger.png" alt="chicken" height={200} width={200}/>
  </div>
  <p className="font-bold pl-[200px]">Delicious Burger</p>
  <p className="text-red-500 pl-[240px]">$ 1.24</p>
  <div className="flex mt-[8px] pl-[220px] text-[20px]">
    <div className=""><GoDotFill /></div>
    <div className="text-red-500"><GoDotFill /></div>
    <div className=""><GoDotFill /></div>
    </div>
<div className="flex gap-[20px] pl-[200px] mt-[30px]">
  <div><FaHouse /></div>
  <div><FcLike /></div>
  <div><LuUser2 /></div>
  <div><FaClockRotateLeft /></div>
</div>
</div>
<div className="pl-[300px] mt-[100px]">
<p className="text-amber-500 text-[30px]">Download Our App</p>
<p className="font-bold text-[70px] ">It is all Here.<br></br>All in one App</p>
<p className="text-gray-400 text-[20px]">Discover local on-demand delivery or pickup from<br></br> restaurants, nearby grocery and convenience stores,<br></br>and more </p>
<div className="mt-[100px] flex gap-[100px]">
<div className="flex items-center bg-slate-800 rounded-md p-3">
<div className="text-[48px] text-white"><IoLogoApple /></div>
<div>
  <p className="text-white">Download on the </p>
  <p className="text-white font-bold text-[25px] ">App Store</p>
</div>
</div>
<div className="flex items-center bg-slate-800 rounded-md p-3">
<div>
  <img src=" /Images/playstore.png" alt="chicken" height={100} width={100}/>
</div>
<div>
  <p className="text-white">Get It On  </p>
  <p className="text-white font-bold text-[25px] ">Google Play</p>
</div>
</div>
</div>
</div>

</div>
<div className="mt-[200px] flex items-center">
  <div className="pl-[200px]">
  <p className="ont-bold text-[40px] ">Subscribe to our Newsletter</p>
  <p className="text-gray-400 text-[20px]">Subscribe On Our Newsletter To Get Our <br></br>news </p>
  </div>
  <div className="flex pl-[500px]">
    <input className="text-[20px]" type="text" placeholder="Your Email Adress...." />
  <button className="bg-amber-500 text-white rounded-md px-4 py-2 w-48 h-16 flex items-center justify-start text-[20px]">
  Subscribe 
  <span className="ml-5 bg-white text-black rounded-md p-1 flex items-center justify-center">
    <GrNext />
  </span>
</button>
</div>
</div>
<div className="flex bg-slate-950 gap-[200px] pl-[200px]">
<div className="mt-[150px] mb-[100px]">
<p className="text-white text-[30px]">Food House <em className="text-yellow-500 text-[60px]">.</em></p>
<p className=" text-gray-400 text-[20px]">Best Cooks and best delivery guys all<br></br>at your service. Hot tasty food will<br></br> reach you in 60 mins.</p>
<div className="flex gap-[50px] mt-[30px]">
  <div className="text-amber-500 bg-white text-[50px] rounded-md"><BiLogoFacebook /></div>
  <div className="text-amber-500 bg-white text-[50px] rounded-md"><BsTwitter /></div>
  <div className="text-amber-500 bg-white text-[50px] rounded-md"><FaLinkedinIn /></div>
</div>

</div>
<div  className="mt-[200px] mb-[200px]">
  <p className="text-white text-[25px]">Company</p>
  <div className="text-[20px]">
  <p className="text-gray-400">Career</p>
  <p className="text-gray-400">About Us</p>
  <p className="text-gray-400">Blog</p>
  <p className="text-gray-400">Press Info</p>
  <p className="text-gray-400">Features</p>
  </div>
</div>
<div className="mt-[200px] mb-[200px]">
  <p className="text-white text-[25px]">Fudo</p>
  <div className="text-[20px]">
  <p className="text-gray-400">Why Fudo</p>
  <p className="text-gray-400">How It Works</p>
  <p className="text-gray-400">Why Choose Us</p>
  <p className="text-gray-400">Client Stories</p>
  <p className="text-gray-400">Gallery</p>
  </div>
</div>
<div className="mt-[200px] mb-[200px]">
  <p className="text-white text-[25px]">Menu</p>
  <div className="text-[20px]">
  <p className="text-gray-400">Breakfast</p>
  <p className="text-gray-400">Lunch</p>
  <p className="text-gray-400">Dinner</p>
  <p className="text-gray-400">Fast Foods</p>
  <p className="text-gray-400">Drinks</p>
  </div>
</div>
</div>
<div className="flex gap-[200px] pl-[800px] bg-amber-500 text-white text-[20px] pt-[30px] pb-[30px]">
<div>
  <p>Copyright 2021 Besnik All Rights Reserved </p>
</div>
<div className="flex gap-[70px]">
  <p>Terms</p>
  <p>Privacy</p>
  <p>Security</p>
</div>
</div>
    </main>
  );
}

