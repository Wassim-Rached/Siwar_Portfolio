import React from "react";
import styled from "styled-components";
import { Facebook, LinkedIn } from "@material-ui/icons";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Siwar Rached</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
          voluptates ea dolore vel repellat? Quia tenetur non quam
          exercitationem. Lorem ipsum dolor sit amet.
        </p>
        <div className="icons">
          <a href="/" className="icon i-facebook">
            <Facebook />
          </a>
          <a href="/" className="icon i-linkedIn">
            <LinkedIn />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linkedIn {
        &:hover {
          border: 2px solid #0e76a8;
          color: #0e76a8;
        }
      }
    }
  }
`;

export default HomePage;
