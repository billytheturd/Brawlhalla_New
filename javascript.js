const brawl1 = jquery("#Brawl1");
const button = jquery("#gifButton");
const patker = jquery("#Patker");
const button1 = jquery("#pButton");
const gameBroken = jquery("#GameBroken");
const iQ = jquery("#IQ");
const button2 = jquery("#WUT");
//const db = firebase.firestore();

//db.settings({
//   timestampsInSnapshots: true
// })
//
// brawl1.hide();
// patker.hide();
// gameBroken.hide();
// iQ.hide();

// function getComments(){
//   db.collection("comments").get().then(snapshot => {
//     snapshot.docs.forEach((docs, index) => {
//       jquery("#commentWapper").append(docs);
//     })
//   })
// }

button.click(function(){
  // brawl1.animate({"width":"1800px", "height" :"1000px", "opacity": "1"})
  brawl1.toggle();
})

button1.click(function(){
  // patker.animate({"width":"600px", "height":"600px", "opacity":"1"})
  patker.toggle();
})

button2.click(function(){
  gameBroken.toggle();
  iQ.toggle();
  // gameBroken.animate({"width":"900", "height":"600px", "opacity":"1"})
  // iQ.animate({"width":"900", "height":"600px", "opacity":"1"})
})
