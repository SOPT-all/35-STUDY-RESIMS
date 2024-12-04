// src/StyledComponents.js
import { styled } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
`;

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #eaeaea;
`;

export const PropertyPanelContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-left: 1px solid #ddd;
`;

export const ElementBoxContainer = styled.div`
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  width: 100px;
  height: 100px;
  text-align: center;
  align-content: center;
  background-color: ${(props) => props.color || "#fff"};
  border: ${(props) => (props.$isSelected ? "2px solid skyblue" : "none")};
  box-sizing: border-box;
`;
