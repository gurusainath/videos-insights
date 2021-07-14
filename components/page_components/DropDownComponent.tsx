import React from 'react'
import withAuth from '@lib/hoc/withAuth';
//styled-icons
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
// react-bootstrap
import { Dropdown } from "react-bootstrap";

interface Iprops {
  data: Array<object>;
}
interface ForwardRefProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const DropDownComponent = (props: Iprops) => {

  const CustomToggle = React.forwardRef<HTMLDivElement, ForwardRefProps>(({ onClick }, ref) => (
    <div
      style={{ width: "20px", cursor: "pointer", color: "#C0C0C0" }}
      className="text-center"
      ref={ref}
      onClick={(e: any) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <DotsVerticalRounded size="16px" />
    </div>
  ));

  return (
    <Dropdown drop="left" style={{ marginLeft: "1em", marginRight: "-1em" }}>
      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
      <Dropdown.Menu>
        {props.data &&
          props.data.map((item: any, itemIndex: any) => (
            <Dropdown.Item key={itemIndex}>
              <div style={{
                display: "flex",
                fontSize: "14px",
                padding: "0px 12px"
              }}
              >
                {item.icon && <div style={{ width: "20px", marginRight: "10px" }}>{item.icon}</div>}
                {item.text && <div style={{ fontSize: "14px" }}>{item.text}</div>}
              </div>
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownComponent;
