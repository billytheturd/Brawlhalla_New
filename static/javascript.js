const brawl1 = jQuery("#Brawl1");
const button = jQuery("#gifButton");
const patker = jQuery("#Patker");
const button1 = jQuery("#pButton");
const gameBroken = jQuery("#GameBroken");
const iQ = jQuery("#IQ");
const button2 = jQuery("#WUT");
// const db = firebase.firestore();
//
// db.settings({
//   timestampsInSnapshots: true
// })
//
// brawl1.hide();
// patker.hide();
// gameBroken.hide();
// iQ.hide();
//
// function getComments(){
//   db.collection("comments").get().then(snapshot => {
//     snapshot.docs.forEach((docs, index) => {
//       $("#commentWapper").append(docs);
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
