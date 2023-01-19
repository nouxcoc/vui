const Banner = () => {
  return (
    <section className="pt-3 pt-lg-5">
      <div className="container">
        {/* <!-- Content and Image START --> */}
        <div className="row g-4 g-lg-5">
          {/* <!-- Content --> */}
          <div className="col-lg-6 position-relative mb-4 mb-md-0">
            {/* <!-- Title --> */}
            <h1 className="mb-4 mt-md-5 display-5">
              Just <span className="gradient-text">Talk</span> to <span className="gradient-text">Search</span> and{" "}
              <span className="gradient-text">Filter</span> Hotels
            </h1>
            {/* <!-- Info --> */}
            <p className="mb-4">
              VUI is new Generation. Try Search, Filtering, Navigation and Form
              Filling by your Voice
            </p>

            {/* <div className="hstack gap-4 flex-wrap align-items-center">
              <a href="#" className="btn btn-primary-soft mb-0">
                Discover
              </a>
            </div> */}
          </div>

          {/* <!-- Image --> */}
          <div className="col-lg-6 position-relative">
            <img src="assets/images/bg/06.jpg" className="rounded-3" alt="" />
          </div>
        </div>
        {/* <!-- Content and Image END --> */}

        {/* <!-- Search START --> */}
        <div className="row">
          <div className="col-xl-10 position-relative mt-n3 mt-xl-n9">
            {/* <!-- Title --> */}
            <h6 className="d-none d-xl-block mb-3">Check Availability</h6>

            {/* <!-- Booking from START --> */}
            <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
              <div className="row g-4 align-items-center">
                {/* <!-- Location --> */}
                <div className="col-lg-4">
                  <div className="form-control-border form-control-transparent form-fs-md d-flex">
                    {/* <!-- Icon --> */}
                    <i className="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                    {/* <!-- Select input --> */}
                    <div className="flex-grow-1">
                      <label className="form-label">Location</label>
                      <select
                        className="form-select js-choice"
                        data-search-enabled="true"
                      >
                        <option value="">Select location</option>
                        <option>San Jacinto, USA</option>
                        <option>North Dakota, Canada</option>
                        <option>West Virginia, Paris</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* <!-- Check in --> */}
                <div className="col-lg-4">
                  <div className="d-flex">
                    {/* <!-- Icon --> */}
                    <i className="bi bi-calendar fs-3 me-2 mt-2"></i>
                    {/* <!-- Date input --> */}
                    <div className="form-control-border form-control-transparent form-fs-md">
                      <label className="form-label">Check in - out</label>
                      <input
                        type="text"
                        className="form-control flatpickr"
                        data-mode="range"
                        placeholder="Select date"
                        value="19 Sep to 28 Sep"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Guest --> */}
                <div className="col-lg-4">
                  <div className="form-control-border form-control-transparent form-fs-md d-flex">
                    {/* <!-- Icon --> */}
                    <i className="bi bi-person fs-3 me-2 mt-2"></i>
                    {/* <!-- Dropdown input --> */}
                    <div className="w-100">
                      <label className="form-label">Guests & rooms</label>
                      <div className="dropdown guest-selector me-2">
                        <input
                          type="text"
                          className="form-guest-selector form-control selection-result"
                          value="2 Guests 1 Room"
                          data-bs-auto-close="outside"
                          data-bs-toggle="dropdown"
                        />

                        {/* <!-- dropdown items --> */}
                        <ul className="dropdown-menu guest-selector-dropdown">
                          {/* <!-- Adult --> */}
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Adults</h6>
                              <small>Ages 13 or above</small>
                            </div>

                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link adult-remove p-0 mb-0"
                              >
                                <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                              </button>
                              <h6 className="guest-selector-count mb-0 adults">
                                2
                              </h6>
                              <button
                                type="button"
                                className="btn btn-link adult-add p-0 mb-0"
                              >
                                <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                              </button>
                            </div>
                          </li>

                          {/* <!-- Divider --> */}
                          <li className="dropdown-divider"></li>

                          {/* <!-- Child --> */}
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Child</h6>
                              <small>Ages 13 below</small>
                            </div>

                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link child-remove p-0 mb-0"
                              >
                                <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                              </button>
                              <h6 className="guest-selector-count mb-0 child">
                                0
                              </h6>
                              <button
                                type="button"
                                className="btn btn-link child-add p-0 mb-0"
                              >
                                <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                              </button>
                            </div>
                          </li>

                          {/* <!-- Divider --> */}
                          <li className="dropdown-divider"></li>

                          {/* <!-- Rooms --> */}
                          <li className="d-flex justify-content-between">
                            <div>
                              <h6 className="mb-0">Rooms</h6>
                              <small>Max room 8</small>
                            </div>

                            <div className="hstack gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-link room-remove p-0 mb-0"
                              >
                                <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                              </button>
                              <h6 className="guest-selector-count mb-0 rooms">
                                1
                              </h6>
                              <button
                                type="button"
                                className="btn btn-link room-add p-0 mb-0"
                              >
                                <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Button --> */}
              <div className="btn-position-md-middle">
                <a className="icon-lg d-flex justify-content-center align-items-center btn btn-round btn-primary mb-0" href="#">
                  <span className="material-symbols-outlined">search</span>
                </a>
              </div>
            </form>
            {/* <!-- Booking from END --> */}
          </div>
        </div>
        {/* <!-- Search END --> */}
      </div>
    </section>
  );
};

export default Banner;
