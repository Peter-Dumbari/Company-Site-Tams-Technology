import React, { useContext } from "react";
import "./Detailitem.scss";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Shopcontext/Provider";

function Detailitem() {
  const number = useParams();
  const id = 2;
  const [item, setItem] = React.useState();
  const { Toprateditems } = useContext(GlobalContext);

  function getDataById(id) {
    const result = Toprateditems.find((item) => item.id === id);
    return result != undefined && result != null
      ? setItem(result)
      : setItem("Nothing is here yet");
  }
  console.log("item", item);

  React.useEffect(() => {
    getDataById(Number(id));
  }, [id]);

  return;
}

export default Detailitem;
