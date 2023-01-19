import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar-light header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* <!-- Logo START --> */}
          <Link className="navbar-brand" to="/"><span className="fs-3 fw-bold"><span className="gradient-text fs-3 fw-bold">V</span>ui</span>
          </Link>
          {/* <!-- Logo END --> */}

          {/* <!-- Responsive navbar toggler --> */}
          <button
            className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="d-none d-sm-inline-block small">Menu</span>
          </button>

          {/* <!-- Responsive category toggler --> */}
          <button
            className="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCategoryCollapse"
            aria-controls="navbarCategoryCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-grid-3x3-gap-fill fa-fw"></i>
            <span className="d-none d-sm-inline-block small">Category</span>
          </button>

          {/* <!-- Main navbar START --> */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              {/* <!-- Nav item Listing --> */}
              <li className="nav-item dropdown">
                <a
                  className="d-flex nav-link dropdown-toggle"
                  href="#"
                  id="listingMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Listings
                  <span class="material-symbols-outlined">expand_more</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="listingMenu">
                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a
                      className="d-flex justify-content-between dropdown-item dropdown-toggle"
                      href="#"
                    >
                      Hotel
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="index.html">
                          Hotel Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="index-hotel-chain.html"
                        >
                          Hotel Chain
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index-resort.html">
                          Hotel Resort
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="hotel-grid.html">
                          Hotel Grid
                        </a>
                      </li>
                      <li>
                        <Link to="/hotel-list" className="dropdown-item">
                          Hotel List
                        </Link>
                      </li>
                      <li>
                        <Link to="/hotel-detail" className="dropdown-item">
                          Hotel Detail
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="room-detail.html">
                          Room Detail
                        </a>
                      </li>
                      <li>
                        <Link to="/book-hotel" className="dropdown-item">
                          Hotel Booking
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Flight
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="index-flight.html">
                          Flight Home
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="flight-list.html">
                          Flight List
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="flight-detail.html">
                          Flight Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="flight-booking.html">
                          Flight Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Tour
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="index-tour.html">
                          Tour Home
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="tour-grid.html">
                          Tour Grid
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="tour-detail.html">
                          Tour Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="tour-booking.html">
                          Tour Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Cab
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="index-cab.html">
                          Cab Home
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="cab-list.html">
                          Cab List
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="cab-detail.html">
                          Cab Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="cab-booking.html">
                          Cab Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Add Listing
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="join-us.html">
                          Join us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="add-listing.html">
                          Add Listing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="add-listing-minimal.html"
                        >
                          Add Listing Minimal
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="listing-added.html">
                          Listing Added
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Hero
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a
                          className="dropdown-item"
                          href="hero-inline-form.html"
                        >
                          Hero Inline Form
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="hero-multiple-search.html"
                        >
                          Hero Multiple Search
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="hero-image-gallery.html"
                        >
                          Hero Image Gallery
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="hero-split.html">
                          Hero Split
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="booking-confirm.html">
                      Booking Confirmed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="compare-listing.html">
                      Compare Listing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="offer-detail.html">
                      Offer Detail
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item Pages --> */}
              <li className="nav-item dropdown">
                <a
                  className="d-flex nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                  <span class="material-symbols-outlined">expand_more</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  <li>
                    <a className="dropdown-item" href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact-2.html">
                      Contact 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="team.html">
                      Our Team
                    </a>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Authentication
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="sign-in.html">
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="sign-up.html">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="forgot-password.html"
                        >
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="two-factor-auth.html"
                        >
                          Two factor authentication
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Blog
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-detail.html">
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Help
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="help-center.html">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="help-detail.html">
                          Help Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="privacy-policy.html">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="terms-of-service.html"
                        >
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="faq.html">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="error.html">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item Account --> */}
              <li className="nav-item dropdown">
                <a
                  className="d-flex nav-link dropdown-toggle"
                  href="#"
                  id="accounntMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                  <span class="material-symbols-outlined">expand_more</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      User Profile
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-profile.html"
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-bookings.html"
                        >
                          My Bookings
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-travelers.html"
                        >
                          Travelers
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-payment-details.html"
                        >
                          Payment Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-wishlist.html"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="account-settings.html"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="account-delete.html">
                          Delete Profile
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="d-flex justify-content-between dropdown-item dropdown-toggle" href="#">
                      Agent Dashboard
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a
                          className="dropdown-item"
                          href="agent-dashboard.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="agent-listings.html">
                          Listings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="agent-bookings.html">
                          Bookings
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="agent-activities.html"
                        >
                          Activities
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="agent-earnings.html">
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="agent-reviews.html">
                          Reviews
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-settings.html">
                          Settings
                        </a>{" "}
                      </li>
                    </ul>
                  </li>

                  <li>
                    {" "}
                    <a className="dropdown-item" href="admin-dashboard.html">
                      Master Admin{" "}
                      <span className="badge bg-success ms-1 smaller">New</span>
                    </a>{" "}
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item link--> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="advanceMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="material-symbols-outlined">
                    more_horiz
</span>
                </a>
                <ul className="dropdown-menu min-w-auto" data-bs-popper="none">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://support.webestica.com/"
                      target="_blank"
                    >
                      <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/index.html"
                      target="_blank"
                    >
                      <i className="text-danger fa-fw bi bi-card-text me-2"></i>
                      Documentation
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://booking.webestica.com/rtl/"
                      target="_blank"
                    >
                      <i className="text-info fa-fw bi bi-toggle-off me-2"></i>
                      RTL demo
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://themes.getbootstrap.com/store/webestica/"
                      target="_blank"
                    >
                      <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                      Buy Booking!
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/alerts.html"
                      target="_blank"
                    >
                      <i className="text-orange fa-fw bi bi-puzzle-fill me-2"></i>
                      Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Main navbar END --> */}

          {/* <!-- Nav category menu START --> */}
          <div className="navbar-collapse collapse" id="navbarCategoryCollapse">
            <ul className="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0">
              {/* <!-- Nav item Hotel --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link active" href="index.html">
                  <i className="fa-solid fa-hotel me-2"></i>Hotel
                </a>{" "}
              </li>

              {/* <!-- Nav item Flight --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-flight.html">
                  <i className="fa-solid fa-plane me-2"></i>Flight
                </a>{" "}
              </li>

              {/* <!-- Nav item Tour --> */}
              {/* <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-tour.html">
                  <i className="fa-solid fa-globe-americas me-2"></i>Tour
                </a>{" "}
              </li> */}

              {/* <!-- Nav item Cabs --> */}
              {/* <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-cab.html">
                  <i className="fa-solid fa-car me-2"></i>Cab
                </a>
              </li> */}
            </ul>
          </div>
          {/* <!-- Nav category menu END --> */}

          {/* <!-- Profile and Notification START --> */}
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            {/* <!-- Notification dropdown START --> */}
            <li className="nav-item dropdown ms-0 ms-md-3">
              {/* <!-- Notification button --> */}
              <a
                className="nav-notification d-flex justify-content-center align-items-center btn btn-light p-0 mb-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-outlined">notifications</span>
              </a>
              {/* <!-- Notification dote --> */}
              <span className="notif-badge animation-blink"></span>

              {/* <!-- Notification dropdown menu START --> */}
              <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
                <div className="card bg-transparent">
                  {/* <!-- Card header --> */}
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                    <h6 className="m-0">
                      Notifications{" "}
                      <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                        4 new
                      </span>
                    </h6>
                    <a className="small" href="#">
                      Clear all
                    </a>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush list-unstyled p-2">
                      {/* <!-- Notification item --> */}
                      <li>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            New! Booking flights from New York ✈️
                          </h6>
                          <p className="mb-0 small">
                            Find the flexible ticket on flights around the
                            world. Start searching today
                          </p>
                          <span>Wednesday</span>
                        </a>
                      </li>
                      {/* <!-- Notification item --> */}
                      <li>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            Sunshine saving are here 🌞 save 30% or more on a
                            stay
                          </h6>
                          <span>15 Nov 2022</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Card body END --> */}

                  {/* <!-- Card footer --> */}
                  <div className="card-footer bg-transparent text-center border-top">
                    <a href="#" className="btn btn-sm btn-link mb-0 p-0">
                      See all incoming activity
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Notification dropdown menu END --> */}
            </li>
            {/* <!-- Notification dropdown END --> */}

            {/* <!-- Profile dropdown START --> */}
            <li className="nav-item ms-3 dropdown">
              {/* <!-- Avatar --> */}
              <a
                className="avatar avatar-sm p-0"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-auto-close="outside"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="avatar-img rounded-2"
                  src="assets/images/avatar/01.jpg"
                  alt="avatar"
                />
              </a>

              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                {/* <!-- Profile info --> */}
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    {/* <!-- Avatar --> */}
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6 mt-2 mt-sm-0" href="#">
                        Lori Ferguson
                      </a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>

                {/* <!-- Links --> */}
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-bookmark-check fa-fw me-2"></i>My
                    Bookings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-heart fa-fw me-2"></i>My Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear fa-fw me-2"></i>Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-info-circle fa-fw me-2"></i>Help Center
                  </a>
                </li>
                <li>
                  <a className="dropdown-item bg-danger-soft-hover" href="#">
                    <i className="bi bi-power fa-fw me-2"></i>Sign Out
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>

                {/* <!-- Dark mode switch START --> */}
                <li>
                  <div className="modeswitch-wrap" id="darkModeSwitch">
                    <div className="modeswitch-item">
                      <div className="modeswitch-icon"></div>
                    </div>
                    <span>Dark mode</span>
                  </div>
                </li>
                {/* <!-- Dark mode switch END --> */}
              </ul>
            </li>
            {/* <!-- Profile dropdown END --> */}
          </ul>
          {/* <!-- Profile and Notification START --> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
