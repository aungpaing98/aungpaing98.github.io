import React, { useEffect, useRef } from "react";
import MapboxGl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import StyledSection from "../../styled/StyledSection";

const StyledContact = styled.div`
  width: max(84%, 350px);
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0.8rem;
  }
`;

const StyledMap = styled.div`
  height: 300px;
  width: max(100%, 330px);

  z-index: 100;

  margin-bottom: 22px;
  border-radius: 10px;
`;

const ContactLink = styled.button`
  height: 60px;
  width: 300px;
  border: 2px dashed black;
  border-radius: 10px;
  background-color: ${(props) => props.theme.neon};
  box-shadow: 4px 4px 0px ${(props) => props.theme.shadow};
  margin: 0 0 0.8rem 0.8rem;

  font-size: ${(props) => props.theme.nm};
  color: ${(props) => props.theme.dark};

  a {
    font-weight: bold;
    color: ${(props) => props.theme.dark};
  }
`;

export default function Contact() {
  const mapRef = useRef();

  MapboxGl.accessToken =
    "pk.eyJ1IjoiYXVuZy1wYWluZyIsImEiOiJja3dhM2dxeWwwMWlnMnZxa2hpODY2YW92In0.0wz7DYkuY6c7kxypnVRzcw";

  useEffect(() => {
    const map = new MapboxGl.Map({
      container: mapRef.current,
      style: "mapbox://styles/aung-paing/ckwa3ldy17dr916mpsgyct1v1",
      center: [96.09218571662913, 21.934148530329352],
      zoom: 12,
    });

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [96.11218571662903, 21.934148530329352],
          },
        },
      ],
    };

    map.on("load", () => {
      map.addSource("point", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "location",
        source: "point",
        type: "symbol",
        layout: {
          "icon-image": "paing-logo",
          "icon-size": 0.2,
        },
      });

      const img = document.createElement("img");
      img.src = "/embeds/location.png";
      img.alt = "Aung Paing's Logo";

      img.addEventListener("load", () => map.addImage("paing-logo", img));
    });
  }, [mapRef]);

  return (
    <StyledContact>
      <h1>Contact</h1>
      <StyledMap ref={mapRef}></StyledMap>
      <StyledSection>
        <h1>On the Web</h1>
        <ContactLink>
          <a href="mailto:aungpaingcha1@gmail.com">Gmail</a>
        </ContactLink>
        <ContactLink>
          <a
            href="https://www.linkedin.com/in/aungpaing98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ContactLink>
        <ContactLink>
          <a
            href="http://aungpaing98.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </ContactLink>
        <ContactLink>
          <a
            href="https://www.facebook.com/aung.paing.jj.986"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </ContactLink>
      </StyledSection>
    </StyledContact>
  );
}
