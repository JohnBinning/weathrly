//maybe tie it to logo instead?

 const conditionStyles = (conditions)=> {
   console.log(conditions.status)

//only evaluating left side of ||, if false then do right thing
//we want it to evaluate || completely as a right side argument
  console.log(conditions.status === ('Mostly Cloudy' || 'Partly Cloudy'))
  if (conditions.status === ('Mostly Cloudy' || 'Partly Cloudy')) {
    document.body.style.backgroundImage = "url('http://www.westessexnow.com/uploads/3/0/7/7/30776419/839755_orig.jpg')"
// } else if (conditions.status === ('Partly Cloudy')) {
//   document.body.style.backgroundImage = "url('http://www.westessexnow.com/uploads/3/0/7/7/30776419/839755_orig.jpg')"
} else if (conditions.status === ('Overcast')) {
  document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
} else if (conditions.status === ('Chance of Rain')) {
  document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
} else if (conditions.status === ('Rain')) {
  document.body.style.backgroundImage = "url('http://rain-yoga.com/wp-content/uploads/2014/08/bg-rain_drops_transparency-II.png')"
} else {
  document.body.style.backgroundImage = "url('https://static.brusheezy.com/system/resources/previews/000/048/054/original/fall-leaves-background-photoshop-backgrounds.jpg')"
  // console.log('else')

}
}

export default conditionStyles;