import React from "react";
import "./styles.css";
import { useState } from "react";

var recomendationList = {
  Beaches: [
    {
      place: "Paradise Beach",
      rating: "4/5",
      info:
        "Also known as the Full Moon beach, it is 150 meters long and has about 70% of it covered in hard rocks. The remaining part of the beach is covered in pristine white sand."
    },
    {
      place: "Muzhappilangad Drive-in Beach",
      rating: "4.5/5",
      info:
        "Muzhapillangad drive-in beach is easily one of the prettiest beaches in India, and a definite must visit. It is the longest drive in beach across Asia, and being here with your car is an absolute delight for every driving enthusiast. "
    },
    {
      place: "Rock Beach",
      rating: "4.5/5",
      info:
        "Rock beach is regarded as one of the most attractive sight-seeing places in Pondicherry. This beach is situated on the busy streets of Pondicherry. "
    }
  ],
  Hills: [
    {
      place: "Gulmarg, Jammu and Kashmir",
      rating: "4.5/5",
      info:
        "Gulmarg is home to the highest gondola in the world, which runs up to an astounding height of 4000 metres above ground. In the summers, this hill station becomes a paradise for trekkers, and the main tourist activities at Gulmarg include skiing and snowboarding, while the main market is full of jewellery, pashmina, and many other unique souvenirs that you can take home with you."
    },
    {
      place: "Nainital, Uttarakhand ",
      rating: "4.5/5",
      info:
        "A small town in Uttarakhand’s Kumaon range, Nainital is one of the most popular honeymoon destinations in India. It is also known as the ‘Lake District of India’ and has something to offer for everyone, from families and couples to solo travellers."
    },
    {
      place: "Mussoorie, Uttarakhand ",
      rating: "4.5/5",
      info:
        "Mussoorie is one of the most-visited hill stations in India, and is famous for being the home of Ruskin Bond. Located at a distance of about 34 kilometres from Dehradun, the hill station offers amazing views of the Himalayas to the north, and of the Doon valley towards the south. "
    }
  ],
  CultureAndHeritage: [
    {
      place: "Ajanta Caves",
      rating: "4/5",
      info:
        "The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE in the Aurangabad district of Maharashtra state in India.The caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art, particularly expressive paintings that present emotions through gesture, pose and form."
    },
    {
      place: "Fatehpur Sikri",
      rating: "4.5/5",
      info:
        "Fatehpur Sikri is a town in the Agra District of Uttar Pradesh, India. Situated 35.7 kilometers from the district headquarters of Agra, Fatehpur Sikri itself was founded as the capital of Mughal Empire in 1571 by Emperor Akbar, serving this role from 1571 to 1585, when Akbar abandoned it due to a campaign in Punjab and was later completely abandoned in 1610."
    },
    {
      place: "Group of Monuments at Mahabalipuram",
      rating: "4.5/5",
      info:
        "The Group of Monuments at Mahabalipuram is a collection of 7th- and 8th-century CE religious monuments in the coastal resort town of Mahabalipuram, Tamil Nadu, India and a UNESCO World Heritage Site.It is on the Coromandel Coast of the Bay of Bengal, about 60 kilometres south of Chennai."
    }
  ]
};
var placesweknow = Object.keys(recomendationList);

export default function App() {
  var [recomendation, setRecomendation] = useState("Beaches");
  function recomendationClickHandler(recomendation) {
    setRecomendation(recomendation);
  }

  return (
    <div className="App">
      <h1>Travel recomendation</h1>
      <p>"The journey of a thousand miles begins with a single step"</p>
      {placesweknow.map((recomendation) => (
        <button
          style={{ padding: ".5rem", margin: ".8rem" }}
          onClick={() => recomendationClickHandler(recomendation)}
        >
          {recomendation}
        </button>
      ))}
      <hr></hr>
      <div>
        <ul>
          {recomendationList[recomendation].map((item) => (
            <li>
              <h3>
                <div style={{ fontStyle: "italic", color: "" }}>
                  {item.place}
                </div>
              </h3>
              <small>
                <div style={{ padding: ".3rem" }}>{item.rating}</div>
              </small>
              <div>{item.info}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
