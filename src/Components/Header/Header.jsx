import React from "react";
import "./header2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="header_outer_container"
    >
      {/* Logo Section */}
      <Navbar.Brand href="#home">
        <img src={NetflixLogo} alt="Netflix Logo" width="100" />
      </Navbar.Brand>

      {/* Navbar Toggler */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {/* Navbar Items */}
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* Left Section */}
        <Nav className="header_left">
          <Nav.Link href="#home">{t("home")}</Nav.Link>
          <Nav.Link href="#tvshows">{t("tvshows")}</Nav.Link>
          <Nav.Link href="#movies">{t("movies")}</Nav.Link>
          <Nav.Link href="#latest">{t("latest")}</Nav.Link>
          <Nav.Link href="#mylist">{t("mylist")}</Nav.Link>
          <NavDropdown
            title={t("browse_languages")}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => handleLanguageChange("en")}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange("am")}>
              አማርኛ
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Right Section */}
        <Nav className="header_right ms-auto">
          {" "}
          {/* Add ms-auto or ml-auto */}
          <Nav.Link href="#search">
            <SearchIcon className="icon" />
          </Nav.Link>
          <Nav.Link href="#notifications">
            <NotificationsNoneIcon className="icon" />
          </Nav.Link>
          <Nav.Link href="#account">
            <AccountBoxIcon className="icon" />
          </Nav.Link>
          <Nav.Link href="#dropdown">
            <ArrowDropDownIcon className="icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// import "./header2.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import NetflixLogo from "../../assets/images/NetflixLogo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useTranslation } from "react-i18next";

// const Header = () => {
//   const { t, i18n } = useTranslation();

//   // Function to change language
//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="dark"
//       variant="dark"
//       sticky="top"
//       className="header_outer_container"
//     >
//       <Navbar.Brand href="#home">
//         <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         {/* Left Section */}
//         <Nav className="mr-auto header_left">
//           <Nav.Link href="#home">{t("home")}</Nav.Link>
//           <Nav.Link href="#tvshows">{t("tvshows")}</Nav.Link>
//           <Nav.Link href="#movies">{t("movies")}</Nav.Link>
//           <Nav.Link href="#latest">{t("latest")}</Nav.Link>
//           <Nav.Link href="#mylist">{t("mylist")}</Nav.Link>
//           <NavDropdown
//             title={t("browse_languages")}
//             id="collasible-nav-dropdown"
//           >
//             <NavDropdown.Item onClick={() => handleLanguageChange("en")}>
//               English
//             </NavDropdown.Item>
//             <NavDropdown.Item onClick={() => handleLanguageChange("am")}>
//               አማርኛ
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>

//         {/* Right Section */}
//         <Nav className="header_right">
//           <Nav.Link href="#search">
//             <SearchIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#notifications">
//             <NotificationsNoneIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#account">
//             <AccountBoxIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#dropdown">
//             <ArrowDropDownIcon className="icon" />
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;

// import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import NetflixLogo from "../../assets/images/NetflixLogo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Header = () => {
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="dark"
//       variant="dark"
//       sticky="top"
//       className="header_outer_container"
//     >
//       <Navbar.Brand href="#home">
//         <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         {/* Left Section */}
//         <Nav className="mr-auto header_left">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#tvshows">TV Shows</Nav.Link>
//           <Nav.Link href="#movies">Movies</Nav.Link>
//           <Nav.Link href="#latest">Latest</Nav.Link>
//           <Nav.Link href="#mylist">My List</Nav.Link>
//           <NavDropdown title="Browse by Languages" id="collasible-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">አማርኛ</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>

//         {/* Right Section */}
//         <Nav className="header_right">
//           <Nav.Link href="#search">
//             <SearchIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#notifications">
//             <NotificationsNoneIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#account">
//             <AccountBoxIcon className="icon" />
//           </Nav.Link>
//           <Nav.Link href="#dropdown">
//             <ArrowDropDownIcon className="icon" />
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;

// // import React from "react";
// // import "./Header.css";
// // import NetflixLogo from "../../assets/images/NetflixLogo.png";
// // import SearchIcon from "@mui/icons-material/Search";
// // import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// // import AccountBoxIcon from "@mui/icons-material/AccountBox";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// // function Header() {
// //   return (
// //     <div className="header_outer_container">
// //       <div className="header_container">
// //         <div className="header_left">
// //           <ul>
// //             <li>
// //               <img src={NetflixLogo} alt="Netflix Logo" width="100" />
// //             </li>
// //             <li>Netflix</li>
// //             <li>Home</li>
// //             <li>TVShows</li>
// //             <li>Movies</li>
// //             <li>Latest</li>
// //             <li>MyList</li>
// //             <li>Browse by Languages</li>
// //           </ul>
// //         </div>
// //         <div className="header_right">
// //           <ul>
// //             <li>
// //               <SearchIcon />
// //             </li>
// //             <li>
// //               <NotificationsNoneIcon />
// //             </li>
// //             <li>
// //               <AccountBoxIcon />
// //             </li>
// //             <li>
// //               <ArrowDropDownIcon />
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;

// // import React from "react";
// // import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// // import SearchIcon from "@mui/icons-material/Search";
// // import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// // import AccountBoxIcon from "@mui/icons-material/AccountBox";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// //  import NetflixLogo from "../../assets/images/NetflixLogo.png"; // Update this with your logo path
// // import "./Header.css";

// // const Header = () => {
// //   return (
// //     <Navbar
// //       collapseOnSelect
// //       expand="lg"
// //       bg="dark"
// //       variant="dark"
// //       sticky="top"
// //       className="header_outer_container"
// //     >
// //       <Navbar.Brand href="#home">
// //         <img src={NetflixLogo} alt="Netflix Logo" width="100" />
// //       </Navbar.Brand>
// //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //       <Navbar.Collapse id="responsive-navbar-nav">
// //         <Nav className="mr-auto header_left">
// //           <Nav.Link href="#home">Home</Nav.Link>
// //           <Nav.Link href="#tvshows">TV Shows</Nav.Link>
// //           <Nav.Link href="#movies">Movies</Nav.Link>
// //           <Nav.Link href="#latest">Latest</Nav.Link>
// //           <Nav.Link href="#mylist">My List</Nav.Link>
// //           <NavDropdown title="Browse by Languages" id="collasible-nav-dropdown">
// //             <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
// //             <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
// //             <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
// //           </NavDropdown>
// //         </Nav>

// //         {/* Right Side Icons */}
// //         <Nav className="header_right">
// //           <Nav.Link href="#search">
// //             <SearchIcon className="icon" />
// //           </Nav.Link>
// //           <Nav.Link href="#notifications">
// //             <NotificationsNoneIcon className="icon" />
// //           </Nav.Link>
// //           <Nav.Link href="#account">
// //             <AccountBoxIcon className="icon" />
// //           </Nav.Link>
// //           <Nav.Link href="#dropdown">
// //             <ArrowDropDownIcon className="icon" />
// //           </Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
// //     </Navbar>
// //   );
// // };

// // export default Header;
