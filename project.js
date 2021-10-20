const Abaya0 = $("#Abaya0");
const imginput = $("#img");

const AbayaArr = [
  {
    img: "https://cdn.salla.sa/xQRpY/vksKsfXa4O9G3GtHk6BLDrxos7jFBAC55pQ4ptdd.jpg",
  },

  {
    img: "https://cdn.salla.sa/xQRpY/0DrIBTD2N36OqMMOW5EwsODH6FwtdkuKwIeiiq07.jpg",
  },
  {
    img: "https://cdn.salla.sa/xQRpY/DthKPf42I1KNNFPPuNG1pe2mkmjul17D3T5qDK51.jpg",
  },
  {
    img: "https://cdn.salla.sa/xQRpY/KWq9gZSkLfl4r1rZuuT1dvM2SfOMuMkLn4yfppkF.jpg",
  },

  {
    img: "https://cdn.salla.sa/xQRpY/Omd21GuA6Tu3VN2GTiUZjSeP9LpiKOJX3KUEXfvj.jpg",
  },
  {
    img: "https://cdn.salla.sa/xQRpY/NniVLcY5vY10jVqvnfRAPJTPLLAcoOqNjUGd1Of6.jpg",
  },
  {
    img: "https://media.zid.store/cdn-cgi/image/w=300,h=300,q=85,f=auto/https://media.zid.store/thumbs/c501bc60-9ca0-4bf9-ab33-0f9dbbd16690/85c5cbee-5bf7-48fd-a82e-b613fdcfda8c-thumbnail-370x370-70.jpeg",
  },
  {
    img: "https://media.zid.store/cdn-cgi/image/w=300,h=300,q=85,f=auto/https://media.zid.store/thumbs/c501bc60-9ca0-4bf9-ab33-0f9dbbd16690/ffad60ff-67b9-4767-8f7d-44f69da54b22-thumbnail-370x370-70.jpeg",
  },
  {
    img: "https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/c501bc60-9ca0-4bf9-ab33-0f9dbbd16690/d2788fc1-c125-422a-bf65-922cdd49bef6.jpg",
  },
];

function randerArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="seconderyAbaya">
         <img id="img" src="${array[i].img}">
         </div>`);
    Abaya0.append(div);
  }
}

randerArr(AbayaArr);

function add() {
  const newAbaya = {
    img: imginput.val(),
  };
  AbayaArr.push(newAbaya);
  randerArr([newAbaya]);
}

let shox = document.getElementById("sho");
shox.style.display = "none";

let toggle = true;
function show() {
  if (toggle) {
    shox.style.display = "flex";
  } else {
    shox.style.display = "none";
  }
  toggle = !toggle;
}

function deleteImage() {
  AbayaArr.pop();
  Abaya0.html("");
  randerArr(AbayaArr);
}
