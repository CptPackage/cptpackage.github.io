import React, { Component } from "react";
import Monument from "./Monument";
import FirstMonumentIcon from "../../resources/jpg/FontanaDiTrevi-poster.jpg";
import SecondMonumentIcon from "../../resources/jpg/BasilicaDiSanPietro-poster.jpg";

class MonumentsList extends Component {
  state = {};
  render() {
    return (
      <div className="monuments-container">
        <Monument
          poster={FirstMonumentIcon}
          title="Fontana di trevi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            luctus tellus, ac venenatis mauris. Curabitur at purus rutrum,
            feugiat velit sed, mattis neque. Donec nec gravida est, in semper
            erat. Maecenas vitae justo sit amet mi posuere rhoncus. Donec vitae
            eros fermentum, ornare elit id, auctor libero. Donec interdum
            tristique congue. Donec non orci sodales, eleifend diam a, iaculis
            purus."
        />
        <Monument
          poster={SecondMonumentIcon}
          title="Basilica di san pietro"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            luctus tellus, ac venenatis mauris. Curabitur at purus rutrum,
            feugiat velit sed, mattis neque. Donec nec gravida est, in semper
            erat. Maecenas vitae justo sit amet mi posuere rhoncus. Donec vitae
            eros fermentum, ornare elit id, auctor libero. Donec interdum
            tristique congue. Donec non orci sodales, eleifend diam a, iaculis
            purus."
        />
        <Monument
          poster={FirstMonumentIcon}
          title="Fontana di trevi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            luctus tellus, ac venenatis mauris. Curabitur at purus rutrum,
            feugiat velit sed, mattis neque. Donec nec gravida est, in semper
            erat. Maecenas vitae justo sit amet mi posuere rhoncus. Donec vitae
            eros fermentum, ornare elit id, auctor libero. Donec interdum
            tristique congue. Donec non orci sodales, eleifend diam a, iaculis
            purus."
        />
      </div>
    );
  }
}

export default MonumentsList;
