import React from "react";
import "../GetQouteSection/Getquotes.scss";
import Button from "../../Components/ButtonComponents/Button";
import Input, {
  SelectInput,
  Textarea,
} from "../../Components/InputComponent/Input";

function Getquotes() {
  const selectOptions = [
    {
      id: 0,
      value: "Freight 1",
      option: "Freight 1",
    },
    {
      id: 1,
      value: "Freight 2",
      option: "Freight 2",
    },
    {
      id: 3,
      value: "Freight 3",
      option: "Freight 3",
    },
  ];
  return (
    <div className="row getqoute_container">
      <div className="col-6 description_column">
        <h6 className="text-uppercase mb-3">Get A Quote</h6>
        <h1 className="mb-5">Request A Free Qoute!</h1>
        <p className="mb-5">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo erat amet
        </p>
        <div className="d-flex align-items-center icon_box">
          <i className="fa fa-headphones fa-2x flex-shrink-0 p-3 icon"></i>
          <div className="ps-4">
            <h6 className="text-dark">Call for any query!</h6>
            <h3 className="m-0">+012 345 6789</h3>
          </div>
        </div>
      </div>
      <div className="col-6 form_column">
        <form>
          <div className="forms">
            <div className="row">
              <div className="col">
                <Input type={"text"} placeholder="Your Name" required={true} />
              </div>
              <div className="col">
                <Input
                  type={"email"}
                  placeholder="Your Email"
                  required={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Input
                  type={"number"}
                  placeholder="Your Mobile"
                  required={true}
                />
              </div>
              <div className="col">
                <SelectInput options={selectOptions} title="Select A Freight" />
              </div>
            </div>
            <Textarea placeholder={"Special Note"} required={true} />
          </div>
          <Button title={"Submit"} type="danger" />
        </form>
      </div>
    </div>
  );
}

export default Getquotes;
