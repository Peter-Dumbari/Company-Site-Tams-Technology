import React from "react";
import Button from "../../Components/ButtonComponents/Button";
import { Minicard } from "../../ShopComponents/SimpleCard/Simplecard";
import "../DisplayBottomBoard/Bottomboard.scss";

function Bottomboard() {
  const carddatas = [
    {
      id: 0,
      icon: (
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.0001 1H1V14.0001H16.0001V1Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M15.9998 6H19.9999L22.9999 9.00003V14.0001H15.9998V6Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M5.49993 19C6.88066 19 7.99995 17.8807 7.99995 16.5C7.99995 15.1193 6.88066 14 5.49993 14C4.11921 14 2.99991 15.1193 2.99991 16.5C2.99991 17.8807 4.11921 19 5.49993 19Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M18.4998 19C19.8806 19 20.9999 17.8807 20.9999 16.5C20.9999 15.1193 19.8806 14 18.4998 14C17.1191 14 15.9998 15.1193 15.9998 16.5C15.9998 17.8807 17.1191 19 18.4998 19Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      ),
      title: "Free Delivery",
      description: "We offer free delivery on all purchase over $120",
    },
    {
      id: 0,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.33972 14.5628C8.33972 15.9818 9.42872 17.1258 10.7817 17.1258H13.5427C14.7197 17.1258 15.6767 16.1248 15.6767 14.8928C15.6767 13.5508 15.0937 13.0778 14.2247 12.7698L9.79172 11.2298C8.92272 10.9218 8.33972 10.4488 8.33972 9.10678C8.33972 7.87478 9.29672 6.87378 10.4737 6.87378H13.2347C14.5877 6.87378 15.6767 8.01778 15.6767 9.43678"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M12 5.40039V18.6004"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      ),
      title: "Refund",
      description: "Within 30 days for an exchange",
    },
    {
      id: 0,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.47 15.83L17.86 18.99C17.96 19.82 17.07 20.4 16.36 19.97L12.17 17.48C11.71 17.48 11.26 17.45 10.82 17.39C11.56 16.52 12 15.42 12 14.23C12 11.39 9.54003 9.09003 6.50003 9.09003C5.34003 9.09003 4.27004 9.42 3.38004 10C3.35004 9.75 3.34003 9.49999 3.34003 9.23999C3.34003 4.68999 7.29003 1 12.17 1C17.05 1 21 4.68999 21 9.23999C21 11.94 19.61 14.33 17.47 15.83Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M12 14.2298C12 15.4198 11.56 16.5198 10.82 17.3898C9.83001 18.5898 8.26 19.3598 6.5 19.3598L3.89 20.9098C3.45 21.1798 2.89 20.8098 2.95 20.2998L3.2 18.3298C1.86 17.3998 1 15.9098 1 14.2298C1 12.4698 1.94 10.9198 3.38 9.99982C4.27 9.41982 5.34 9.08984 6.5 9.08984C9.54 9.08984 12 11.3898 12 14.2298Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      ),
      title: "Support",
      description: "24 hours a day, 7 days a week ",
    },
    {
      id: 0,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.1228 16.2654L16.2678 3.12036"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M11.0115 18.9054L12.3315 17.5854"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M13.9724 15.9461L16.6014 13.3171"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M2.7614 10.0613L10.0654 2.75729C12.3974 0.425289 13.5634 0.414289 15.8734 2.72429L21.2744 8.12529C23.5844 10.4353 23.5734 11.6013 21.2414 13.9333L13.9374 21.2373C11.6054 23.5693 10.4394 23.5803 8.12939 21.2703L2.7284 15.8693C0.418397 13.5593 0.418397 12.4043 2.7614 10.0613Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path
            d="M1 22.9968H23"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      ),
      title: "Payment",
      description: "Pay with multiple Credit Cards",
    },
  ];
  return (
    <div className="bottomboard_container">
      <div className="main_container">
        <div className="board_innercountainer">
          <div className="board_items">
            <span>Apple iPhone 12 Pro</span>
            <h3 className="board_title">
              The wait is on: <br /> iphone 12 max pro
            </h3>
            <p>
              Last call for up to <span>32%</span> off!
            </p>
            <div className="button_container">
              <Button
                title={"Buy Now"}
                type="danger"
                icon={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.999969 7H13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M6.99997 1L13 7L6.99997 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="downcards">
        <div className="row">
          {carddatas.map(({ id, icon, title, description }) => (
            <div className="col-3" key={id}>
              <Minicard icon={icon} title={title} description={description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bottomboard;
