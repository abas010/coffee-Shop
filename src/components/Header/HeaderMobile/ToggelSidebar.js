import React, { useContext } from "react";
import toggelContext from "../../../Contexts/ToggelSidebarsMobile";

export default function ToggelSidebar(props) {
  const ToggelContext = useContext(toggelContext);
  const closeHandeler = () => {
    if (props.isRight) {
      if (ToggelContext.isShowNavMobile) {
        ToggelContext.setIsShowNavMobile(false);
      } else {
        ToggelContext.setIsShowNavMobile(true);
      }
    } else {
      if (ToggelContext.isShowCartMobile) {
        ToggelContext.setIsShowCartMobile(false);
      } else {
        ToggelContext.setIsShowCartMobile(true);
      }
    }
  };
  return <span onClick={closeHandeler}>{props.children}</span>;
}
