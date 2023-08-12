const time_cells = document.querySelectorAll("td:first-child");

const dest_cells = document.querySelectorAll("td:nth-child(2)");
console.log(dest_cells)
const gate_cells = document.querySelectorAll("td:nth-child(3)");
const locations_list = [
  [
    { time: "9:32", destination: "!Seville, Spain", gate: "A12" },
    { time: "9:40", destination: "Marrakech, Morocco", gate: "B14" },
    { time: "10:15", destination: "Singapore", gate: "D14" },
    { time: "11:20", destination: "Lisbon, Portugal", gate: "A5" },
    { time: "14:28", destination: "Bali, Indonesia", gate: "E8" },
    { time: "15:10", destination: "Paris, France", gate: "H12" }
  ],
  [
    { time: "15:23", destination: "Phuket, Thailand", gate: "C5" },
    { time: "16:30", destination: "Madrid, Spain", gate: "D1" },
    { time: "16:42", destination: "Porto, Portugal", gate: "D12" },
    { time: "16:55", destination: "Athens, Greece", gate: "H6" },
    { time: "17:03", destination: "Genoa, Italy", gate: "C12" },
    { time: "17:12", destination: "Ljubljana, Slovenia", gate: "B2" }
  ],
  [
    { time: "17:23", destination: "Honolulu, Hawaii", gate: "A14" },
    { time: "17:45", destination: "Vienna, Austria", gate: "A3" },
    { time: "18:00", destination: "Venice, Italy", gate: "I15" },
    { time: "18:08", destination: "Zagreb, Croatia", gate: "B2" },
    { time: "18:10", destination: "Shanghai, China", gate: "C20" },
    { time: "19:15", destination: "Hanoi, Vietnam", gate: "H2" }
  ]

];
let cell_index = 0;
let table_index = 0;


const prev_btn = document.getElementById('prev_btn');
const next_btn = document.getElementById('next_btn');
const prev_icon = document.getElementById('prev_icon')
const next_icon = document.getElementById('next_icon')
const prev_span = document.getElementById('prev_span')
const next_span = document.getElementById('next_span');
function showFlights(move) {
  if (move == "next") {
    ++table_index;
  }
  else {
    --table_index;
  }
  if (cell_index >= locations_list[0].length) {
    cell_index = 0;
  }
  if (table_index >= locations_list.length) {
    table_index = locations_list.length - 1
    next_btn.disabled = true;
    next_span.style.color = "rgb(176, 176, 176)"

  }
  else {
    next_btn.disabled = false;

  }
  if (cell_index < 0) {
    cell_index = 0;
  }
  if (table_index < 0) {
    table_index = 0
    prev_btn.disabled = true;
    prev_span.style.color = "rgb(176, 176, 176)"
  } else {
    prev_btn.disabled = false;
  }
  time_cells.forEach((cell, index) => {
    cell.textContent = locations_list[table_index][cell_index].time;
    dest = locations_list[table_index][cell_index].destination;
    if (dest.includes('!')) {
      const link = document.createElement('a');


      city_name = dest.slice(1, dest.indexOf(',')).trim();
      city_country_name = dest.replace('!', '');
      console.log(city_country_name);
      link.href = './blog/' + city_name + '.html';
      link.textContent = city_country_name;     // Set the 
      dest_cells[index].removeChild(dest_cells[index].firstChild);
      dest_cells[index].appendChild(link)
    }
    else {
      dest_cells[index].textContent = locations_list[table_index][cell_index].destination;
    }
    gate_cells[index].textContent = locations_list[table_index][cell_index].gate;
    cell_index++;
  });

}

//LEFT AND RIGHT ARROWS FOR TABLE NAVIGATIONS

prev_btn.addEventListener('mouseenter', () => {
  console.log("prev" + prev_btn.disabled)
  console.log("nex" + next_btn.disabled)
  if (prev_btn.disabled == false) {
    //dark
    prev_span.style.color = "rgb(125, 123, 123)"
  }
});

next_btn.addEventListener('mouseenter', () => {
  console.log("prev" + prev_btn.disabled)
  console.log("nex" + next_btn.disabled)
  if (next_btn.disabled == false) {
    //dark
    next_span.style.color = "rgb(125, 123, 123)"
  }
});

prev_btn.addEventListener('mouseleave', () => {
  //light
  prev_span.style.color = "rgb(176, 176, 176)"
});

next_btn.addEventListener('mouseleave', () => {
  //light
  next_span.style.color = "rgb(176, 176, 176)"
});
