import React, { useReducer, createContext } from "react";

export const HtmlEditorContext = createContext(null);

const initialState: any = {
  htmlGlobalDetails: {
    designName: "Design Name",
    // ui elements
    subject: "Enter Subject",
    preheader: "Preheader",
    categories: "Category 1",
  },
  htmlString: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "HTML_GLOBAL":
      return { ...state, htmlGlobalDetails: action.payload };
    case "HTML_STRING":
      return { ...state, htmlString: action.payload };
    default:
      return state;
  }
};

export const HtmlEditorContextProvider = (props: any) => {
  const [state, dispatch]: any = useReducer(reducer, initialState);

  return (
    <HtmlEditorContext.Provider value={[state, dispatch] as any}>
      {props.children}
    </HtmlEditorContext.Provider>
  );
};
