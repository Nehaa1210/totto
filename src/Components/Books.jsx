import React, { useContext } from "react";
import "./Books.scss";
import class6c1 from "../assets/class6c1.pdf";
import { useState } from "react";
import { Booksvalue } from "../context/Bookval";

let data = [
  {
    id: 1,
    name: "JavaScript Course:From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    video_id: "m1Cm1ivOjzU",
    price: 499,
    img: "https://i.pinimg.com/236x/bd/c7/b8/bdc7b856ff45d369b620d8ca33d2d024.jpg",
  },
  {
    id: 2,
    name: "Curso de Typcript do basico!",
    instructor: "Alex Johnson",
    video_id: "lLeZ8Cr2YVM",
    price: 499,
    img: "https://i.pinimg.com/236x/17/fa/44/17fa44e8d7f0d4a341f078b6c94a31ef.jpg",
  },
  {
    id: 3,
    name: "Microsoft Excel!",
    instructor: "Sarah Lee",
    video_id: "WEky7V490Rs",
    price: 350000,
    img: "https://i.pinimg.com/236x/16/75/2c/16752cfbbf3cf83c3a040e1b036692fa.jpg",
  },
  {
    id: 4,
    name: "Web Development Bootcamp!",
    instructor: "David Chen",
    video_id: "PLLLrVKlAVicI6WGNjM1eh4iF_gJPhnOUu",
    price: 499,
    img: "https://i.pinimg.com/236x/ac/81/fa/ac81fa0222923130c64a4d8e585d9600.jpg",
  },
  {
    id: 5,
    name: "Ultimate AWS Certified Cloud!",
    instructor: "Emily Patel",
    video_id: "PLLLrVKlAVicI6WGNjM1eh4iF_gJPhnOUu",
    price: 499,
    img: "https://i.pinimg.com/236x/09/ae/5b/09ae5b5a29d3fb79c77a9ce7df952937.jpg",
  },
  {
    id: 6,
    name: "Introduction to the MongoDB!",
    instructor: "Jonas bro",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/46/60/28/46602828b596035492305c9718e1f57e.jpg",
  },
  {
    id: 7,
    name: "TypeScript do básico ao avançado!",
    instructor: "Jessica Kim",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/03/e7/10/03e7104c93e0d897a64f31a200c8c370.jpg",
  },
  {
    id: 8,
    name: "How to Unlock Your True Potential!",
    instructor: "Daniel Garcia",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/cb/4d/ee/cb4deeaf9d388dfb9c6164ed7e29784a.jpg",
  },
  {
    id: 9,
    name: "Photography Fundamentals for Beginners!",
    instructor: "Samantha Lopez",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/b3/26/e9/b326e93661c459a09c8431737a5602cc.jpg",
  },
  {
    id: 10,
    name: "HTML and CSS for Beginners!",
    instructor: "Kevin Miller",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/17/48/b8/1748b8d49e757abc69a74218120193c8.jpg",
  },
  {
    id: 11,
    name: "Modern Python From The Beginning!",
    instructor: "Olivia Thomas",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/74/33/48/7433481d93c8eeb4d0d52f985b010e6c.jpg",
  },
  {
    id: 12,
    name: "Founder's Guide to Bubble Programming",
    instructor: "Andrew Smith",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/c4/34/48/c43448f22677aac5ab118755a105bd0d.jpg",
  },
  {
    id: 13,
    name: "The Startup Bubble Programming!",
    instructor: "Jennifer Nguyen",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/08/f6/ab/08f6ab55f4fee638c809481861e9993e.jpg",
  },
  {
    id: 14,
    name: "advanced Python Made Easy!",
    instructor: "Matthew Brown",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/30/50/a0/3050a01f9b156e0446a0aaaa3e68c582.jpg",
  },
  {
    id: 15,
    name: "The Complete Strapi Course!",
    instructor: "Amanda Davis",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/c0/6e/d0/c06ed026b6a1a8563340a614d577a756.jpg",
  },
  {
    id: 16,
    name: "Svelte and Firebase!",
    instructor: "Christopher Martinez",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/3a/df/c9/3adfc9857cf757526abe110fe42fe35d.jpg",
  },
  {
    id: 17,
    name: "Angular & NodeJS!",
    instructor: "Rachel Wilson",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/9f/05/3a/9f053aa2aa6e67f697b188fd51128f1c.jpg",
  },
  {
    id: 18,
    name: "Complete NodeJS Developer!",
    instructor: "Jonathan Rodriguez",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/e2/52/21/e252213cc74c860877f6dd0f1a1429d7.jpg",
  },
  {
    id: 19,
    name: "Just Express (with a bunch of node and http)!",
    instructor: "Kelly Lewis",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/65/f8/97/65f897e47b9a8961d01f76492a20bae6.jpg",
  },
  {
    id: 20,
    name: "The Complete Web Development Bootcamp!",
    instructor: "Tyler Mitchell",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/25/86/f2/2586f23530da330c9aa20a0ae993a067.jpg",
  },
  {
    id: 21,
    name: "Ultimate AWS Certified Cloud Practitioner - 2023!",
    instructor: "Ryan Hernandez",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/34/55/6c/34556cfe1c33888acacf05635b48dd16.jpg",
  },
  {
    id: 22,
    name: "Introduction to the MongoDB!",
    instructor: "Lauren Adams",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/75/06/77/75067795c149ab26fd67777000f8d022.jpg",
  },
  {
    id: 23,
    name: "Curso de JavaScript avançado!",
    instructor: "Brandon Green",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/8b/bc/31/8bbc3169e91d25fdd43f9b31306917ee.jpg",
  },
  {
    id: 24,
    name: "How to Unlock Your True Potential!",
    instructor: "Ashley Turner",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/3e/38/87/3e3887f6ac959986ea1970ea2a664f3e.jpg",
  },
  {
    id: 25,
    name: "Photography 1-Hour Crash Course",
    instructor: "Robert Jackson",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/4e/c2/6a/4ec26a66d2721685823f4aeb843079d2.jpg",
  },
  {
    id: 26,
    name: "Build a Website & Launch ONLINE",
    instructor: "Benjamin Taylor",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/d0/c2/04/d0c204e5dd296a9af1928e79e503bf7f.jpg",
  },
  {
    id: 27,
    name: "Modern JavaScript From The Beginning!",
    instructor: "Ryan Hernandez",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/0c/fc/df/0cfcdfe4f4b189fa743a8994462f5940.jpg",
  },
  {
    id: 28,
    name: "The Startup Founder's Guide to Bubble Programming",
    instructor: "Taylor Evans",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/736x/b6/70/4f/b6704f4c1ae1f804f38087e798caa329.jpg",
  },
  {
    id: 29,
    name: "The Startup Founder's Guide to Bubble Programming!",
    instructor: "Benjamin Taylor",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/76/9e/e5/769ee55d6f3380c2112bf0e6adb2ab6c.jpg",
  },
  {
    id: 30,
    name: "The Startup Founder's Guide to Bubble Programming",
    instructor: "Chloe Rivera",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/25/31/a9/2531a9bf8966016b476f8965d5a29b8c.jpg",
  },
  {
    id: 31,
    name: "The Startup Founder's Guide to Bubble Programming!",
    instructor: "Nicholas Stewart",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/55/1a/79/551a79b81ca3d42f9ef6437ecfad669a.jpg",
  },
  {
    id: 32,
    name: "Web Development Made Easy!",
    instructor: "Grace Hall",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/f6/13/0d/f6130d0f556d8ec96d5586c206829ad2.jpg",
  },
  {
    id: 33,
    name: "sStrapi Course - with plugins and deployment!",
    instructor: "Jonathan Moore",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/f5/4d/5e/f54d5eefff95b96e7bd72321c8677920.jpg",
  },
  {
    id: 34,
    name: "Svelte and Firebase: The Full Course (2023)!",
    instructor: "Victoria Baker",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/46/be/32/46be32c09888afc7f43d312ca81ddde6.jpg",
  },
  {
    id: 35,
    name: "The MEAN Stack Guide [2023 Edition]",
    instructor: "Patrick Phillips",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/1c/14/06/1c14064e8b7209da5bc3d859d3f9772f.jpg",
  },
  {
    id: 36,
    name: "Complete NodeJS Develope(GraphQL, MongoDB, + more)",
    instructor: "Allison James",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/6d/4a/c9/6d4ac96baca065d295ec30419eadbed4.jpg",
  },
  {
    id: 37,
    name: "Express In detail.",
    instructor: "Eric Morris",
    video_id: "wwORVr9Og0o",
    price: 499,
    img: "https://i.pinimg.com/236x/d5/12/53/d5125325ce21cf2ac600b4ddd2a0c52e.jpg",
  },
];
function Books() {
  const [dataaa, setdata] = useState(data);

  const { books, setbooks, userlogin } = useContext(Booksvalue);

  const filter_data = (e) => {
    if (e.target.value == "") {
      setdata(data);
    } else {
      const fd = data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setdata(fd);
      console.log(fd);
    }
  };

  const addbook = (item) => {
    // console.log(item);
    if (userlogin.mail) {
      
      setbooks([ item, ...books])
      alert("✅book bought please visit my courses to check it")
    }
    else{
     alert("❌Please login to buy books")
    }
  };

  return (
    <div>
      {/* <h1>Filter</h1> */}
      <div className="filtering">
        {/* <h1>Filter</h1> */}
        <select className="form-select " onChange={(e) => filter_data(e)}>
          <option value="">Filter by name</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">Typescript</option>
          <option value="python">python</option>
          <option value="nodejs">Nodejs</option>
          <option value="angular">Angular</option>
          <option value="photography">Photography</option>
        </select>
      </div>
      <div className="data">
        {dataaa.map((item, i) => (
          <div className="data-item" key={i}>
            
            <div className="framebox">
            <img src={item.img} alt="" />
            {/* <h1>Heloooo</h1> */}
            </div>

            <h3>{item.name}</h3>
            <h4>Instructor: {item.instructor}</h4>
            <h3>&#8377; {item.price}</h3>
            <button onClick={() => addbook(item)} className="btn btn-dark">
              buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
