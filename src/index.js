import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/500";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      My Favorite Foods
    </h1>
    <div>
      <img
        src="https://oryoki.de/media/image/news/83/lg/ist-sushi-gesund.webp"
        alt="sushi"
      />
      <img
        src="https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Egg-Fried-Noodles-With-Beansprouts440x400-c25fc9c.jpg?quality=90&webp=true&resize=300,272"
        alt="fried noodles"
      />
      <img
        src="https://images.getrecipekit.com/20210728133611-H_nchen_Curry_907x567_1.jpg?aspect_ratio=16:9&quality=90"
        alt="chicken curry"
      />
      <h2>Just a random picture</h2>
      <img src={img} alt="random picture" />
    </div>
  </div>,
  document.getElementById("root")
);
