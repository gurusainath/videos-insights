import React, { useReducer, createContext } from "react";

export const DesignEditorContext = createContext(null);

const initialState: any = {
  emailProperties: {
    designName: "Design Name",
    // ui elements
    subject: "Enter Subject",
    preheader: "Preheader",
    categories: "Category 1",
  },
  btnProperties: {
    text: "Click here!",
    url: "Enter URL here",
    backgroundColor: "#333333",
    width: 100,
    height: 45,
    padding: 10,
    btnAlignmnet: "center"
  },
  columnProperties: {
    text: "Click here!",
    url: "Enter URL here",
    backgroundColor: "#333333",
    width: 10,
    height: 10,
    padding: 10,
    btnAlignmnet: "center"
  },
  dividerProperties: {
    color: "#333333",
    height: 10,
  },
  imgProperties: {
    url: "",
  },
  socialProperties: {
    iconColor: "#333333",
    iconSize: 18,
    iconAlignment: "center",
    facebookUrl: "",
    pintrestUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
  },
  spacerProperties: {
    height: 10,
  },
  textProperties: {
    text: "Text goes here.",
    font: "Arial",
    fontSize: 12,
    textColor: "000000",
    backgroundColor: "#333333",
  },
  unsubscribeProperties: {
    text: "Click here!",
    url: "Enter URL here",
    backgroundColor: "#333333",
    width: 10,
    height: 10,
    padding: 10,
    btnAlignmnet: "center"
  },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "DESIGN_GLOBAL":
      return { ...state, emailProperties: action.payload };
    case "BUTTON_PROPERTIES":
      return { ...state, btnProperties: action.payload };
    case "COLUMN_PROPERTIES":
      return { ...state, columnProperties: action.payload };
    case "DIVIDER_PROPERTIES":
      return { ...state, dividerProperties: action.payload };
    case "IMAGE_PROPERTIES":
      return { ...state, imgProperties: action.payload };
    case "SOCIAL_PROPERTIES":
      return { ...state, socialProperties: action.payload };
    case "SPACER_PROPERTIES":
      return { ...state, spacerProperties: action.payload };
    case "TEXT_PROPERTIES":
      return { ...state, textProperties: action.payload };
    case "UNSUBSCRIBE_PROPERTIES":
      return { ...state, unsubscribeProperties: action.payload };
    default:
      return state;
  }
};

export const DesignEditorContextProvider = (props: any) => {
  const [state, dispatch]: any = useReducer(reducer, initialState);

  return (
    <DesignEditorContext.Provider value={[state, dispatch] as any}>
      {props.children}
    </DesignEditorContext.Provider>
  );
};
