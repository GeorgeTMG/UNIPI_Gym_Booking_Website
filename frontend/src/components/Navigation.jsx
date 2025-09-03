function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3">
            <div class="container">
                <a class="navbar-brand fw-bold fs-2 me-5" href="#">Gym Booking</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav fs-4">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" id="nav-links">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" id="nav-links">Services</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item pe-4">
                        <button class="btn btn-outline-primary bg-light fw-bold text-dark fs-5" id="login">Login</button>
                        </li>
                        <li class="nav-item">
                        <button class="btn btn-outline-danger bg-light fw-bold text-dark fs-5" id="register">Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;