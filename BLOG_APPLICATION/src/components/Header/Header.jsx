import React from "react";
import { Logout, Container, Logo, Button } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: "true",
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-post",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <Header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4 ">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div>
            <ul className="flex ml-auto">
              {
                navItem.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <Button children={item.name} onClick={() => navigate(item.slug)}/>
                  </li>
                ) : null
                )
              }
              {
                authStatus && (
                  <li>
                    <Logout/>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </Container>
    </Header>
  );
};

export default Header;
