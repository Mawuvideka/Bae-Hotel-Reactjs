import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, atque at quaerat voluptates dolores doloremque.",
      },
      {
        icon: <FaHiking />,
        title: "All day hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, atque at quaerat voluptates dolores doloremque.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free rides",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, atque at quaerat voluptates dolores doloremque.",
      },
      {
        icon: <FaBeer />,
        title: "Free Coronas",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, atque at quaerat voluptates dolores doloremque.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
