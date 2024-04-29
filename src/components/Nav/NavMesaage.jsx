import React from "react";

function NavMesaage() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Bedii</h4>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu...
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Hatice Nur</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore officia A
                est ut...
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-ircle"
            />

            <div>
              <h4>Nikola Tesla</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore officia
                est ut...
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all messages</a>{" "}
        </li>
      </ul>
    </li>
  );
}

export default NavMesaage;
