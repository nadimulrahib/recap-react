import { Suspense } from "react";
import Countries from "./Component/Countries/Countries";
import "./style.css";
import Bottles from "./Component/Bottles/Bottles";
// import ItemCard from "./ItemCard";
// import Todo from "./Todo";
// import Counter from "./Counter";
// import User from "./User";
// import { Suspense } from "react";

// const items = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 1200,
//     stock: 50,
//     image: "https://picsum.photos/seed/mouse/400/400",
//   },
//   {
//     id: 2,
//     name: "Mechanical Keyboard",
//     category: "Electronics",
//     price: 4500,
//     stock: 25,
//     image: "https://picsum.photos/seed/keyboard/400/400",
//   },
//   {
//     id: 3,
//     name: "Gaming Headset",
//     category: "Electronics",
//     price: 3200,
//     stock: 30,
//     image: "https://picsum.photos/seed/headset/400/400",
//   },
//   {
//     id: 4,
//     name: "Laptop Stand",
//     category: "Accessories",
//     price: 1500,
//     stock: 40,
//     image: "https://picsum.photos/seed/laptopstand/400/400",
//   },
//   {
//     id: 5,
//     name: "USB-C Hub",
//     category: "Accessories",
//     price: 1800,
//     stock: 35,
//     image: "https://picsum.photos/seed/usbhub/400/400",
//   },
//   {
//     id: 6,
//     name: "Smart Watch",
//     category: "Wearables",
//     price: 5500,
//     stock: 20,
//     image: "https://picsum.photos/seed/smartwatch/400/400",
//   },
//   {
//     id: 7,
//     name: "Bluetooth Speaker",
//     category: "Audio",
//     price: 2800,
//     stock: 15,
//     image: "https://picsum.photos/seed/speaker/400/400",
//   },
//   {
//     id: 8,
//     name: "Power Bank",
//     category: "Accessories",
//     price: 2200,
//     stock: 45,
//     image: "https://picsum.photos/seed/powerbank/400/400",
//   },
//   {
//     id: 9,
//     name: "Webcam",
//     category: "Electronics",
//     price: 3500,
//     stock: 18,
//     image: "https://picsum.photos/seed/webcam/400/400",
//   },
//   {
//     id: 10,
//     name: "Portable SSD",
//     category: "Storage",
//     price: 7500,
//     stock: 12,
//     image: "https://picsum.photos/seed/ssd/400/400",
//   },
// ];

// const handleClick=()=>{
//   alert("Button clicked!");
// }

// const fetchUserData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json()
//   console.log(data);
//   return data;
// }

const contriesData = fetch("https://dummyjson.com/posts")
.then(res => res.json());
// console.log(contriesData);


const bottlesData = fetch("./bottles.json")
.then(res =>res.json())


function App() {
  // const userPromise = fetchUserData();
  // console.log(countries);
  return (
    <>

    <Suspense fallback={<div>Loading...</div>}>
      

      <div
        className="app container mx-auto justify-center"
       
      >
        <Countries  contriesData={contriesData}/>
      </div>
    </Suspense>


    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="app container mx-auto justify-center"
       
      >
        <Bottles  bottlesData={bottlesData}/>
      </div>
    </Suspense>


      {/* <div>sona pakhi</div>
      <Developer name="John Doe" age="30" skill="JavaScript" />
      <Developer name="John Doe1" age="31" skill="python" />
      <Developer name="sokina" age="25" skill="java" />

      <Todo item="Buy groceries" done={true} />
      <Todo item="Walk the dog" done={false} />
      <Todo item="Read a book" done={true} />
      <Todo item="Write code" done={false} />

        <button className="button bg-red-400" onClick={handleClick}>Click me</button>
        <Counter></Counter>

        <Suspense fallback={<div>Loading...</div>}>

        <User userPromise={userPromise}></User>
        </Suspense>
          
      <div className="card grid grid-cols-3 gap-4">


      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      </div> */}
    </>
  );
}

// function Developer(props) {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <p>Age: {props.age}</p>
//       <p>Skill: {props.skill}</p>
//     </>
//   );
// }

export default App;
