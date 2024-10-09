import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";


const uploadData = async ()=>{
  const ladiesCollectionRef = collection(db, "ladies");
  const menCollectionRef = collection(db, "men");
  const kidsCollectionRef = collection(db, "kids");
  const babyCollectionRef = collection(db, "baby");
  const sportCollectionRef = collection(db, "sport");

  const ladiesData =[

    {
        "id": 1,
        "title": "Ladies Floral Dress",
        "description": "A beautiful floral dress for a stylish day out.",
        "price": 1200,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 2,
        "title": "Ladies Casual Blouse",
        "description": "Comfortable and stylish casual blouse for everyday wear.",
        "price": 900,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 3,
        "title": "Ladies Denim Jacket",
        "description": "Trendy denim jacket to add to your casual wardrobe.",
        "price": 1500,
        "image": "https://via.placeholder.com/150"
      },
  ]

  const menData = [
    {
        "id": 1,
        "title": "Men's Formal Shirt",
        "description": "Stylish formal shirt for office wear.",
        "price": 1300,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 2,
        "title": "Men's Casual T-shirt",
        "description": "Comfortable t-shirt for casual outings.",
        "price": 800,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 3,
        "title": "Men's Leather Jacket",
        "description": "Classic leather jacket for a bold look.",
        "price": 2500,
        "image": "https://via.placeholder.com/150"
      },
  ]

  const kidsData = [
    {
        "id": 1,
        "title": "Kids' Printed T-shirt",
        "description": "Fun and colorful printed t-shirt for kids.",
        "price": 500,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 2,
        "title": "Kids' Shorts",
        "description": "Comfortable shorts for playtime.",
        "price": 600,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 3,
        "title": "Kids' Hoodie",
        "description": "Cozy hoodie for chilly days.",
        "price": 900,
        "image": "https://via.placeholder.com/150"
      },
  ]

  const babyData = [
    {
        "id": 1,
        "title": "Baby Onesie",
        "description": "Soft and comfortable onesie for your little one.",
        "price": 300,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 2,
        "title": "Baby Blanket",
        "description": "Warm and cozy blanket for newborns.",
        "price": 400,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 3,
        "title": "Baby Booties",
        "description": "Cute and soft booties for babies.",
        "price": 250,
        "image": "https://via.placeholder.com/150"
      },
  ]

  const sportData = [
    {
        "id": 1,
        "title": "Yoga Mat",
        "description": "Durable and non-slip yoga mat for your practice.",
        "price": 700,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 2,
        "title": "Sports Water Bottle",
        "description": "Stay hydrated during your workouts.",
        "price": 300,
        "image": "https://via.placeholder.com/150"
      },
      {
        "id": 3,
        "title": "Dumbbell Set",
        "description": "Compact dumbbell set for home workouts.",
        "price": 1200,
        "image": "https://via.placeholder.com/150"
      },
  ]

  try {
    for (let item of ladiesData){
        await addDoc(ladiesCollectionRef,item);
    }
    for(let item of menData){
        await addDoc(menCollectionRef,item)
    }
    for(let item of kidsData){
        await addDoc(kidsCollectionRef,item)
    }
    for(let item of babyData){
        await addDoc(babyCollectionRef,item)
    }
    for(let item of sportData){
        await addDoc(sportCollectionRef,item)
    }
  } catch (error) {
    console.error("error uploading data:", error)
  }

}

 export default uploadData;