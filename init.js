const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chitchat');
}

let chat1 = new Chat({
    from:"harsh",
    to :"kashish",
    msg: "meri job lag gyi ",
    created_at: new Date(),
});

let allChats = [
  {
    from: "harsh",
    to: "kashish",
    msg: "Meri job lag gayi 🎉",
    created_at: new Date()
  },
  {
    from: "kashish",
    to: "harsh",
    msg: "Sach mein? Party kab de rahe ho 😄",
    created_at: new Date()
  },
  {
    from: "harsh",
    to: "kashish",
    msg: "Kal se joining hai, thoda nervous hoon 😅",
    created_at: new Date()
  },
  {
    from: "kashish",
    to: "harsh",
    msg: "Tension mat lo, tum best doge 💪",
    created_at: new Date()
  },
  {
    from: "harsh",
    to: "kashish",
    msg: "Thank you ❤️, tumhare support ke bina possible nahi tha",
    created_at: new Date()
  },
  {
    from: "kashish",
    to: "harsh",
    msg: "Celebrate karte hain 🎊",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);


chat1.save().then((res)=>{
    console.log(res);
})