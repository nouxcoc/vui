const FeaturedHotels = () => {
  return (
    <section>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Featured Hotels</h2>
          </div>
        </div>

        <div className="row g-4">
          {/* <!-- Hotel item --> */}
          <div className="col-sm-6 col-xl-3">
            {/* <!-- Card START --> */}
            <div className="card card-img-scale overflow-hidden bg-transparent">
              {/* <!-- Image and overlay --> */}
              <div className="card-img-scale-wrapper rounded-3">
                <img
                  src="assets/images/category/hotel/01.jpg"
                  className="card-img"
                  alt="hotel image"
                />
                {/* <!-- Badge --> */}
                <div className="position-absolute bottom-0 start-0 p-3">
                  <div className="badge text-bg-dark fs-6 rounded-pill stretched-link">
                    <i className="bi bi-geo-alt me-2"></i>New York
                  </div>
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div className="card-body px-2">
                <h5 className="card-title">
                  <a href="hotel-detail.html" className="stretched-link">
                    Baga Comfort
                  </a>
                </h5>
                {/* <!-- Price and rating --> */}
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success mb-0">
                    $455 <small className="fw-light">/starting at</small>
                  </h6>
                  <h6 className="mb-0">
                    4.5<i className="fa-solid fa-star text-warning ms-1"></i>
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>

          {/* <!-- Hotel item --> */}
          <div className="col-sm-6 col-xl-3">
            {/* <!-- Card START --> */}
            <div className="card card-img-scale overflow-hidden bg-transparent">
              {/* <!-- Image and overlay --> */}
              <div className="card-img-scale-wrapper rounded-3">
                <img
                  src="assets/images/category/hotel/02.jpg"
                  className="card-img"
                  alt="hotel image"
                />
                {/* <!-- Badge --> */}
                <div className="position-absolute bottom-0 start-0 p-3">
                  <div className="badge text-bg-dark fs-6 rounded-pill stretched-link">
                    <i className="bi bi-geo-alt me-2"></i>California
                  </div>
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div className="card-body px-2">
                <h5 className="card-title">
                  <a href="hotel-detail.html" className="stretched-link">
                    New Apollo Hotel
                  </a>
                </h5>
                {/* <!-- Price and rating --> */}
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success mb-0">
                    $585 <small className="fw-light">/starting at</small>
                  </h6>
                  <h6 className="mb-0">
                    4.8<i className="fa-solid fa-star text-warning ms-1"></i>
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>

          {/* <!-- Hotel item --> */}
          <div className="col-sm-6 col-xl-3">
            {/* <!-- Card START --> */}
            <div className="card card-img-scale overflow-hidden bg-transparent">
              {/* <!-- Image and overlay --> */}
              <div className="card-img-scale-wrapper rounded-3">
                <img
                  src="assets/images/category/hotel/03.jpg"
                  className="card-img"
                  alt="hotel image"
                />
                {/* <!-- Badge --> */}
                <div className="position-absolute bottom-0 start-0 p-3">
                  <div className="badge text-bg-dark fs-6 rounded-pill stretched-link">
                    <i className="bi bi-geo-alt me-2"></i>Los Angeles
                  </div>
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div className="card-body px-2">
                <h5 className="card-title">
                  <a href="hotel-detail.html" className="stretched-link">
                    New Age Hotel
                  </a>
                </h5>
                {/* <!-- Price and rating --> */}
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success mb-0">
                    $385 <small className="fw-light">/starting at</small>
                  </h6>
                  <h6 className="mb-0">
                    4.6<i className="fa-solid fa-star text-warning ms-1"></i>
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>

          {/* <!-- Hotel item --> */}
          <div className="col-sm-6 col-xl-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              {/* <!-- Image and overlay --> */}
              <div className="card-img-scale-wrapper rounded-3">
                <img
                  src="assets/images/category/hotel/04.jpg"
                  className="card-img"
                  alt="hotel image"
                />
                <div className="position-absolute bottom-0 start-0 p-3">
                  <div className="badge text-bg-dark fs-6 rounded-pill stretched-link">
                    <i className="bi bi-geo-alt me-2"></i>Chicago
                  </div>
                </div>
              </div>

              {/* <!-- Card body --> */}
              <div className="card-body px-2">
                <h5 className="card-title">
                  <a href="hotel-detail.html" className="stretched-link">
                    Helios Beach Resort
                  </a>
                </h5>
                {/* <!-- Price and rating --> */}
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-success mb-0">
                    $665 <small className="fw-light">/starting at</small>
                  </h6>
                  <h6 className="mb-0">
                    4.8<i className="fa-solid fa-star text-warning ms-1"></i>
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- Card END --> */}
          </div>
        </div>
        {/* <!-- Row END --> */}
      </div>
    </section>
  );
};

export default FeaturedHotels;
