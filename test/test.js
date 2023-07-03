
const button = document.querySelector('#button');

button.addEventListener('click', async() => {
  const res = (await fetch('test.php'));
  console.log({res})
  const {data} = await res.json();
  console.log(data)
})
