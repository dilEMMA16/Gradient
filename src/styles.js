import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ColorCardOuterDiv = styled.div`
  min-height: 100px;
  margin: 10px;
`;
export const ColorCardColoredDiv = styled.div`
  background-color: ${(props) => props.fill};
  height: 70px;
  border: 3px solid white;
  width: 120px;

  button {
    visibility: hidden;
  }

  :hover button {
    visibility: visible;
  }
`;
export const ColorCardRGBDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  height: 30px;
  color: black;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
`;

export const CopyButtonOuterDiv = styled.div`
  padding-top: 10px;
  text-align: center;
`;

export const CopyButtonActualButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 20px;
`;

export const AppCopyButtonActualButton = styled(CopyButtonActualButton)`
  margin-left: 5px;
  margin-top: 10px;
  float: right;
`;

export const CopyButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 2px;
  font-size: 1.4em;
  :hover {
    cursor: pointer;
  }
`;

export const CopyText = styled.p`
  margin-top: 0;
  color: white;
  display: inline;
  font-family: "coolvetica-rg";
  margin-top: 15px;
  float: right;
`;

export const AppOuterDiv = styled.div`
  text-align: left;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.fill};
  background-image: ${(props) => props.image};
`;

export const AppContentDiv = styled.div`
  padding: 50px;
`;

export const AppSwitchItUpButton = styled.button`
  margin-top: 5vh;
  padding: 10px 20px;
  border: 3px solid white;
  color: white;
  background-color: Transparent;
  font-weight: 700;
  font-size: 3em;
  text-align: left !important;
  min-width: 30vw;
  transition: 0.4s;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: "assox-Regular";
  :hover {
    color: black;
    background-color: white;
  }
`;

export const AppColorsUsedDiv = styled.div`
  color: white;
  padding: 20px 20px;
  border-left: 3px solid white;
  font-size: 1em;
  display: flex;
  font-family: "coolvetica-rg";
`;

export const AppDegreesDiv = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export const AppDegreesButton = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 60px;
  background-color: Transparent;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-right: 10px;
  border: 3px solid white;
  cursor: pointer;
  transition: 0.4s;
  font-family: "coolvetica-rg";
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  :hover {
    background-color: white;
    color: black;
  }
`;

export const AppGradientCodeDiv = styled.div`
  background-color: black;
  font-family: "Courier New";
  color: #7cfc00;
  padding: 10px 30px;
  margin: 20px 0;
  max-width: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
